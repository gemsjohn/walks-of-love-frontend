import React from 'react';
import { authenticate, disconnect } from '../auth';
// import { Text } from '@blockstack/ui';
import { getUserData } from '../auth';
import Homepage from './homepage';
import { owner_details, walker_details } from './fetch';


// Main handlebars HTML template. This is a necessity and it handles page formatting. 
// import { Main } from './handlebars/main';

// Various user pages (Owner / Walker). pets-cards, nav-block, and jobs-card are currently 
// contained within each one of these files as needed. It may be more appropriate
// to create standalone JS files for re-use. The current set up is NOT DRY.
import OwnerDash from './owner-dashboard';
import WalkerDash from './walker-dashboard';

function Search() {
  console.log("placeholder to navigate to search page")
}


// Signin function. Based on the App.jsx --> render() terenary operator this
// is the truthy value and exports on the Homepage. Once the user is logged in, 
// then Signout() exports.
export const Signin = () => {
  return (
    <div>
      <div>
        <div className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <a className="navbar-brand" href="/">Scout</a>
            <ul className="nav navbar-nav ml-auto"></ul>
          <button type="button" className="btn success" onClick={() => authenticate()}>Login</button>
        </div>
      </div>
      {/* Render Main handlebars HTML and Homepage handlebars HTML pages. */}
      {/* <Main />
      <Homepage /> */}
      <Homepage />
    </div>
  );
};

// Signout function. Based on the App.jsx --> render() terenary operator this
// is the falsy value and exports once the user logs in. Once the user is logged in, 
// then Signout() exports.
export const Signout = () => {
  const stxAddress = getUserData().profile.stxAddress.mainnet;
  const str_stxAddress = JSON.stringify(stxAddress);
  const shortenedStxAddress = stxAddress.substr(0, 4) + "...." + stxAddress.substr(stxAddress.length-4, stxAddress.length);
  return (
    <div>
      <div>
        <div className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <a className="navbar-brand" href="/">Scout</a>
          <ul className="nav navbar-nav ml-auto"></ul>
          <h6 className="address-color">{shortenedStxAddress} </h6>
          <button type="button" className="btn success" onClick={() => disconnect()}>Logout</button>
          {stxAddress === walker_details(str_stxAddress).w_id ? <button type="button" className="btn success" onClick={() => Search()}>Search</button> : console.log("This account is not registered as a Walker.")}
        </div>
      </div>
      {/* Render the Main handlebars HTML page. */}
      {/* The following terenary operators will execute in sequence. */}
      {/* If you find the key in the Owners Table then render the Owner Dashboard.  */}
      {stxAddress === owner_details(str_stxAddress).o_id ? <OwnerDash /> : console.log("This account is not registered as an Owner.")}      {/* If you find the key in the Walker Table then render the Walker Dashboard.  */}
      {stxAddress === walker_details(str_stxAddress).w_id ? <WalkerDash /> : console.log("This account is not registered as a Walker.")}    </div>
    
  );
};

