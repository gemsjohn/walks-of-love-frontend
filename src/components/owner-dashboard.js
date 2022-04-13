import React from 'react';
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions';
import PetsCard from './partials/pets-card';
import JobsCard from './partials/jobs-card';

function theBtn() {
    async function commentFormHandler() {
        const pet_name = document.querySelector('input[name="pet-name"]').value.trim();
      
        // this owner_id needs to be changed based off of who is logged in
        const owner_id = 'SP29AZWNBFXEHJGBQ2BMQ71W8R79DCA3NZQ7QJ367';
        const pet_type = document.querySelector('input[name="pet-type"]').value.trim();
        const description = document.querySelector('textarea[name="about-pet"]').value.trim();
      
        if ((pet_name, pet_type, description)) {
          const res = await axios.post('http://localhost:3001/api/pets',
            {
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
function OwnerDash() {
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
                
                <div id="jobs-container" class="d-flex flex-column mx-auto" style={{width: '92%'}}>

                    <div class="d-flex flex-row justify-content-between mt-2">
                        <h1>Job Postings</h1>
                    </div>

                    <div class="tabbable">
                        
                        <ul class="nav nav-tabs">
                            <li class="active nav-item">
                                <a class="nav-link active job-tab current-jobs-tab" href="#tab1" data-toggle="tab">Current posts</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link job-tab past-jobs-tab" href="#tab2" data-toggle="tab">Past posts</a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane active" id="tab1">
                                <p>List of current jobs</p>
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

export default OwnerDash;
