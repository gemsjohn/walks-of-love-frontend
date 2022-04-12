import React from 'react';
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions';
import PetsCard from './partials/pets-card';
import JobsCard from './partials/jobs-card';
import { AssignedAddOnExtensionInstance } from 'twilio/lib/rest/api/v2010/account/incomingPhoneNumber/assignedAddOn/assignedAddOnExtension';

function theBtn() {
    // var modal = document.getElementById("exampleModal");
    // modal.style.display = "block";
    // console.log("id: ", id, " first_name: ", first_name);

    async function commentFormHandler() {
        const pet_name = document.querySelector('input[name="pet-name"]').value.trim();
      
        // this owner_id needs to be changed based off of who is logged in
        const owner_id = 'SP29AZWNBFXEHJGBQ2BMQ71W8R79DCA3NZQ7QJ367';
        const pet_type = document.querySelector('input[name="pet-type"]').value.trim();
        const description = document.querySelector('textarea[name="about-pet"]').value.trim();
      
        if (pet_name, pet_type, description) {
          const res = await axios.post('http://localhost:3002/api/pets',
            {
                id: 0, //need to make this a variable that auto increments
                pet_name: pet_name,
                owner_id: owner_id,
                pet_type: pet_type,
                description: description
            }
          );
          return res.data.json;   
        }
      }
      
    //   document
    //     .querySelector(".create-pet-form")
    //     .addEventListener("submit", commentFormHandler);
      
    commentFormHandler();
        
}
function OwnerDash() {
    return (
        <div>
            <div class="dashboard-container">
                <h1 id="your-dashboard" class="text-center">Your Dashboard</h1>
                
                <div id="pets-container" class="d-flex flex-column mx-auto" style={{width: '92%'}}>
                    <h1>Your Pets</h1>
                    <div id="pet-cards" class="d-flex flex-row">

                        <PetsCard />

                        <form class="create-pet-form card" style={{width: '18rem'}}>
                            <div class="card-body">
                                <h5 class="card-title">Add a Pet</h5>
                                <div class="form-outline">
                                    <input type="text" name="pet-name" class="form-control" placeholder="Pet Name"/>
                                    <label class="form-label" for="fist-name"></label>
                                </div>
                                <div class="form-outline">
                                    <input type="text" name="pet-type" class="form-control" placeholder="Breed"/>
                                    <label class="form-label" for="pet-name"></label>
                                </div>
                                <textarea id="about-pet-input" class="card-subtitle mb-2 text-muted form-outline" name="about-pet" placeholder="About your pet"></textarea>
                            </div>
                            <div>
                                <button class="float-right mr-3 mb-3 btn success" type="submit" onClick={() => theBtn()}>Confirm</button>
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
