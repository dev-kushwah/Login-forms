const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("button");
const passwordPattern = /^[a-zA-Z0-9]{8,15}$/;
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var emailval = document.getElementById("email");
var passwordval = document.getElementById("password");

alert("for testing purpose \n Id is:  abc@gmail.com\n Password is:  abc123456 \n use Internet");

password.addEventListener('focusin', () => {
    password.addEventListener('keyup', () => {
        if (passwordPattern.test(password.value)) {
            password.style.borderColor = 'rgb(27, 233, 27)';
        } else {

            password.style.borderColor = 'red';
        }

    })
})

password.addEventListener('focusout', () => {

})




email.addEventListener('focusin', () => {
    email.addEventListener('keyup', () => {
        if (emailPattern.test(email.value)) {
            email.style.borderColor = 'rgb(27, 233, 27)';
        } else {

            email.style.borderColor = 'red';
        }

    })
})

email.addEventListener('focusout', () => {

})


password.addEventListener("mouseover", () => {
    password.style.cursor = "pointer";
    password.setAttribute('placeholder', '');


})
password.addEventListener("mouseout", () => {
    password.setAttribute('placeholder', 'Enter Password');

})

email.addEventListener("mouseover", () => {

    email.style.cursor = "pointer";
    email.setAttribute('placeholder', '');




})
email.addEventListener("mouseout", () => {
    email.setAttribute('placeholder', 'Enter Username')

})


btn.addEventListener("mouseover", () => {
    btn.style.borderColor = "rgb(27, 233, 27)";
    btn.style.color = "";
})

btn.addEventListener("mouseout", () => {
    btn.style.borderColor = "yellow";
    btn.style.color = "yellow";

})

function validate() {

    if (emailval.value == "" || passwordval.value == "") {
        alert("email or password can not be empty");
    } else if (emailval.value == "abc@gmail.com" && passwordval.value == "abc123456") {
        alert("Login succesfully");
        window.location = "sample.html";
    } else {
        alert("Incorrect Id or Password");

    }
}