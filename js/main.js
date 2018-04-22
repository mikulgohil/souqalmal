// First name Last name validaiton
function validateName(id) {
    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {
        document.getElementById("contact-name").classList.add("error");
    return false;

    }
    // Add name with First Name and Last Name 
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        document.getElementById("contact-name").classList.add("error");
    return false;

    }

    document.getElementById("contact-name").classList.remove("error");
    return true;

}

// Common validation for email address input
function validateEmail (selector) {
    let  selectedId = selector
    let email = document.getElementById(selectedId).value;
    
    if(email.length == 0) {

        document.getElementById(selectedId).classList.add("error");
    return false;

    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

        document.getElementById(selectedId).classList.add("error");
    return false;

    }

        document.getElementById(selectedId).classList.remove("error");
    return true;

}

// Validation for text area with min 30 char 
function validateMessage() {
    let message = document.getElementById('contact-message').value;
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        document.getElementById("contact-message").classList.add("error");
        return false;
    }

    document.getElementById("contact-message").classList.remove("error");
    return true;

}

// Contact form Submit
function validateForm() {
    if (!validateName() || !validateEmail('contact-email') || !validateMessage()) {
        console.log("Error");
        return false
    }
    else {
        console.log("Success");
        // Clean all the input on submit
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-message').value = '';
        successMessage();
    }
}

// Newsletter Submit 
function newsletterSubmit(){
    if(!validateEmail('newsletter-email')){
        return false;
    }else{
        document.getElementById('newsletter-email').value = '';
    }
}

// Success message for contact form
function successMessage(){
    document.getElementById("success-message").classList.add("show");
    setTimeout(function(){
        document.getElementById("success-message").classList.remove("show");
    },3000);
}

// Remove error class on focus
function removeError(id){
    document.getElementById(id.getAttribute('id')).classList.remove("error");
}  