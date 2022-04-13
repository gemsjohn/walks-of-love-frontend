import React from 'react';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions';
// import { getUserData } from '../../auth';
import { job_details } from '../fetch';

const jobsCardArray = [];

// Pull jobs based on the users stxAddress. This function reviews the /api/jobs DB and searches
// for an owner_id that equals the users stxAddress (the unique id that corresponds to their Hiro Web Wallet account)

function JobsCard() {
    
    // console.log(job_details().data_legnth);
    // console.log(job_details().allJobs);
    for (let i = 0; i < job_details().allJobs.length; i++) {
        let visit;
        if (job_details().allJobs[i].j_check_in === true) {
            visit = "Check in"
        } else {
            visit = "Walk"
        }
        // console.log(job_details().allJobs[i].j_owner_first_name);
        jobsCardArray[i] = 
                <div className="jobs">
                    <div className="card mb-2">
                        <div className="card-body">
                            <h4 className="card-title">{job_details().allJobs[i].j_owner_first_name}</h4>
                            <h5 className="card-text">Pet: {job_details().allJobs[i].j_pet_name}</h5>
                            <h5 className="card-subtitle">Visit: {visit}</h5>
                            <h5 className="card-text">Pay: {job_details().allJobs[i].j_pay}</h5>
                            <h6 className="card-text text-muted">Time: {job_details().allJobs[i].j_timeframe}</h6>
                            <h6 className="card-text text-muted">Location: {job_details().allJobs[i].j_location}</h6>
                            {/* {{!-- (HELPER) function that determines if the person logged in is the creator of this job and it's active--}}
                            {/* {{#unless completed}} */}
                            <button id="delete-job" className="float-right btn success" type="button">Delete</button>
                            {/* {{/unless}} */}
                            {/* {{!-- (HELPER) if logged in as walker and job not accepted --}}
                            {{#if acceptable}} */}
                            <button id="accept-job" className="float-right btn success" type="button">Accept</button>
                            {/* {{/if}} */}
                        </div>
                    </div>
                </div>;
    }
    return jobsCardArray;
    
}



export default JobsCard;
