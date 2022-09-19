import React from 'react'
import Form from "../Form";

import book from "../../images/book.svg";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

import Alert from "../shared/Alert";
import Processing from '../shared/Processing';
import { accessToken } from '../shared/UserID';
import { AxiosUserInstance } from '../shared/Axios';

function UpdatePost() {

    const params = useParams()
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [message, setMessage] = useState("")
    const [postData, setPostData] = useState({
        title: "",
        excerpt: "",
        content: "",
        image: null,

    })

    const [captions, setCaption] = useState([])

    const handleCaptionChange = (e) => {

        if (captions.includes(+e.currentTarget.value)) {
            setCaption(captions.filter((t) => t !== (+e.currentTarget.value)))
        } else {
            setCaption([...captions, +e.currentTarget.value])
        }
    }

    const handleInputChange = (e) => {
        if (e.target.name === "title") {
            setPostData({
                ...postData,
                title: e.target.value
            })
        } else if (e.target.name === "excerpt") {
            setPostData({
                ...postData,
                excerpt: e.target.value
            })
        }
        else if (e.target.name === "content") {
            setPostData({
                ...postData,
                content: e.target.value
            })
        }
        else {
            setPostData({
                ...postData,
                image: e.target.files
            })
        }
    }

    const { title, excerpt, content, image } = postData

    async function submitValidatedPost() {
        const formData = new FormData()

        formData.append("title", title);
        formData.append("excerpt", excerpt)
        formData.append("content", content)
        formData.append("excerpt", excerpt)
        formData.append("caption", captions)
        if (image) formData.append("image", image[0])
        formData.append("author", accessToken().user_id)
        try {
            const response = await AxiosUserInstance.put(`update/${params.slug}`, formData)

            if (response.status === 201 || 200) {
                setIsProcessing(true)

                setTimeout(() => { navigate("/admin") }, 3000)
            }
        } catch (error) {

            setError(true)
            // setMessage(error.response.data.error.title[0])
            console.log(error)
        }


    }

    function submitPost(e) {
        e.preventDefault()

        if (title === "" || excerpt === "" || content === "") {
            setError(true)
            setMessage("fields must not be empty!")
        } else if (title.trim().length <= 5) {
            setError(true)
            setMessage("Your book title should be more than 5 characters!")

        } else if (excerpt.trim().length <= 20 || excerpt.trim().length >= 200) {
            setError(true)
            setMessage("Introduction text should be at least 20 charaters and not more than 150!")

        } else if (content.trim().length <= 50) {
            setError(true)
            setMessage("book content is too short!")

        }
        else if (captions.length === 0) {
            setError(true)
            setMessage("Please select at least one caption for your Book")
        }

        else {
            submitValidatedPost()
        }
    }

    const fetchOldPost = async () => {
        const response = await AxiosUserInstance.get(`update/${params.slug}/`)
        const { data } = response
        setPostData({
            ...postData,
            title: data.title,
            excerpt: data.excerpt,
            content: data.content,
            image: null,
        })

        // setCaption(data.caption)
    }


    useEffect(() => {
        fetchOldPost()
        // eslint-disable-next-line 
    }, [params.slug])
    return (
        <div>
            {isProcessing ? (<Processing />) : (
                <Form image={book} formText={"Create a new book"} buttonText={"Post"} handleSubmit={submitPost}>

                    {error && <Alert message={message} />}
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title"
                            value={title}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="excerpt">Excerpt</label>
                        <input type="text" name="excerpt" id="excerpt"
                            value={excerpt}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="content">Content</label>
                        <textarea id='content' name='content'
                            value={content}
                            onChange={handleInputChange}></textarea>
                    </div>

                    <div>
                        <label htmlFor="content">Image</label>
                        <input type="file" name="image" id="image"
                            onChange={handleInputChange}
                        />

                    </div>

                    <div>
                        <label htmlFor="excerpt">Captions</label>
                    </div>
                    <ul>
                        <li>
                            <label htmlFor="excerpt">Education</label>
                            <input type="checkbox" name='Education' value={1}
                                onChange={handleCaptionChange} />
                        </li>
                        <li>
                            <label htmlFor="excerpt">Inspiration</label>
                            <input type="checkbox" name='trending' value={2}
                                onChange={handleCaptionChange} />
                        </li>
                        <li>
                            <label htmlFor="excerpt">News</label>
                            <input type="checkbox" name='Education' value={3}
                                onChange={handleCaptionChange} />
                        </li>

                    </ul>
                </Form>
            )}

        </div>
    )
}
export default UpdatePost