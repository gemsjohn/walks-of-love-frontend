// Primary dependency
import React from 'react';
import axios from 'axios';

// If the user enters details on the homepage form and selects submit, depending on the radio button selected the
// details will be POST'ed to the Owner and Walker API endpoint.
function theBtn() {
    async function createAccountHandler() {
      
        const id = document.querySelector('input[name="id"]').value.trim();
        const first_name = document.querySelector('input[name="first"]').value.trim();
        const last_name = document.querySelector('input[name="last"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const password = document.querySelector('input[name="password"]').value.trim();

        if ((id, email, first_name, last_name, password)) {
  
            if(document.getElementById('own').checked) {
                const res = await axios.post('https://pacific-depths-79804.herokuapp.com/api/owners', 
                    {
                        id: id,
                        first_name: first_name,
                        last_name: last_name,
                        email: email,
                        password: password
                    }
                );
                return res.data.json;
            } else if (document.getElementById('walk').checked) {
                const res = await axios.post('https://pacific-depths-79804.herokuapp.com/api/walkers', 
                    {
                        id: id,
                        first_name: first_name,
                        last_name: last_name,
                        email: email,
                        password: password
                    }
                );
                return res.data.json;
            }
        }
    }
    createAccountHandler();
        
}

// This handles the Homepage UI
function Homepage() {
    return (
        <div>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
            <div id="main-container" className="container1">
                <div className="jumbotron text-center header-wrap" align="center">
                    <p className="lead">Connect with trusted dog walkers in your neighborhood.</p>
                    <hr style={{width: '400px', className: 'my-4'}} />
                    <p style={{fontSize: '1.5rem', width: 400, margin: 'auto'}}>Sign up bellow to get started as a pet owner or a walker.</p>
                    <section id="section-form" className="vh-100 bg-image">
                        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                            <div className="container h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12">
                                        <div className="card" style={{borderRadius: '15px'}}>
                                            <div className="card-body p-4">

                                                <form className="create-account-form" action="">
                                                    <div className="form-outline">

                                                        <div className="form-outline">
                                                        <input type="id" name="id"id="id" className="form-control" placeholder="id"/>
                                                        <label className="form-label" for="id" />
                                                    </div>

                                                        <input type="text" name="first" id="fist-name" className="form-control" placeholder="First Name"/>
                                                        <label className="form-label" for="fist-name" />
                                                    </div>

                                                    <div className="form-outline">
                                                        <input type="text" name="last" id="last-name" className="form-control" placeholder="Last Name"/>
                                                        <label className="form-label" for="last-name" />
                                                    </div>

                                                    <div className="form-outline">
                                                        <input type="email" name="email" id="email" className="form-control" placeholder="Your Email"/>
                                                        <label className="form-label" for="email" />
                                                    </div>

                                                    <div className="form-outline">
                                                        <input type="password" name="password"id="password" className="form-control" placeholder="Password"/>
                                                        <label className="form-label" for="password" />
                                                    </div>

                                                    <div className="form-check form-outline mb-2">
                                                        <input className="form-check-input" type="radio" name="exampleRadios" id="own" value="option1" checked />
                                                        <label className="form-check-label" for="exampleRadios1">I'm a pet owner looking for a walker</label>
                                                    </div>
                                                    
                                                    <div className="form-check form-outline mb-3">
                                                        <input className="form-check-input" type="radio" name="exampleRadios" id="walk" value="option2" />
                                                        <label className="form-check-label" for="exampleRadios2">I'm a walker looking for jobs</label>
                                                    </div>                

                                                    <div className="d-flex justify-content-center">
                                                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={() => theBtn()}>Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Homepage;

