import React from 'react';
import { authenticate, disconnect } from '../auth';
import { getUserData } from '../auth';
import Homepage from './homepage';
import { owner_details, walker_details } from './fetch';
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
      {/* The following terenary operators will execute in sequence. */}
      {/* If you find the key in the Owners Table then render the Owner Dashboard.  */}
      {stxAddress === owner_details(str_stxAddress).o_id ? <OwnerDash /> : console.log("This account is not registered as an Owner.")}      
      {/* If you find the key in the Walker Table then render the Walker Dashboard.  */}
      {stxAddress === walker_details(str_stxAddress).w_id ? <WalkerDash /> : console.log("This account is not registered as a Walker.")}    
    </div>
    
  );
};

