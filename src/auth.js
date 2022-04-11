// Primary dependencies
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { Person } from '@stacks/profile';

const appConfig = new AppConfig(['store_write', 'publish_data']);

export const userSession = new UserSession({ appConfig });

// Authentication modal displays (Hiro Web Wallet - Browser Extension)
export function authenticate() {
  showConnect({
    appDetails: {
      name: 'Test',
      icon: window.location.origin + './assets/puppy.png',
    },
    redirectTo: '/',
    onFinish: () => {
      window.location.reload();
    },
    userSession: userSession,
  });
}

// Get user data
export function getUserData() {
  return userSession.loadUserData();
}

// Identify the profile
export function getPerson() {
  return new Person(getUserData().profile);
}

// Disconnect from the userSession
export function disconnect() {
  userSession.signUserOut(window.location.origin);
  
}
