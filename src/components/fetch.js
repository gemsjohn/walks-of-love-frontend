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
        const res = await axios.get(`https://pacific-depths-79804.herokuapp.com/api/owners`);
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
        const res = await axios.get(`https://pacific-depths-79804.herokuapp.com/api/walkers`);
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
export const job_details = (stxAddress) => {
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

    async function myFunction() {
        const res = await axios.get(`https://pacific-depths-79804.herokuapp.com/api/jobs`);
        // Loop through the Jobs DB
        for (let i = 0; i < res.data.length; i++) {
            // If an owner_id matches the stxAddress then store that JOB data locally
            if (JSON.stringify(res.data[i].owner_id) === stxAddress) {
                console.log("JOB #: ", i)
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

                localStorage.setItem('j_id', j_id);
                localStorage.setItem('j_pay', j_pay);
                localStorage.setItem('j_check_in', j_check_in);
                localStorage.setItem('j_walk', j_walk);
                localStorage.setItem('j_timeframe', j_timeframe);
                localStorage.setItem('j_location',  j_location);
                localStorage.setItem('j_completed', j_completed);
                localStorage.setItem('j_owner_id', j_owner_id);
                localStorage.setItem('j_walker_id', j_walker_id);
                localStorage.setItem('j_animal_id', j_animal_id);
                localStorage.setItem('j_pet_name', j_pet_name);
                localStorage.setItem('j_owner_first_name', j_owner_first_name);
                localStorage.setItem('j_owner_last_name', j_owner_last_name);
            }
        }
    }
    myFunction();
    let j_local_id = localStorage.getItem('j_id');
    let j_local_pay = localStorage.getItem('j_pay');
    let j_local_check_in = localStorage.getItem('j_check_in');
    let j_local_walk = localStorage.getItem('j_walk');
    let j_local_timeframe = localStorage.getItem('j_timeframe');
    let j_local_location = localStorage.getItem('j_location');
    let j_local_completed = localStorage.getItem('j_completed');
    let j_local_owner_id = localStorage.getItem('j_owner_id');
    let j_local_walker_id = localStorage.getItem('j_walker_id');
    let j_local_animal_id = localStorage.getItem('j_animal_id');
    let j_local_pet_name = localStorage.getItem('j_pet_name');
    let j_local_owner_first_name = localStorage.getItem('j_owner_first_name');
    let j_local_owner_last_name = localStorage.getItem('j_owner_last_name');

    return {
        j_id: j_local_id,
        j_pay: j_local_pay,
        j_check_in: j_local_check_in,
        j_walk: j_local_walk,
        j_timefrime: j_local_timeframe,
        j_location: j_local_location,
        j_completed: j_local_completed,
        j_owner_id: j_local_owner_id,
        j_walker_id: j_local_walker_id,
        j_animal_id: j_local_animal_id,
        j_pet_name: j_local_pet_name,
        j_owner_first_name: j_local_owner_first_name,
        j_owner_last_name: j_local_owner_last_name,
    }
}