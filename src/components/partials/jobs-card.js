import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions';

function JobsCard() {
    return (
        <div>
            <div class="jobs">
                {/* {{#each this}} */}
                <div class="card mb-2">
                    <div class="card-body">
                        <h4 class="card-title"> First Last Name</h4>
                        <h5 class="card-text">Pet: Pet Name </h5>
                        <h5 class="card-subtitle">Visit: If Walk If Checkin</h5>
                        <h5 class="card-text">Pay: Value</h5>
                        <h6 class="card-text text-muted">Time: Timeframe</h6>
                        <h6 class="card-text text-muted">Location: Location</h6>
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
        </div>
    )
}

export default JobsCard;
