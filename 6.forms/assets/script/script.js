// Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
let firstName = document.getElementById('display-firstname'); //Get the firstname input element
firstName.addEventListener('keyup', function() {
    let inputVal = this.value; // Get the value typed in the input 
        let span = document.getElementById('display-firstname'); // Get the span element
        span.textContent = inputVal;// Update the content of the span with the typed value
        console.log("test");
  });

//   Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
let age = document.getElementById('age'); // Get the second input element
age.addEventListener('keyup', function() {
    let ageValue = this.value; //Get the value typed in the input 
    if(ageValue >= 18){ 
        document.getElementById("a-hard-truth").style.visibility = 'visible'; // if the condition of statement is true then the section is visible
    }
    else{
        document.getElementById("a-hard-truth").style.visibility = 'hidden'; //if the condition of statement is false then the section is hidden
    }
});

// Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the input border red) , add a validation, if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
let password = document.getElementById("pwd");// Get the password input element
let passwordConfirm = document.getElementById("pwd-confirm"); // Get the password-confirm input element
password.addEventListener("keyup", function() {
    let passwordInput = this.value; //Get the value typed in the input
    if (passwordInput.length < 6){ // if the the password is less than 6  we
        password.classList.add('error');
    }
    else{
        password.classList.remove('error');
    }
});

passwordConfirm.addEventListener("keyup", function(){
    let passwordConfirmInput = this.value;
    let passwordInput = password.value;
    if(passwordInput !== passwordConfirmInput){
        passwordConfirm.classList.add("error");
    }
    else{
        passwordConfirm.classList.remove("error");
    }
});

// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
let darkMode = document.getElementById("toggle-darkmode");
darkMode.addEventListener("change", function() {
    let choice = this.value;
    let body = document.querySelector('body');
    if(choice == "dark"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
})