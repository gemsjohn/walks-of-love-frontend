import React from 'react';
import JobsCard from './partials/jobs-card';

// This function handles the Job Search UI. The Job Search is currently not accesssible at the moment but is available for future feature integration.
function JobSearch() {
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-10 col-lg-8 mt-5">
                    <div className="col-auto">
                        <button className="btn btn-success" type="submit">Search</button>
                    </div>
                    <h1 id="jobs-in-area">Showing jobs in your area</h1>
                    <div className="mt-2">
                        <JobsCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobSearch;

