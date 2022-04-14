// Primary dependencies
import React, { Component } from 'react';
import { Signin, Signout } from './Signin';
import { userSession } from '../auth';


// Export the 'App' class to /src/index.js
export default class App extends Component {
  state = {
    userData: null,
  };

  handleSignOut(e) {
    e.preventDefault();
    this.setState({ userData: null });
    userSession.signUserOut(window.location.origin);
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        window.history.replaceState({}, document.title, '/');
        this.setState({ userData: userData });
      });
    } else if (userSession.isUserSignedIn()) {
      this.setState({ userData: userSession.loadUserData() });
    }
  }

  // Render the Login or Logout button depending on the user session i.e. is the user signed in or not?
  render() {
    return (
      <div>
          {!userSession.isUserSignedIn() ? <Signin /> : <Signout/>}
      </div>
    );
  }
}
