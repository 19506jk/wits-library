import 'whatwg-fetch';
import { getUserId } from './stitch-client';

const KEY = '12345';

function buildFetchCall(url, method, payload, headers) {
  const signature = {
    'Auth-Id': getUserId(),
  };
  const fullUrl = `${url}?secret=${KEY}`;

  return fetch(fullUrl, {
    method,
    headers: Object.assign({}, headers, signature),
    body: JSON.stringify(payload),
  })
    .then(res => res.json());
}

function addBook(payload) {
  const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/wit-lib-ixdpn/service/book-management/incoming_webhook/addBooks';
  const headers = {
    'Content-Type': 'application/json',
  };
  return buildFetchCall(url, 'POST', payload, headers);
}

function getBooks() {
  const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/wit-lib-ixdpn/service/book-management/incoming_webhook/getBooks';
  return buildFetchCall(url, 'GET');
}

function testHook() {
  const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/wit-lib-ixdpn/service/book-management/incoming_webhook/testHook';
  return buildFetchCall(url, 'POST', { d: 'd' });
}

export { addBook, getBooks, testHook };
