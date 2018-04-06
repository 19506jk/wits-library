import axios from 'axios';
import { getUserId } from './stitch-client';

const KEY = '12345';

function buildUrl(url) {
  return `${url}?secret=${KEY}`;
}

function buildHeader(headers) {
  return Object.assign({}, headers, { 'Auth-Id': getUserId() });
}

function addBook(data) {
  const url = buildUrl('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/wit-lib-ixdpn/service/book-management/incoming_webhook/addBooks');
  const headers = {
    'Content-Type': 'application/json',
  };
  return axios.post(url, {
    headers: buildHeader(headers),
    data,
  });
}

function getBooks() {
  const url = buildUrl('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/wit-lib-ixdpn/service/book-management/incoming_webhook/getBooks');
  return axios.get(url);
}

function testHook() {
  const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/wit-lib-ixdpn/service/book-management/incoming_webhook/testHook?secret=12345';
  return axios.post(url, { d: 'd' })
    .then(data => console.log(data))
    .catch(ex => console.log(ex));
}

export { addBook, getBooks, testHook };
