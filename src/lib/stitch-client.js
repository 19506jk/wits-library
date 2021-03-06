import {
  Stitch,
  GoogleRedirectCredential,
} from 'mongodb-stitch-browser-sdk';

const APP_ID = 'wit-lib-ixdpn';
let stitchClient;

class StitchClient {
  constructor() {
    this.client = Stitch.initializeDefaultAppClient(APP_ID);
  }

  login() {
    return this.client.auth.loginWithRedirect(new GoogleRedirectCredential());
  }

  handleLoginResult() {
    console.log(this.client.auth.hasRedirectResult());
    if (this.client.auth.hasRedirectResult()) {
      return this.client.auth.handleRedirectResult();
    }
    return Promise.reject(null);
  }

  logout() {
    return this.client.auth.logout();
  }

  getUserId() {
    return this.client.auth.user.id;
  }

  getUserProfile() {
    return this.client.auth.user.profile;
  }

  isLoggedIn() {
    return this.client.auth.isLoggedIn;
  }
}

export function initializeStitchClient() {
  if (!stitchClient) {
    stitchClient = new StitchClient();
  }
}

export function getStitchClient() {
  return stitchClient;
}
