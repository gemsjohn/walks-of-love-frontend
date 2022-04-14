import React from 'react';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions';
import { job_details } from '../fetch';



let btnHandler;
const jobsCardArray = [];


function JobsCard() {
    console.log(job_details().allJobs);
    for (let i = 0; i < job_details().allJobs.length; i++) {
        let visit;
        if (job_details().allJobs[i].j_check_in === true) {
            visit = "Check in"
        } else {
            visit = "Walk"
        }

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
                        <button id="delete-job" class="float-right btn success" type="button">Delete</button>
                        {/* {{/unless}} */}
                        {/* {{!-- (HELPER) if logged in as walker and job not accepted --}}
                        {{#if acceptable}} */}
                        <button id="accept-job" class="float-right btn success" type="button">Accept</button>
                        {/* {{/if}} */}
                    </div>
                </div>
                {/* {{/each}} */}
            </div>
        </div>;
    }
    return jobsCardArray;
}



export default JobsCard;
