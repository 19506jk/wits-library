import 'whatwg-fetch';
import CryptoJS from 'crypto-js';

const KEY = '12345';

function buildFetchCall(payload) {
  const hash = CryptoJS.HmacSHA256(JSON.stringify(payload), KEY);
  return `sha256=${hash}`;
}

function addBook(payload) {
  const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/wit-lib-ixdpn/service/book-management/incoming_webhook/AddBook';
  const signature = buildFetchCall(payload);
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hook-Signature': signature,
      Origin: 'https://wits-uw-library.netlify.com/',
    },
    body: JSON.stringify(payload),
  });
}

export default addBook;
