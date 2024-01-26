function validateRegistrationForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var position = document.getElementById("position").value;
    var department = document.getElementById("department").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation example (you can add more complex validations)
    if (firstName === "" || lastName === "" || email === "" || phone === "" || position === "" ||
        department === "" || dob === "" || address === "" || password === "" || confirmPassword === "") {
        alert("All fields must be filled out");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password must match");
        return false;
    }

    return true;
}

function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Basic validation example (you can add more complex validations)
    if (username === "" || password === "") {
        alert("All fields must be filled out");
        return false;
    }

    return true;
}