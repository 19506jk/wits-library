import { StitchClientFactory } from 'mongodb-stitch';

let stitchClient = null;

function initializeStitch() {
  return StitchClientFactory.create('wit-lib-ixdpn').then((client) => {
    stitchClient = client;
    return Promise.resolve();
  });
}

function getStitchClient() {
  return stitchClient;
}

export { initializeStitch, getStitchClient };
