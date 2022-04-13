import React from 'react';
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions';
// import CreateJob from './modal/create-job';
import { pet_details, job_details } from '../fetch'

function theBtn() {
    var modal = document.getElementById("exampleModal");
    modal.style.display = "block";
}

function theBtnModal() {
        // var modal = document.getElementById("exampleModal");
    // modal.style.display = "block";
    // console.log("id: ", id, " first_name: ", first_name);

    async function createPostHandler() {
      
        const payStr = document.querySelector('input[name="pay"]').value.trim();
        const pay = parseInt(payStr);

        // const dateStart = document.getElementById("date-start").value;
        // const hourStart = document.getElementById("hour-start").value;
        // const timeframe = dateStart + "T" + hourStart + "Z";

        const locationStr = document.querySelector('input[name="location"]').value.trim();
        const location = parseInt(locationStr);
        const owner_id = 'SP29AZWNBFXEHJGBQ2BMQ71W8R79DCA3NZQ7QJ367'; // replace with a variable

        const visitType = document.getElementById("visit-type");
        const selectedValue = visitType.options[visitType.selectedIndex].value;
        let walk;
        let check_in;
        if (selectedValue === "Walk") {
            walk = true;
            check_in = false;
        } else {
            walk = false;
            check_in = true;
        }

        if ((pay, location)) {
            const res = await axios.post('http://localhost:3001/api/jobs', 
                {
                    pay: pay,
                    check_in: check_in,
                    walk: walk,
                    timeframe: "2022-04-12", // there is a bug with timeframe
                    location: location,
                    completed: false,
                    owner_id: owner_id,
                    walker_id: null,
                    animal_id: 1,
                }
            );
            return res.data.json;
        }
    }
    createPostHandler();
}

const cardsArray = [];

function Cards() {
    for(let i = 0; i < pet_details().allPets.length; i++) {
        cardsArray[i] =
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{pet_details().allPets[i].pet_name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{pet_details().allPets[i].pet_type}</h6>
                        <p className="card-text">{pet_details().allPets[i].pet_description}</p>
                    </div>
                    <button className="btn btn-lg btn-success" type="button" data-toggle="modal" data-target="#exampleModal" onClick={() => theBtn()}>New job</button>
                </div>
            </div>
    }
}

function PetsCard() {
    Cards();
    // console.log(pet_details().allPets);
    // console.log(job_details().allJobs);
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create Job</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="create-job-form" action="" />
                        <div className="form-outline">
                            <input type="text" id="price" name="pay" className="form-control" placeholder="price" />
                            <label className="form-label" for="price"></label>

                            <input className="form-control" type="date" id="date-start" name="visit-date" value="" min="2022-01-01" max="2025-12-31" />
                            <label className="form-label" for="date-start"></label>

                            <input className="form-control" type="time" id="hour-start" name="visit-time" />
                            <label className="form-label" for="hour-start"></label>

                            <input type="text" id="location" name="location" className="form-control" placeholder="Enter your zip code" />
                            <label className="form-label" for="location"></label>

                            <select id="visit-type" name="visit-select" className="form-select form-control" aria-label="Default select example">
                            <option name="walk" value="walk" selected>Walk</option>
                            <option name="checkin" value="checkin">Check-in</option>
                            </select>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onClick={() => theBtnModal()}>Save changes</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {cardsArray}
            </div>
        </div>
    )
}

export default PetsCard;
