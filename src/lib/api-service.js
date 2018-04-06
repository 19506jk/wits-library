import 'whatwg-fetch';
import CryptoJS from 'crypto-js';

const KEY = '12345';

function buildFetchCall(url, method, payload, headers) {
  const hash = CryptoJS.HmacSHA256(JSON.stringify(payload), KEY);
  const signature = { 'X-Hook-Signature': `sha256=${hash}` };

  return fetch(url, {
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

export { addBook, getBooks };
