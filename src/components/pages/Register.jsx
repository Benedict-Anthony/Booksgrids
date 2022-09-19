import React from 'react'
import Form from '../Form'
import signIn from "../../images/signIn.svg";
import { FaEnvelope, FaUnlock, FaUserAlt } from "react-icons/fa";
import Alert from '../shared/Alert';
import { useState, useEffect } from "react"
import { AuthInstance } from '../shared/Axios';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import Processing from '../shared/Processing';


function Register() {
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("token"));

    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
    });

    const [error, setError] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [message, setMessage] = useState("")

    const handleFormChange = (e) => {
        if (e.target.name === "username") {
            setRegisterData({
                ...registerData,
                username: e.target.value.trim()
            })
        } else if (e.target.name === "email") {
            setRegisterData({
                ...registerData,
                email: e.target.value
            })
        }

        else if (e.target.name === "password1") {
            setRegisterData({
                ...registerData,
                password1: e.target.value
            })
        } else {
            setRegisterData({
                ...registerData,
                password2: e.target.value
            })
        }

    }
    const { username, email, password1, password2 } = registerData

    async function submitData() {
        try {
            const response = await AuthInstance.post("register/", {
                email: email,
                username: username,
                password: password2
            })

            if (response.status === 200 | 201) {
                setIsProcessing(true)
                setTimeout(() => {

                    navigate("/login")
                }, 2000)
            }
        } catch (error) {
            const { data } = error.response
            if (data.email) {
                setError(true)
                setMessage(data.email[0])
            } else if (data.username) {
                setError(true)
                setMessage(data.username[0])

            }
        }
    }
    const handleRegistrationSubmit = (e) => {
        e.preventDefault()
        if (username.trim() === "" | email.trim() === "" | password1 === "" | password2 === "") {
            setError(true)
            setMessage("please enter all fields")
        }
        else if (password1 !== password2) {
            setError(true)
            setMessage("passwords do not match!")
        }

        else if (password1.trim().length < 6 | password2.trim().length < 6) {
            setError(true)
            setMessage("password should be at least 6 characters!")
        }
        else {

            submitData()
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
        <div>

            {isProcessing ? <Processing /> : (
                <Form image={signIn} formText={"Sign Up to continue"} buttonText={"Sign Up"} handleSubmit={handleRegistrationSubmit}>
                    {error ? <Alert message={message} /> : null}
                    <div>
                        <label htmlFor="username">Username <FaUserAlt /></label>
                        <input type="text" name="username" id="username" value={username} onChange={handleFormChange} />
                    </div>

                    <div>
                        <label htmlFor="email">Email <FaEnvelope /></label>
                        <input type="email" name="email" id="email" value={email} onChange={handleFormChange} />
                    </div>

                    <div>
                        <label htmlFor="password">Password <FaUnlock /></label>
                        <input type="password" name="password1" id="password1" value={password1} onChange={handleFormChange} />
                    </div>

                    <div>
                        <label htmlFor="password">Confirm Password <FaUnlock /></label>
                        <input type="password" name="password2" id="password2" value={password2} onChange={handleFormChange} />
                    </div>

                    <p>Already have an account? <Link to={"/login"}>Sign In</Link></p>
                </Form>
            )}

        </div>
    )
}

export default Register
