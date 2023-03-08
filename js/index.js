// Regulare expression library
// https://regexlib.com/?AspxAutoDetectCookieSupport=1
	
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// Accesing the Full Name
let fn = document.getElementById("fname");

// Accesing the email
let em = document.getElementById("email");


// Accesing the message
let me = document.getElementById("message");

// Accessing event target object
let sb = document.getElementById("subcribe-btn");

// Create event handler
function formValidate(){

    // Let's prepare empty bucket (object) to store the data
    let data = {};

    // Let's create another bucket for potential errors 
    // (this time let it array)
    let errors = [];


    // validation of full name field
    if (fn.value) {
        if (pattern.test(fn.value)) {
            data.fname = fn.value;
        } else {
            errors.push('Invalid Name!');
         }
    } else {
        errors.push('Please enter your full name!');
    }


    // validation of email field
    if (em.value) {
        if (pattern.test(em.value)) {
            data.email = em.value;
        } else {
            errors.push('Invalid email!');
        }
    } else {
        errors.push('Please enter your email!');
    }

      // validation of message field
      if (me.value) {
        if (pattern.test(me.value)) {
            data.message = me.value;
        } else {
            errors.push('Invalid message!');
        }
    } else {
        errors.push('Please enter your message!');
    }


    // print data or errors, NOT BOTH!
    if (errors.length === 0) {
        console.log(data);
    } else {
        console.log(errors);
    }
}

//Registering button for click event
sb.addEventListener("click", formValidate);



