const form = document.querySelector('form');
const email = document.getElementById('email');
const label = document.querySelector('label');
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email.value.match(re)) {
        label.textContent = '';
        alert("You'll be notified!");
        email.value = '';
    }
    else {
        label.textContent = 'Please provide valid email address!';
    }
})