import React, { useEffect, useRef, useState } from "react";

const OTPInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(" "));

  const inputRefs = useRef([])

  // console.log(inputRefs);

  useEffect(() => {
    if(inputRefs.current[0]) {
        inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if(isNaN(value)) return;
    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1)
    setOtp(newOtp);

    // submit trigger
    const combineOtp = newOtp.join("")
    if(combineOtp.length === length ) onOtpSubmit(combineOtp)

      // move focus to next
      if(value && index < length - 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();

      } 
  };

  const handleClick = (index, e) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional validation
    if(index > 0 && !otp[index-1] ) { 
        inputRefs.current[otp.indexOf("")].focus()
    }
  };

  const handleKeyDown = (index, e) => {
        if(e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
          // moving focus to back field
          inputRefs.current[index - 1].focus();
        } 
  };

  return (
    <>
      {
      otp.map((value, index) => {
        return (
        <input
          ref={(input) => {inputRefs.current[index] = input }}
          key={index}
          type="text"
          value={value}
          onChange={(e) => handleChange(index, e)}
          onClick={handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="otpInput"
        />);
      })}
    </>
  );
};

export default OTPInput;
