import React from 'react'
import { useState } from 'react';
import Alert from "../shared/Alert"
import Form from "../Form";
import { AxiosUserInstance } from '../shared/Axios';
import { accessToken } from '../shared/UserID';
import Processing from "../shared/Processing";

import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import profile from "../../images/profile.svg"


function SetProfile() {

    const navigate = useNavigate()
    const [profileData, SetProfileData] = useState({
        first_name: "",
        last_name: "",
        about: "",
        write_about: "",
        phone: ""
    })

    const [socialMedia, setSocialMedia] = useState({
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
    })

    const [avata, setAvata] = useState(null)


    const [form, setForm] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")
    const [isProcessing, setIsProcessing] = useState(false)

    const { first_name, last_name, about, write_about, phone } = profileData
    const { facebook, instagram, twitter, linkedin } = socialMedia

    function handleChange(e) {
        if (e.target.name === "firstName") {
            SetProfileData({
                ...profileData,
                first_name: e.target.value
            })

        } else if (e.target.name === "lastName") {
            SetProfileData({
                ...profileData,
                last_name: e.target.value
            })
        } else if (e.target.name === "phone") {
            SetProfileData({
                ...profileData,
                phone: e.target.value
            })
        } else if (e.target.name === "about") {
            SetProfileData({
                ...profileData,
                about: e.target.value
            })
        }
        else if (e.target.name === "writeAbout") {
            SetProfileData({
                ...profileData,
                write_about: e.target.value
            })
        }
    }

    function handleFileChange(e) {
        setAvata(e.target.files)

    }

    async function submitData() {
        const formData = new FormData()
        formData.append("first_name", first_name)
        formData.append("last_name", last_name)
        formData.append("about", about)
        formData.append("write_about", write_about)
        formData.append("phone", phone)
        formData.append("facebook_url", facebook)
        formData.append("instagram_url", instagram)
        formData.append("twitter_url", twitter)
        formData.append("linkedin_url", linkedin)
        formData.append("image", avata[0])
        formData.append("user", accessToken().user_id)

        const response = await AxiosUserInstance.post("user/profile-create/", formData)

        if (response.status === 201 || 200) {
            setIsProcessing(true)

            setTimeout(() => navigate("/admin"), 3000)
        }
        console.log(response)
    }

    function submitProfile(e) {
        e.preventDefault()
        if (first_name === "" || last_name === "" || about === "" || write_about === "" || phone === "") {
            setError(true)
            setMessage("Please enter all required fields")
        }
        else {
            submitData()
        }


    }

    const showFormStyle = {
        height: "0",
        overflow: "hidden"
    }

    const hideFormStyle = {
        height: "100%",
        overflow: "visble"
    }


    return (
        <div style={{
            marginTop: "150px",
        }}>
            {isProcessing ? <Processing /> : (
                <Form formText={"set up your profile"} handleSubmit={submitProfile} image={profile}>

                    {error && <Alert message={message} />}
                    <div>
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name='firstName' id='firstName' value={first_name} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name='lastName' id='lastName' value={last_name} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="last_name">Contact</label>
                        <input type="number" name='phone' id='phone' value={phone} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="about">About yourself</label>
                        <textarea name="about" id="about" value={about} onChange={handleChange} ></textarea>
                    </div>

                    <div>
                        <label htmlFor="writeAbout">What do you write about?</label>
                        <textarea name="writeAbout" id="writeAbout" value={write_about} onChange={handleChange}  ></textarea>
                    </div>

                    <div>
                        <label htmlFor="write_about">Avata</label>
                        <input type="file" name='avata' id='avata' accept='image/*' onChange={handleFileChange} />
                    </div>


                    <h4 style={
                        {
                            fontSize: "20px",
                            fontWeight: "400",
                            margin: "10px 0",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: "#333",
                        }} onClick={() => setForm(!form)}> <span>Social media set up</span> <span><FaPlus /></span></h4>
                    <div style={!form ? showFormStyle : hideFormStyle}>
                        <div>
                            <label htmlFor="last_name">Facebook url</label>
                            <input type="text" name='facebook' id='facebook' value={facebook} onChange={(e) => { setSocialMedia({ ...socialMedia, facebook: e.target.value }) }} />
                        </div> <div>
                            <label htmlFor="last_name">Twitter</label>
                            <input type="text" name='twitter' id='twitter' value={twitter} onChange={(e) => { setSocialMedia({ ...socialMedia, twitter: e.target.value }) }} />
                        </div> <div>
                            <label htmlFor="last_name">Instagram</label>
                            <input type="text" name='instagram' id='instagram' value={instagram} onChange={(e) => { setSocialMedia({ ...socialMedia, instagram: e.target.value }) }} />
                        </div>
                        <div>
                            <label htmlFor="last_name">LinkedIn</label>
                            <input type="text" name='linkedin' id='linkedin' value={linkedin} onChange={(e) => { setSocialMedia({ ...socialMedia, linkedin: e.target.value }) }} />
                        </div>
                    </div>
                </Form>
            )}
        </div>
    )
}

export default SetProfile