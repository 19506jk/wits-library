import { StitchClientFactory } from 'mongodb-stitch';

let stitchClient = null;
let userId = null;

function initializeStitch() {
  return StitchClientFactory.create('wit-lib-ixdpn').then((client) => {
    stitchClient = client;
    userId = client.authedId();
    return Promise.resolve();
  });
}

function getStitchClient() {
  return stitchClient;
}

function getUserId() {
  return userId;
}

export { initializeStitch, getStitchClient, getUserId };
