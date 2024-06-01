import { useEffect, useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { register } from "../../api/studentapi";
import { useDispatch } from 'react-redux';
import { setAuthToken } from "../../../redux/studentSlice";

const OtpVerify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location=useLocation()
  const {userData}=location.state || {}
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [timeLeft,setTimeLeft]=useState(300);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);


  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);

    // Focus next input
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (timeLeft === 0) {
      alert("Time's up! Please request a new OTP.");
      return;
    }
    try {
      const response = await register({ ...userData, otp: otp.join('') });
      console.log(response)
        alert(response.data.message);
        dispatch(setAuthToken(response.data.token));
        setOtp(new Array(6).fill(''));
        navigate("/studentlogin");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-5 bg-cover bg-center">
      <div className="w-[900px] flex rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center bg-teal-500 p-3">
          <h1 className="text-white text-2xl font-[serif]">Do not want to sign up?</h1>
          <Link to='/studentsignup'>
            <button type="button" className="mt-6 bg-white text-teal-500 font-bold text-md py-2 px-6 rounded-full transition-all hover:bg-gray-100">
              Back
            </button>
          </Link>
        </div>
        <div className="flex-[1.5] flex flex-col items-center justify-center bg-white p-10">
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <h1 className="text-4xl font-[serif] mb-10">OTP verification</h1>
            <div className="flex space-x-2">
              {otp.map((data, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-gray-300 rounded-lg"
                  value={data}
                  onChange={(e) => handleOtpChange(e, index)}
                />
              ))}
            </div>
            <div className="text-gray-600 mb-4 mt-5">Time left: {formatTime(timeLeft)}</div>
            <button type="submit" 
            className="mt-14 bg-teal-500 text-white font-bold text-md py-3 px-8 rounded-full transition-all hover:bg-teal-600"
            disabled={timeLeft===0}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;