import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions';
import JobsCard from './partials/jobs-card';

function JobSearch() {
    return (
        <div>
            <div class="row justify-content-center mt-5">
                <div class="col-12 col-md-10 col-lg-8 mt-5">
                    <div class="col-auto">
                        <button class="btn btn-success" type="submit">Search</button>
                    </div>
                    <h1 id="jobs-in-area">Showing jobs in your area</h1>
                    <div class="mt-2">
                        <JobsCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobSearch;

