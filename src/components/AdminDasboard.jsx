import React from 'react'
import { FaEdit, FaTrash, } from "react-icons/fa"
import { AdminDCompoent } from './UI/Admin.styled'

import { Link } from 'react-router-dom'

function AdminDasboard({ item, handleDelete }) {
    return (
        <AdminDCompoent>
            <article>
                <img src={item.image} alt="" />
                <div>
                    <p>{item.excerpt}</p>
                </div>
                <div className="line"></div>
                <div className="button">
                    <Link className="update" to={'update/' + item.slug}><FaEdit /> </Link>
                    <Link className="read" to={'/detail/' + item.slug}>View</Link>
                    <div className="delete" onClick={handleDelete}><FaTrash /> </div>

                </div>
            </article>
        </AdminDCompoent>
    )
}

export default AdminDasboard