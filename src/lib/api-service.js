import axios from 'axios';
import { getStitchClient } from './stitch-client';

const KEY = '12345';
const BASE_URL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/wit-lib-ixdpn/service/book-management/incoming_webhook';

function buildApiCall(url, method, headers, data) {
  return axios({
    url,
    method,
    baseURL: BASE_URL,
    headers,
    data,
    params: {
      clientID: getStitchClient().getUserId(),
      secret: KEY,
    },
  });
}

function addBook(data) {
  return buildApiCall('/addBooks', 'post', { 'Content-Type': 'text/plain' }, data);
}

function getBooks() {
  return buildApiCall('/getBooks', 'get');
}

function testHook() {
  return buildApiCall('/testHook', 'get');
}

export { addBook, getBooks, testHook };
