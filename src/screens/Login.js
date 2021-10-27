import { useState } from "react";
import { useHistory } from "react-router-dom";
import appIcon from "../assets/app_icon.png";
import * as AppConstants from "../constants/AppConstants";
import { Redirect } from "react-router";
import Loader from "../components/Loader";

export default function Login() {
  const history = useHistory();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState(AppConstants.SEND_OTP);
  const [loginParams, setLoginParams] = useState({ email: "", pin: "" });

  const isLoggedIn = localStorage.getItem(AppConstants.IS_USER_LOGGED_IN);
  if (isLoggedIn) {
    return <Redirect to={AppConstants.HOME_PATH} />;
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginParams({ ...loginParams, [name]: value });
  };

  const onLoginClick = (e) => {
    e.preventDefault();
    const callLogin = async () => {
      const loginRes = await callLoginApi();
      console.log(loginRes.Pin);
      if (loginRes.pin !== undefined && loginRes.pin !== null) {
        setIsOtpSent(true);
        setButtonText("Verify");
        setLoginParams({ ...loginParams, pin: loginRes.pin });
      } else {
        console.log(loginRes);
        alert("Error occured" + loginRes);
      }
      setIsLoading(false);
    };

    const callPinVerify = async () => {
      const pinVerifyRes = await callPinVerificationApi();
      console.log(pinVerifyRes);
      if (pinVerifyRes.pinValidity) {
        localStorage.setItem(AppConstants.IS_USER_LOGGED_IN, true);
        localStorage.setItem(AppConstants.USER_TYPE, AppConstants.ADMIN);
        history.replace(AppConstants.HOME_PATH);
      } else {
        alert("Error occured" + pinVerifyRes);
      }
      setIsLoading(false);
    };

    if (isOtpSent) {
      callPinVerify();
      setIsLoading(true);
    } else if (loginParams.email) {
      callLogin();
      setIsLoading(true);
    } else {
      alert("Please enter email");
    }
  };

  const callLoginApi = async () => {
    const res = await fetch(AppConstants.LOGIN_API_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        email: loginParams.email,
      }),
    });
    const data = await res.json();
    console.log(data);
    return data;
  };

  const callPinVerificationApi = async () => {
    const res = await fetch(AppConstants.PIN_VERIFICATION_API_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        email: loginParams.email,
        pin: loginParams.pin,
      }),
    });
    const data = await res.json();
    console.log(data);
    return data;
  };

  return (
    <>
      <div className="full_height_div">
        <div className="bg_blue_div">
          <img className="appIcon" src={appIcon} alt="icon" />
        </div>

        <div className="bg_white_card_div">
          <h1>Login</h1>
          <input
            autoFocus
            type="text"
            id="email"
            name="email"
            placeholder="Email-ID"
            value={loginParams.email}
            onChange={handleChange}
            disabled={isOtpSent ? true : false}
            style={{
              borderColor: isOtpSent ? "#272b2f" : "#eb480b",
              backgroundColor: "#2a2e32",
            }}
          />
          <input
            type="text"
            id="pin"
            name="pin"
            placeholder="6-digit OTP"
            value={loginParams.pin}
            onChange={handleChange}
            maxlength="6"
            size="6"
            disabled={!isOtpSent ? true : false}
            style={{
              borderColor: !isOtpSent ? "#272b2f" : "#eb480b",
              backgroundColor: "#2a2e32",
            }}
          />
          <button type="submit" onClick={onLoginClick}>
            {buttonText}
          </button>
        </div>
        {isLoading && <Loader />}
      </div>
    </>
  );
}
