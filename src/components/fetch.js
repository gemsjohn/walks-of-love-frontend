// Primary dependency
import axios from 'axios';

// Export owner details: id, first_name, last_name, and email
export const owner_details = (stxAddress) => {
    let o_user_id;
    let o_first_name;
    let o_last_name;
    let o_email;

    // Read data from the Heroku DB /ap/owners
    async function myFunction() {
        const res = await axios.get(`http://localhost:3002/api/owners`);
          //   const body = await res.json(); // NOTE TO SELF: could this be used?

        // Loop through all of the data
        for (let i = 0; i < res.data.length; i++) {

            // If an owner_id matches the stxAddress that you attempted to log in with then store the OWNER data locally.
            // This data was stored locally so that it could be pulled out of the async function.
            if (JSON.stringify(res.data[i].id) === stxAddress) {
                o_user_id = res.data[i].id;
                o_first_name = res.data[i].first_name;
                o_last_name = res.data[i].last_name;
                o_email = res.data[i].email;
                localStorage.setItem('o_user_id', o_user_id);
                localStorage.setItem('o_first_name', o_first_name);
                localStorage.setItem('o_last_name', o_last_name);
                localStorage.setItem('o_email', o_email);
            }
        }
    }
    // [NEED]Catch error?

    // Call the async function and grab the data
    myFunction();
    let o_local_user_id = localStorage.getItem('o_user_id');
    let o_local_first_name = localStorage.getItem('o_first_name');
    let o_local_last_name = localStorage.getItem('o_last_name');
    let o_local_email = localStorage.getItem('o_email');

    // Return the data
    return {
        o_id: o_local_user_id,
        o_first_name: o_local_first_name,
        o_last_name: o_local_last_name,
        o_email: o_local_email,
    }
}

export const walker_details = (stxAddress) => {
    let w_user_id;
    let w_first_name;
    let w_last_name;
    let w_email;

    async function myFunction() {
        const res = await axios.get(`http://localhost:3002/api/walkers`);
        // Loop through the Walkers DB
        for (let i = 0; i < res.data.length; i++) {
            // If a walker_id matches the stxAddress then store that WALKER data locally
            if (JSON.stringify(res.data[i].id) === stxAddress) {
                w_user_id = res.data[i].id;
                w_first_name = res.data[i].first_name;
                w_last_name = res.data[i].last_name;
                w_email = res.data[i].email;
                localStorage.setItem('w_user_id', w_user_id);
                localStorage.setItem('w_first_name', w_first_name);
                localStorage.setItem('w_last_name', w_last_name);
                localStorage.setItem('w_email', w_email);
            }
        }
    }
    myFunction();
    let w_local_user_id = localStorage.getItem('w_user_id');
    let w_local_first_name = localStorage.getItem('w_first_name');
    let w_local_last_name = localStorage.getItem('w_last_name');
    let w_local_email = localStorage.getItem('w_email');

    return {
        w_id: w_local_user_id,
        w_first_name: w_local_first_name,
        w_last_name: w_local_last_name,
        w_email: w_local_email,
    }
}
export const job_details = () => {
    let j_id;
    let j_pay;
    let j_check_in;
    let j_walk;
    let j_timeframe;
    let j_location;
    let j_completed;
    let j_owner_id;
    let j_walker_id;
    let j_animal_id;
    let j_pet_name;
    let j_owner_first_name;
    let j_owner_last_name;

    const allJobs = [];
    let job;

    async function myFunction() {
        const res = await axios.get(`http://localhost:3002/api/jobs`);
        // Loop through the Jobs DB
        for (let i = 0; i < res.data.length; i++) {
            // If an owner_id matches the stxAddress then store that JOB data locally
            if (res.data[i].owner_id === 'SP29AZWNBFXEHJGBQ2BMQ71W8R79DCA3NZQ7QJ367') {
                j_id = res.data[i].id;
                j_pay = res.data[i].pay;
                j_check_in = res.data[i].check_in;
                j_walk = res.data[i].walk;
                j_timeframe = res.data[i].timeframe;
                j_location = res.data[i].location;
                j_completed = res.data[i].completed;
                j_owner_id = res.data[i].owner_id;
                j_walker_id = res.data[i].walker_id;
                j_animal_id = res.data[i].animal_id;
                j_pet_name = res.data[i].pet.pet_name;
                j_owner_first_name = res.data[i].owner.first_name;
                j_owner_last_name = res.data[i].owner.last_name;

                job = {
                    j_id, 
                    j_pay, 
                    j_check_in, 
                    j_walk, 
                    j_timeframe, 
                    j_location, 
                    j_completed, 
                    j_owner_id,
                    j_walker_id,
                    j_animal_id,
                    j_pet_name,
                    j_owner_first_name,
                    j_owner_last_name
                }; 
                allJobs.push(job);
            } else {
                console.log("Address not available.");
            }
            
        }
        localStorage.setItem('allJobs', JSON.stringify(allJobs));
    }
    myFunction();
    let local_allJobs = JSON.parse(localStorage.getItem('allJobs'));

    return {
        allJobs: local_allJobs
    }
}
export const pet_details = () => {
    let pet_name;
    let pet_owner_id;
    let pet_type;
    let pet_description;

    const allPets = [];
    let pet;

    async function myFunction() {
        const res = await axios.get(`http://localhost:3001/api/pets`);
        // Loop through the Walkers DB
        for (let i = 0; i < res.data.length; i++) {
            // If a walker_id matches the stxAddress then store that WALKER data locally
            if (res.data[i].owner_id === 'SP29AZWNBFXEHJGBQ2BMQ71W8R79DCA3NZQ7QJ367') {
                pet_name = res.data[i].pet_name;
                pet_owner_id = res.data[i].owner_id;
                pet_type = res.data[i].pet_type;
                pet_description = res.data[i].description;

                pet = {
                    pet_name,
                    pet_owner_id,
                    pet_type,
                    pet_description
                };
                allPets.push(pet);
            } else {
                console.log("Address not available.");
            }
            
        }
        localStorage.setItem('allPets', JSON.stringify(allPets));
    }
    myFunction();
    let local_allPets = JSON.parse(localStorage.getItem('allPets'));

    return {
        allPets: local_allPets
    }
}