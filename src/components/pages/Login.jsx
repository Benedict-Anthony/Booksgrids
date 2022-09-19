import React from 'react'
import Form from '../Form'
import loginsvg from "../../images/login.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Alert from '../shared/Alert';
import { AuthInstance } from '../shared/Axios';
import Processing from '../shared/Processing';


import { FaEnvelope, FaKey } from "react-icons/fa"
function Login() {

    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("token"))

    const [error, setError] = useState(false)
    const [message, setMessage] = useState("");
    const [isProcessing, setIsProcessing] = useState(false)
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const { email, password } = loginData
    const handleChange = (e) => {
        if (e.target.name === "email") {
            setLoginData({
                ...loginData,
                email: e.target.value
            })
        } else {
            setLoginData({
                ...loginData,
                password: e.target.value
            })
        }
    }

    function saveToLocalStore(token) {
        localStorage.setItem("token", JSON.stringify(token))
        setIsProcessing(true)
        setTimeout(() => {
            navigate("/admin")
        }, 2000);
    }
    async function loginUser() {
        try {
            const response = await AuthInstance.post("login/", {
                email: email,
                password: password
            })

            saveToLocalStore(response.data)


        } catch (error) {
            if (error.response.status === 401) {
                setError(true)
                setMessage("email or password incorrect!")
            }
        }
    }
    function loginSubmit(e) {
        e.preventDefault()

        if (email === "" || password === "") {
            setMessage("Please enter all fields")
            setError(true)
        } else {

            loginUser()
        }
    }


    function checkAccessToken() {
        if (token) {
            navigate("/")
        }
    }

    useEffect(() => {
        checkAccessToken()
        // eslint-disable-next-line
    }, [])
    return (
        <>
            {isProcessing ? <Processing /> : (
                <Form formText={"Login to continue"} buttonText={"Login"} image={loginsvg} handleSubmit={loginSubmit}>
                    {error && <Alert message={message} />}
                    <div>
                        <label htmlFor="email">Email <FaEnvelope /></label>
                        <input type="email" name="email" id="email" value={email} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="password">Password <FaKey /></label>
                        <input type="password" name="password" id="password" value={password} onChange={handleChange} />
                    </div>

                    <p>dont have an account? <Link to={"/register"}>Sign Up</Link></p>
                </Form>
            )}

        </>
    )
}

export default Login
