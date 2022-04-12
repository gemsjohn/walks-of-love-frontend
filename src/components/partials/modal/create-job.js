import React from 'react';
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions';

function theBtn() {
    console.log("Pushed");  
}

function CreateJob() {
    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Create Job</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="create-job-form" action="" />
                        <div class="form-outline">
                            <input type="text" id="price" name="pay" class="form-control" placeholder="price" />
                            <label class="form-label" for="price" />

                            <input class="form-control" type="date" id="date-start" name="visit-date" value="" min="2022-01-01" max="2025-12-31" />
                            <label class="form-label" for="date-start" />

                            <input class="form-control" type="time" id="hour-start" name="visit-time" />
                            <label class="form-label" for="hour-start" />

                            <input type="text" id="location" name="location" class="form-control" placeholder="Enter your zip code" />
                            <label class="form-label" for="location" />

                            <select id="visit-type" name="visit-select" class="form-select form-control" aria-label="Default select example">
                            <option name="walk" value="walk" selected>Walk</option>
                            <option name="checkin" value="checkin">Check-in</option>
                            </select>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={() => theBtn()}>Save changes</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateJob;
