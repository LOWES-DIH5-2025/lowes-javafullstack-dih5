// External JS

// var firstName = 'Anurag';
// var lastName = 'Kumar';

// console.log(firstName + lastName);


function resetColor() {
    let heading = document.querySelector('#heading');
    heading.innerHTML = 'Welcome to JS training!!!';
    heading.style.backgroundColor = 'white';
}


function changeColor(event) {
    console.log(event);
   // DOM Manipulation
    let heading = document.getElementById('heading');
    heading.innerHTML = 'Happy Independence Day';
    heading.style.backgroundColor = 'orange';
    console.log(heading); 
}