import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions';
import JobsCard from './partials/jobs-card';

function WalkerDash() {
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
                                <JobsCard />
                            </div>
                            <div className="tab-pane" id="tab2">
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
