 // form validation

function validation(){
    var name = document.getElementById('exampleInputName').value;
    var number = document.getElementById('exampleInputNumber').value;
    var Address = document.getElementById('exampleInputAddress').value;
    var city = document.getElementById('exampleInputCity').value;

    var pincode = document.getElementById('exampleInputPincode').value;


    var namech = /^[A-Za-z ]{2,}$/;
    var numberch = /^[6789][0-9]{9}$/;
    var addressch = /^[A-Za-z0-9_!@#$%^&*]{10,70}$/;
    var citych = /^[A-Za-z ]{2,}$/;
    var pincodech = /^[123456789][0-9]{5}$/;
    

    


    if(namech.test(name)){
        document.getElementById('error-name').innerHTML = ' ';
    }
    else{
        document.getElementById('error-name').innerHTML = 'Only Alphabets allowed';
        return false;
    }
    if(numberch.test(number)){
        document.getElementById('error-number').innerHTML = ' ';
    }
    else{
        document.getElementById('error-number').innerHTML = 'Only 10 digits allowed';
        return false;
    }
    if(addressch.test(Address)){
        document.getElementById('error-address').innerHTML = ' ';
    }
    else{
        document.getElementById('error-address').innerHTML = 'Enter Address';
        return false;
    }
    if(citych.test(city)){
        document.getElementById('error-city').innerHTML = ' ';
    }
    else{
        document.getElementById('error-city').innerHTML = 'Enter city';
        return false;
    }
    if(pincodech.test(pincode)){
        document.getElementById('error-pincode').innerHTML = ' ';
    }
    else{
        document.getElementById('error-pincode').innerHTML = 'Only 6 digits allowed';
        return false;
    }
   
}


function validation1(){
    var name = document.getElementById('exampleInputName').value;
    var email = document.getElementById('exampleInputemail').value;


    var namech = /^[A-Za-z ]{2,}$/;
    var emailch = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
   


    if(namech.test(name)){
        document.getElementById('error-name').innerHTML = ' ';
    }
    else{
        document.getElementById('error-name').innerHTML = 'Only Alphabets allowed';
        return false;
    }
    if(emailch.test(email)){
        document.getElementById('error-email').innerHTML = ' ';
    }
    else{
        document.getElementById('error-email').innerHTML = 'abcd@gmail.com';
        return false;
    }
   
}

function validation2()
{
    var name = document.getElementById('exampleInputName').value;
    var number = document.getElementById('exampleInputNumber').value;
    var number1 = document.getElementById('exampleInputNumber1').value;
    var number2 = document.getElementById('exampleInputNumber2').value;
    


    var namech = /^[A-Za-z ]{2,}$/;
    var numberch = /^[123456789][0-9]{15}$/;
    var number1ch = /^[123456789][0-9]{3}$/;
    var number2ch = /^[123456789][0-9]{2}$/;


    if(namech.test(name)){
        document.getElementById('error-name').innerHTML = ' ';
    }
    else{
        document.getElementById('error-name').innerHTML = 'Only Alphabets allowed';
        return false;
    }
    if(numberch.test(number)){
        document.getElementById('error-number').innerHTML = ' ';
    }
    else{
        document.getElementById('error-number').innerHTML = 'Only 16 digits allowed';
        return false;
    }
    if(number1ch.test(number1)){
        document.getElementById('error-number1').innerHTML = ' ';
    }
    else{
        document.getElementById('error-number1').innerHTML = 'Only 4 digits allowed';
        return false;
    }
    if(number2ch.test(number2)){
        document.getElementById('error-number2').innerHTML = ' ';
    }
    else{
        document.getElementById('error-number2').innerHTML = 'Only 3 digits allowed';
        return false;
    }
    
}


const scriptURL =
       'https://script.google.com/macros/s/AKfycbwKmIentYi3P_vsBtuvgrpox9lMmppjqrn_Kupn0ZcnDOvnj3gLRneV2ZbCpnfDEftUrg/exec'
   const form = document.forms['form-google-sheet']

   form.addEventListener('submit', e => {
       e.preventDefault()
       fetch(scriptURL, {
               method: 'POST',
               body: new FormData(form)
           })
           .then(response => alert(
               "Thanks for your feedback"))
           .catch(error => console.error('Error!', error.message))
   })
