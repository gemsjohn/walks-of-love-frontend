import React from 'react';
import axios from 'axios';
import { job_details } from './fetch';

import { userSession } from '../auth';

let stxAddress;
let str_stxAddress;

if (userSession.isSignInPending()) {
    userSession.handlePendingSignIn().then(userData => {
      window.history.replaceState({}, document.title, '/');
      this.setState({ userData: userData });
    });
  } else if (userSession.isUserSignedIn()) {
    stxAddress = userSession.loadUserData().profile.stxAddress.mainnet;
    str_stxAddress = JSON.stringify(stxAddress);

  }

const jobsCardArray = [];

// This currently produces a 404 error
function AcceptJob(num) {
    console.log("Accepted: ", num, "stxAddress: ", str_stxAddress);
    async function myFunction() {
        const res = await axios.put(`https://pacific-depths-79804.herokuapp.com/api/jobs/` + num + ``, {walker_id: str_stxAddress});
        return res.data.json;
    }
    myFunction();
}


function JobsCard() {
    for (let i = 0; i < job_details().allJobs.length; i++) {
        let visit;
        if (job_details().allJobs[i].j_check_in === true) {
            visit = "Check in"
        } else {
            visit = "Walk"
        }

        if (job_details().allJobs[i].j_walker_id == null) {
            jobsCardArray[i] = 
                <div>
                    <div class="jobs">
                        <div class="card mb-2">
                            <div class="card-body">
                                <h4 class="card-title">{job_details().allJobs[i].j_owner_first_name} {job_details().allJobs[i].j_owner_last_name}</h4>
                                <h5 class="card-text">Pet: {job_details().allJobs[i].j_pet_name}</h5>
                                <h5 class="card-subtitle">Visit: {visit}</h5>
                                <h5 class="card-text">Pay: {job_details().allJobs[i].j_pay}</h5>
                                <h6 class="card-text text-muted">Time: {job_details().allJobs[i].j_timeframe}</h6>
                                <h6 class="card-text text-muted">Location: {job_details().allJobs[i].j_location}</h6>
                                {/* {{!-- (HELPER) function that determines if the person logged in is the creator of this job and it's active--}} */}
                                {/* {{#unless completed}} */}
                                {/* <button id="delete-job" class="float-right btn success" type="button">Delete</button> */}
                                {/* {{/unless}} */}
                                {/* {{!-- (HELPER) if logged in as walker and job not accepted --}}
                                {{#if acceptable}} */}
                                <button id="accept-job" class="float-right btn success" type="button" onClick={() => AcceptJob(job_details().allJobs[i].j_id)}>Accept</button>
                                {/* {{/if}} */}
                            </div>
                        </div>
                        {/* {{/each}} */}
                    </div>
                </div>;
        }
    }
    return jobsCardArray;
}

function WalkerDash() {
    JobsCard();
    return (
        <div>
            <div className="dashboard-container">
                <h1 id="your-dashboard" className="text-center">Walker Dashboard</h1>
                <div id="jobs-container" className="d-flex flex-column mx-auto" style={{width: '92%'}}>
                    <div className="tabbable">
                        <ul className="nav nav-tabs">
                            <li className="active nav-item">
                                <a className="nav-link active job-tab" href="#tab1" data-toggle="tab">Current posts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link job-tab" href="#tab2" data-toggle="tab">Past posts</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="tab1">
                                <p>List of current posts</p>
                                {jobsCardArray}
                            </div>
                            <div className="tab-pane" id="tab2">
                                <p>List of past jobs</p>
                                {/* [NEED]  THESE SHOULD BE COMPLETED JOBS */}
                                {jobsCardArray}
                            </div>
                        </div>
                    </div>  
                </div>     
            </div>
        </div>
    )
}

export default WalkerDash;
