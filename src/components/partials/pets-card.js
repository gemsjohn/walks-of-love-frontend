import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions';

function PetsCard() {
    return (
        <div>
            {/* {{#each this}} */}
            <div class="card mr-4" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Pet Name</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Pet Type</h6>
                    <p class="card-text">Description</p>
                </div>
                <button class="btn btn-lg btn-success" type="button" data-toggle="modal" data-target="#exampleModal">New job</button>
            </div>
            {/* {{/each}} */}
        </div>
    )
}

export default PetsCard;



