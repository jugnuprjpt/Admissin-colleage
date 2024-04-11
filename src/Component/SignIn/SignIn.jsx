import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function SignIn() {

	const [mobileNumber,setMobileNumber] = useState("")

	const sendOtp = async() =>{

      try {
		const recaptcha = new RecaptchaVerifier (auth,"recaptcha", {})
		const confirmation = await signInWithPhoneNumber (auth,mobileNumber,recaptcha)
		// setUser(confirmation)
		console.log(confirmation)
		
	  } catch (error) {
		console.log(error)
	  }		
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
			    	{/* <form accept-charset="UTF-8" role="form" 
					// onSubmit={onSignInSubmit}
					> */}
						
                    <fieldset>
			    	  	<div class="form-group">
			    		    {/* <input class="form-control" placeholder="Enter your Mobile number" name="mobile" 
							type="text" value={mobileNumber} onChange={(mobileNumber)=>setMobileNumber( "+" + mobileNumber)}/> */}

<PhoneInput
  country={'in'}
  value={mobileNumber}
  onChange={(mobileNumber)=>setMobileNumber( "+" + mobileNumber)}
/>
							
			    		</div>
			    		
			    		 <input class="btn btn-lg btn-success btn-block" type="submit" value="Login" onClick={sendOtp}/> 
						{/* <button onClick={sendOtp}>Login</button> */}
						<div id="recaptcha"></div>
			    	</fieldset>
			      	{/* </form> */}
					
			    </div>
				
			</div>
			{/* <form onSubmit={onSumbmitOTP}>
						<input type="text" value={otp} onChange={handleChange}/>
					</form> */}
		</div>
	</div>
</div>
    </>
  )
}

export default SignIn