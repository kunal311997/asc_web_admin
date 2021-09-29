import { useState } from 'react'
import { LOGIN_API_URL } from '../constants/AppConstants'
import { useHistory } from "react-router-dom";
import appIcon from '../assets/app_icon.png'
import * as constants from '../constants/AppConstants';
import { Redirect } from 'react-router'
import Loader from '../components/Loader';

export default function Login() {
    const history = useHistory();

    const [isOtpSent, setIsOtpSent] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [buttonText, setButtonText] = useState("Send OTP")
    const [loginParams, setLoginParams] = useState({ email: '', pin: '' })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(value)
        setLoginParams({ ...loginParams, [name]: value })
    }

    const isLoggedIn = localStorage.getItem(constants.IS_USER_LOGGED_IN)
    console.log(isLoggedIn)
    if (isLoggedIn) {
        return <Redirect to='/home' />
    }

    const onLoginClick = (e) => {
        e.preventDefault();
        const callLogin = async () => {
            const loginRes = await callLoginApi()
            console.log(loginRes.Pin)
            if (loginRes.Pin !== undefined && loginRes.Pin !== null) {
                setIsOtpSent(true)
                setButtonText("Verify ")
                setLoginParams({ ...loginParams, pin: loginRes.Pin })
            } else {
                alert('Error occured' + loginRes)
            }
            setIsLoading(false)
        }

        const callPinVerify = async () => {
            const pinVerifyRes = await callPinVerificationApi()
            console.log(pinVerifyRes)
            if (pinVerifyRes.pinValidity) {
                localStorage.setItem(constants.IS_USER_LOGGED_IN, true)
                history.replace('/home')
            } else {
                alert('Error occured' + pinVerifyRes)
            }
            setIsLoading(false)
        }
        if (isOtpSent) {
            callPinVerify()
            setIsLoading(true)
        } else if (loginParams.email) {
            callLogin()
            setIsLoading(true)
        } else {
            alert('Please enter email')
        }
    }


    const callLoginApi = async () => {
        const res = await fetch(LOGIN_API_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify({
                email: loginParams.email
            })
        })
        const data = await res.json()
        console.log(data)
        return data
    }

    const callPinVerificationApi = async () => {
        const res = await fetch(constants.PIN_VERIFICATION_API_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify({
                email: loginParams.email,
                pin: loginParams.pin
            })
        })
        const data = await res.json()
        console.log(data)
        return data
    }


    return (
        <>
            <div className="full_height_div" >
                <div className="bg_blue_div">
                    <img className='appIcon' src={appIcon} />
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
                        style={{ borderColor: isOtpSent ? '#272b2f' : '#eb480b', backgroundColor: '#2a2e32' }}
                    />
                    <input
                        type='text'
                        id="pin"
                        name="pin"
                        placeholder="6-digit OTP"
                        value={loginParams.pin}
                        onChange={handleChange}
                        maxlength="6"
                        size='6'
                        disabled={!isOtpSent ? true : false}
                        style={{ borderColor: !isOtpSent ? '#272b2f' : '#eb480b', backgroundColor: '#2a2e32' }} />

                    <button type="submit" onClick={onLoginClick}>{buttonText}</button>
                </div>
                {isLoading && <Loader />}
            </div>
        </>
    )
}

