import React, { useState } from 'react'
import OTPInput from './OTPInput'

const PhoneOTPform = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showOtpInput, setshowOtpInput] = useState(false)

    const handlePhoneNumber = (e) => {
            setPhoneNumber(e.target.value)
            console.log(phoneNumber);
            
    }

    const handlePhoneSubmit = (e) => {
        // prevent refresh
            e.preventDefault();
            // phone validations
            const regexp = /[^0-9]/g;
            if(phoneNumber.length < 10 || regexp.test(phoneNumber)) {
                alert("invalid phone number")
                return ;
            }
                // call backend api
                // show otp field
                setshowOtpInput(true);
    }

    const onOtpSubmit = (otp) => {
        console.log('login success ', otp);
    }

  return (
    <div>
        {/* if showOtpInput is not true then show something else */}
        {/* first its false, in state, but we are using ! operator, so it becomes true, and shows the form */}
        {/* after submitting form it becomes true, and due to ! operator it turns out to be false, and shows next data  */}
       {!showOtpInput?  <form  onSubmit={handlePhoneSubmit}>

            <input type="text" placeholder='enter phone number' value={phoneNumber} onChange={handlePhoneNumber} />
            <button type='submit'>submit</button>
        </form> : <div>
            <p>enter otp sent to {phoneNumber}</p>
            <OTPInput length={4}  onOtpSubmit={onOtpSubmit} />
            </div>}
    </div>
  )
}

export default PhoneOTPform