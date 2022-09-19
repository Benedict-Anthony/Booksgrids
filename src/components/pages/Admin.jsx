import React, { useState } from 'react'
import AdminProfile from '../AdminProfile';
import AdminDasboard from '../AdminDasboard';

import { AxiosUserInstance } from '../shared/Axios';
import Spinner from '../shared/Spinner';

import { FaBars } from 'react-icons/fa';

import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { variants } from '../shared/Variants';

import { Main, AdminD } from '../UI/Admin.styled';

function Admin() {
    const [showbar, setshowbar] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
    const [adminPosts, setAdminPosts] = useState([])
    const [adminProfile, setAdminProfile] = useState({})
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("token"))


    const fetchLogedInUserPost = async () => {
        checkAccessToken()
        setIsLoading(true)
        try {
            const res = await AxiosUserInstance.get("author/profile/")
            const response = await AxiosUserInstance.get("author/admin/");
            setAdminProfile(res.data)

            setAdminPosts(response.data)
            setIsLoading(false)
        } catch (error) {
            if (error.response.data.data === null) {
                window.location.href = "/admin/profile"

            } else {
                window.location.reload()

            }

        }

    }
    function checkAccessToken() {
        if (!token) {
            navigate("/login")
        }
    }

    const handleDelete = async (slug, title) => {
        if (window.confirm(`Are you sure You want to delete ${title.toUpperCase()}`)) {

            setAdminPosts(adminPosts.filter((item) => item.slug !== slug))
            const response = await AxiosUserInstance.delete(`delete/${slug}/`)


            if (response.status === 204) {
                window.alert(`${title.toUpperCase()} have been deleted`)

            }
        }
    }

    useEffect(() => {

        checkAccessToken()

        if (token) {

            fetchLogedInUserPost()
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            {isLoading ? <Spinner /> : (
                <>
                    <Main
                        variants={variants}
                        initial={"onLoad"}
                        animate={"onLoaded"}>
                        <FaBars className={`toggler show`} onClick={() => setshowbar(!showbar)} />

                        <AdminProfile item={adminProfile} active={showbar} />

                        <AdminD>
                            {adminPosts.length === 0 ? (<p>You have no post</p>) : (<>
                                {adminPosts.map((item) => (

                                    <AdminDasboard item={item} key={item.id} handleDelete={(e) => handleDelete(item.slug, item.title)} />
                                ))}
                            </>)}
                        </AdminD>
                    </Main>
                </>
            )
            }
        </>
    )
}

export default Admin