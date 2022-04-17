import React from 'react';
import axios from 'axios';
import { job_details } from './fetch';
import PetsCard from './partials/pets-card';
import { userSession } from '../auth';

let stxAddress;

if (userSession.isSignInPending()) {
    userSession.handlePendingSignIn().then(userData => {
      window.history.replaceState({}, document.title, '/');
      this.setState({ userData: userData });
    });
  } else if (userSession.isUserSignedIn()) {
    stxAddress = userSession.loadUserData().profile.stxAddress.mainnet;

  }

const jobsCardArray = [];

function theBtn() {
    async function commentFormHandler() {
        const pet_name = document.querySelector('input[name="pet-name"]').value.trim();
      
        // this owner_id needs to be changed based off of who is logged in
        const owner_id = stxAddress;
        const pet_type = document.querySelector('input[name="pet-type"]').value.trim();
        const description = document.querySelector('textarea[name="about-pet"]').value.trim();
      
        if ((pet_name, pet_type, description)) {
          const res = await axios.post('https://pacific-depths-79804.herokuapp.com/api/pets',
            {
                id: null,
                pet_name: pet_name,
                owner_id: owner_id,
                pet_type: pet_type,
                description: description
            }
          );
          return res.data.json;   
        }
      }
    commentFormHandler();
}

function DeleteJob(num) {
    async function myFunction() {
        const res = await axios.delete(`https://pacific-depths-79804.herokuapp.com/api/jobs/` + num + ``);
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
    if (job_details().allJobs[i].j_owner_id === stxAddress) {
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
                            <button id="delete-job" class="float-right btn success" type="button" onClick={() => DeleteJob(job_details().allJobs[i].j_id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>;
        }
    }
    return jobsCardArray;
}


function OwnerDash() {
    JobsCard(); 
    return (
        <div>
            <div className="dashboard-container">
                <h1 id="your-dashboard" className="text-center">Your Dashboard</h1>
                <div>
                    <h1 className="pets-text">Your Pets</h1>
                </div>
                <div id="pets-container" className="d-flex flex-row mx-auto" style={{width: '92%'}}>
                    <div className="container col-10">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <PetsCard />
                        </div>
                    </div>
                    
                    <div id="pet-cards" className="container">
                        <form className="create-pet-form card" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">Add a Pet</h5>
                                <div className="form-outline">
                                    <input type="text" name="pet-name" className="form-control" placeholder="Pet Name"/>
                                    <label className="form-label" for="fist-name" />
                                </div>
                                <div className="form-outline">
                                    <input type="text" name="pet-type" className="form-control" placeholder="Breed"/>
                                    <label className="form-label" for="pet-name" />
                                </div>
                                <textarea id="about-pet-input" className="card-subtitle mb-2 text-muted form-outline" name="about-pet" placeholder="About your pet"></textarea>
                            </div>
                            <div>
                                <button className="float-right mr-3 mb-3 btn success" type="submit" onClick={() => theBtn()}>Confirm</button>
                            </div>
                        </form>
                    </div> 
                </div>
                
                <div id="jobs-container" className="d-flex flex-column mx-auto" style={{width: '92%'}}>

                    <div className="d-flex flex-row justify-content-between mt-2">
                        <h1>Job Postings</h1>
                    </div>

                    <div className="tabbable">
                        
                        <ul className="nav nav-tabs">
                            <li className="active nav-item">
                                <a className="nav-link active job-tab current-jobs-tab" href="#tab1" data-toggle="tab">Current posts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link job-tab past-jobs-tab" href="#tab2" data-toggle="tab">Past posts</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane active" id="tab1">
                                <p>List of current jobs</p>
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

export default OwnerDash;
