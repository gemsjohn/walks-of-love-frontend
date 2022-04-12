import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions';
// import CreateJob from './modal/create-job';

function theBtn() {
    var modal = document.getElementById("exampleModal");
    modal.style.display = "block";
}

function PetsCard() {
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
                            <label class="form-label" for="price"></label>

                            <input class="form-control" type="date" id="date-start" name="visit-date" value="" min="2022-01-01" max="2025-12-31" />
                            <label class="form-label" for="date-start"></label>

                            <input class="form-control" type="time" id="hour-start" name="visit-time" />
                            <label class="form-label" for="hour-start"></label>

                            <input type="text" id="location" name="location" class="form-control" placeholder="Enter your zip code" />
                            <label class="form-label" for="location"></label>

                            <select id="visit-type" name="visit-select" class="form-select form-control" aria-label="Default select example">
                            <option name="walk" value="walk" selected>Walk</option>
                            <option name="checkin" value="checkin">Check-in</option>
                            </select>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* {{#each this}} */}
            <div class="card mr-4" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Pet Name</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Pet Type</h6>
                    <p class="card-text">Description</p>
                </div>
                <button class="btn btn-lg btn-success" type="button" data-toggle="modal" data-target="#exampleModal" onClick={() => theBtn()}>New job</button>
            </div>
            {/* {{/each}} */}
        </div>
    )
}

export default PetsCard;
