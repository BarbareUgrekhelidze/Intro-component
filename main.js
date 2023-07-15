const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const msg = document.querySelector('#msg');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(firstName.value === '' || lastName.value === '' || email.value === '' || password.value === ''){
        msg.innerText = 'Please enter all fields';
    } else{
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        password.value = '';
        msg.innerText = 'You just claimed your first trial';
    }
}