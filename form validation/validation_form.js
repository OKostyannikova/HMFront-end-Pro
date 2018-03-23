document.getElementById("login").addEventListener("keyup", function (e) {
    return validateForm.call(this, !validateEmail(this.value), errorMsg.email)
});

document.getElementById("password").addEventListener("keyup", function (e) {
    return validateForm.call(this, this.value.length < 6, errorMsg.passwordLength)
});

document.getElementById("password_repeat").addEventListener("keyup", function (e) {
    return validateForm.call(this, this.value != password.value, errorMsg.passwordMatching)
});

function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const errorMsg = {
    email: "Please enter a valid email!",
    passwordLength: "Password must be at least 6 characters!",
    passwordMatching: "Password doesn't match!"
}

const validateForm = debounce(function (condition, errorMsg) {
    if (condition) {
        this.className = "invalid_form";
        this.nextElementSibling.innerHTML = errorMsg;
    } else {
        this.className = "valid_form";
        this.nextElementSibling.innerHTML = "";
    }
}, 600)
