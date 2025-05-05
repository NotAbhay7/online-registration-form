const form = document.getElementById('form');

/*******CONST valuess*********/


const title = document.getElementById('title');



const firstname = document.getElementById('fname');


const lastname = document.getElementById('lname');


const street = document.getElementById('street');



const city = document.getElementById('city');



const mobile = document.getElementById('mobile');




const gender = document.getElementById('gender');



const dob = document.getElementById('dob');




const email = document.getElementById('email');
const nic = document.getElementById('nic');



const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});








function checkInputs() {
	// trim to remove the whitespaces
	

    const titleValue = title.value.trim();
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const streetValue = street.value.trim();
    const cityValue = city.value.trim();
    const mobileValue = mobile.value.trim();
    const emailValue = email.value.trim();
    const genderValue = gender.value.trim();
    const dobValue = dob.value.trim();
    const nicValue = nic.value.trim();
  



	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();



	
/************TITLE LOOP********* */
	if(titleValue === '') {
		setErrorFor(title, 'Title cannot be blank');
	} 
    else {
		setSuccessFor(title);
	}



/************Name Statement***** */


if(firstnameValue === '') {
    setErrorFor(fname, 'First Name cannot be blank');

} else if (!isfirstname(firstnameValue)) {
    
    setErrorFor(fname, 'Use Only Letters');

}else {
    setSuccessFor(fname);
}


if(lastnameValue === '') {
		setErrorFor(lname, 'Last Name cannot be blank');
	
} else if (!islastname(lastnameValue)) {
    
        setErrorFor(lname, 'Use Only Letters');

 } else {
		setSuccessFor(lname);
	}


    /***********Streeet Statement****** */


    
	if(streetValue === '') {
		setErrorFor(street, 'Street cannot be blank');
	} 
    else {
		setSuccessFor(street);
	}


    /***********City Statement***** */

	if(cityValue === '') {
		setErrorFor(city, 'City cannot be blank');
	
    
    } 
    else {
		setSuccessFor(city);
	}

    /***********Mobile Statement***** */

	if(mobileValue === '') {
		setErrorFor(mobile, 'Mobile cannot be blank');
    }if(mobileValue.charAt(0)!=5){
       setErrorFor(mobile, 'Number Should start with a 5');

    }else if (!ismobile(mobileValue)) {
    
        setErrorFor(mobile, 'Enter 8 digits starting with 5');

 }else {
		setSuccessFor(mobile);
	}



    /************email Statement********* */


	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	
	} else {
		setSuccessFor(email);
	}


/*******gender Statement********* */
    
if(genderValue === '') {
    setErrorFor(gender, 'Gender cannot be blank');

}else {
    setSuccessFor(gender);
}




/*********DOB Statement********* */

if(dobValue === '') {
    setErrorFor(dob, 'Date of birth cannot be blank');


}else {
    setSuccessFor(dob);
}


    /*********Nic/pass Statement******* */
    

    if(nicValue === '') {
		setErrorFor(nic, 'Nic cannot be blank');
        
	}else {
		setSuccessFor(nic);
	}
    
    if (nicValue.length <14){
        setErrorFor(nic,'Nic Must be 14 characters');
    }else {
        setSuccessFor(nic);
	}
    
    if(nicValue.length >14){
         setErrorFor(nic,'Nic Must be 14 characters');
     }






/************password Statement***** */

if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
    
    }
    if(passwordValue < 8 ){
        setErrorFor(password,'Please Enter At Least 8 characters')
    }
    else{
        setSuccessFor(password);
    }
    
	

/************2ND PASSWORD Statement**** */

	if(password2Value === '') {
		setErrorFor(password2, 'Confrim Pasword cannot be blank');
	
     } else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords do not match');
	} else{
		setSuccessFor(password2);
	}
}





if( app.alert({
    cMsg: "Clear this form?",
    cTitle: "Reset Form Warning",
    nIcon: 2,
    nType: 2
    }) == 4) {
    this.resetForm();
    }


    function checkForm(form)
    {
      
      if(!form.terms.checked) {
        alert("Please indicate that you accept the Terms and Conditions");
        form.terms.focus();
        return false;
      }
      return true;
    }




function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function isfirstname(fname) {
    return /^[A-Za-z]+$/.test(fname);
}
function islastname(lname) {
    return /^[A-Za-z]+$/.test(lname);
}
function ismobile(mobile) {
    return /^[0-9]{8}$/.test(mobile);
}

