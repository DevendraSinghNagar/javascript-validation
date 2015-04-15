//Form validation by javascript
function formValidation() {

    //trim() is not support ie8 and below 
    //So Use this function in head section of your webpage and then use trim() function.
    if(typeof String.prototype.trim !== 'function') {
      String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, ''); 
      }
    };

    var name        = document.contactForm.userName.value.trim(),
        email       = document.getElementById('email').value.trim(),
        filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        radioMale   = document.getElementById('gender-1').checked,
        radioFemale = document.contactForm.gender[1].checked,
        select      = document.getElementById('select').value,
        message     = document.contactForm.message,
        checkbox    = document.contactForm.checkbox,
        fileUpload        = document.contactForm.file,

        nameErrorEl     = document.getElementById('nameError'),
        emailErrorEl    = document.getElementById('emailError'),
        genderErrorEl   = document.getElementById('genderError'),
        selectErrorEl   = document.getElementById('selectError'),
        messageErrorEl  = document.getElementById('messageError'),
        checkboxErrorEl = document.getElementById('checkboxError'),
        fileErrorEl     = document.getElementById('fileError');

    //Name field validation with min length 3 character
    if( name == '' ) {
        nameErrorEl.innerHTML = 'Name field is empity';
        return false;
    } else if ( name.length <= 2) {
        nameErrorEl.innerHTML = 'Min length of characters is 3';
        return false;
    } else {
        nameErrorEl.style.display = 'none'
    }

    //Email field validation
    if( email == '' ) {
        emailErrorEl.innerHTML = 'Email field is empity';
        return false;
    } else if( ! filterEmail.test( email ) ) {
        emailErrorEl.innerHTML = 'Email is not valid';
        return false;
    } else {
        emailErrorEl.style.display = 'none'
    }

    //Radio button 
    if( radioMale == false && radioFemale == false ) {
        genderErrorEl.innerHTML = 'Please select one gender';
        return false;
    } else {
        genderErrorEl.style.display = 'none'
    }

    //Select
    if( select == 0 ) {
        selectErrorEl.innerHTML = 'Please select cource';
        return false;
    } else {
        selectErrorEl.style.display = 'none'
    }

    //Textarea
    if( message.value == '' ) {
        messageErrorEl.innerHTML = 'Message field is empity';
        maxLength( message ); // Textarea maxlength checking

        return false;
    }

    //For ie 9 and below (maxlength is html5 attribute)
    function maxLength( el ) {
        if( ! ( 'maxLength' in el ) ) { //For all browser if(  'maxLength' in el ) {
            var max = el.attributes.maxlength.value;

            el.onkeypress = function() {
                if( this.value.length <= max ) {
                    messageErrorEl.innerHTML = 'You enter characters are '+this.value.length;
                } else if( this.value.length > max ) {
                    messageErrorEl.innerHTML = 'You enter max characters';
                    
                    return false;
                } else {
                    messageErrorEl.style.display = 'none';
                }
            }
        }
    }

    // File upload
    if( fileUpload.value == '' ) {
        fileErrorEl.innerHTML = 'Please upload any file';
        return false;
    } else {
        fileErrorEl.style.display = 'none'
    }

    //Checkbox
    if( checkbox.checked == false ) {
        checkboxErrorEl.innerHTML = 'Please accept Terms and conditions.';
        return false
    } else {
        checkboxErrorEl.style.display = 'none';
    }

    return true;
}
