
const signup = document.querySelector(".signup");
const termCond = document.querySelector("#accept");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const pwd_format = document.querySelector(".pwd-format");
//defining a format for password
// The password contains only a-z A-z and 0-9 

const passwordPattern = /^[a-zA-Z0-9]{8,15}$/

password.addEventListener('focusin', () => {
   

    // checking the password entered by the user by using eventlistener
    password.addEventListener('keyup', () => {
        if (passwordPattern.test(password.value)) {
            password.style.borderColor = 'green' 
  // when password pattern matches the border of password input will be green
            pwd_format.style.color = 'green'
        } else {
//when password pattern do not matches the border of password input will be red
            password.style.borderColor = 'red'
            pwd_format.style.color = 'red'
           
        }
        
    })
})

password.addEventListener('focusout', () => {
   
})

confirmPassword.addEventListener('focusin', () => {
   
    confirmPassword.addEventListener('keyup', () => {
        if (passwordPattern.test(confirmPassword.value) && password.value === confirmPassword.value) {
            confirmPassword.style.borderColor = 'green'
 // same condition as password for confirm password excpect the second one that is matching with old pass
            pwd_format.style.color = 'green'
        } else {
            confirmPassword.style.borderColor = 'red'
            pwd_format.style.color = 'red'
        }
    })
})

confirmPassword.addEventListener('focusout', () => {
   
})

termCond.addEventListener('change', () => {
    if (termCond.checked === true) {
        signup.disabled = false;
    } else if (termCond.checked === false) {
        signup.disabled = true;
    }
})
