import React, { useEffect, useState } from 'react'
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";

import firebase from '../../firebase'



function SignIn() {

	const [mobileNumber,setMobileNumber] = useState("")
	const [otp,setOtp] = useState('')
	const [showOtp, setShowOtp] = useState(false);
	

	const handleChange=(e)=>{
		const {name, value} = e.target;
		console.log(mobileNumber,"Take Update .......")
		setMobileNumber(e.target.value)
		setOtp(e.target.value)
	}

	useEffect(()=>{
		const auth = getAuth();
		window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
		  'size': 'invisible',
		  'callback': (response) => {
			// reCAPTCHA solved, allow signInWithPhoneNumber.
			onSignInSubmit();
		  },
		  defaultCountry:"IN"
		});

	},[])

const onSignInSubmit=(e)=>{
	e.preventDefault();
	const auth = getAuth();
	const phoneNumber = "+91" + mobileNumber;
	console.log(phoneNumber,"phoneNumber")
const appVerifier = window.recaptchaVerifier;

console.log(appVerifier,"......jugnu")

signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
	  console.log("OTP has been sent")
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
	  console.log("SMS not sent")
    });

}


const onSumbmitOTP=(e)=>{
	alert("hi")

	const code = otp;
	console.log(code,"code.........")
window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  console.log(JSON.stringify(user))
  alert("sms sent")
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});

}
  return (
    <>
   <div class="container">
    <div class="row vertical-offset-100">
    	<div class="col-md-4 col-md-offset-4">
    		<div class="panel panel-default">
			  	<div class="panel-heading">
			    	<h3 class="panel-title text-center">Please sign in</h3>
			 	</div>
			  	<div class="panel-body">
			    	<form accept-charset="UTF-8" role="form" onSubmit={onSignInSubmit}>
						<div id="sign-in-button"></div>
                    <fieldset>
			    	  	<div class="form-group">
			    		    <input class="form-control" placeholder="Enter your Mobile number" name="mobile" type="text" value={mobileNumber} onChange={handleChange}/>
			    		</div>
			    		
			    		{/* <input class="btn btn-lg btn-success btn-block" type="submit" value="Login"/> */}
						<button type='submit' id="sign-in-button">Login</button>
			    	</fieldset>
			      	</form>
					
			    </div>
				
			</div>
			<form onSubmit={onSumbmitOTP}>
						<input type="text" value={otp} onChange={handleChange}/>
					</form>
		</div>
	</div>
</div>
    </>
  )
}

export default SignIn