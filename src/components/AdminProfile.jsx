import React from 'react'
import { FaEdit, FaPlus, FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Profilesection } from './UI/Admin.styled'
import { Button } from './UI/Form.styled';

function AdminProfile({ item, active }) {

    const logOutUser = () => {
        localStorage.removeItem("token")
        window.location.href = "/"
    }
    return (
        <>
            <Profilesection className={active && "show"}>
                <div>
                    <img src={item.image} alt="" />
                </div>
                <div>
                    <p>Welcome to your dashboard</p>
                    <h2> {item.full_name}</h2>
                    <br />
                    <p>{item.about}</p>
                    <br />
                    <p>{item.write_about}</p>
                </div>

                <Link className="edit" to={"/admin/profile-update"}><FaEdit /></Link>

                <Link style={{
                    fontSize: "20px",
                    marginTop: "30px"
                }} to={"/admin/addpost/"} className="add"> Add New Book <FaPlus style={{
                    color: "green",
                    marginTop: "10px"

                }} /> </Link>
                <Button onClick={logOutUser}>Log Out <FaSignOutAlt /></Button>
            </Profilesection>
        </>
    )
}

export default AdminProfile