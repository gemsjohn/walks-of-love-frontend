import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions';
import JobsCard from './partials/jobs-card';

function WalkerDash() {
    return (
        <div>
            <div class="dashboard-container">
                <h1 id="your-dashboard" class="text-center">Walker Dashboard</h1>
                <div id="jobs-container" class="d-flex flex-column mx-auto" style={{width: '92%'}}>
                    <div class="tabbable">
                        <ul class="nav nav-tabs">
                            <li class="active nav-item">
                                <a class="nav-link active job-tab" href="#tab1" data-toggle="tab">Current posts</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link job-tab" href="#tab2" data-toggle="tab">Past posts</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="tab1">
                                <p>List of current posts</p>
                                <JobsCard />
                            </div>
                            <div class="tab-pane" id="tab2">
                                <p>List of past jobs</p>
                                {/* [NEED]  THESE SHOULD BE COMPLETED JOBS */}
                                <JobsCard />
                            </div>
                        </div>
                    </div>  
                </div>     
            </div>
        </div>
    )
}

export default WalkerDash;
