import React from 'react';

import { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';

import Container from '../UI/Container.styled';
import { StyledDetail, StyledSection, AsideStyle, Button, CommentDiv, DIV } from '../UI/Detail.styled';

import { AuthorPosts } from '../Post';

import Alert from '../shared/Alert';
import AxiosInstance from '../shared/Axios';
import Spinner from '../shared/Spinner';
import { variants } from '../shared/Variants';

function Detail() {
    const url = "posts/"
    const [readLaterPosts, setReadLaterPost] = useState([])
    const [post, setPost] = useState({})
    const [relatedPost, setRelatedPost] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [message, setMessage] = useState("")
    const [error, setError] = useState(false)
    const [postComment, setPostComment] = useState([])
    const [comment, setComment] = useState({
        name: "",
        comment: "",
        post: post.id
    })
    const params = useParams()
    const btnRef = useRef()

    const getPost = async () => {
        setIsLoading(true)
        try {
            const response = await AxiosInstance.get(url + params.slug)
            const posts = await AxiosInstance.get(`${url}${params.slug}/related/`)
            const comments = await AxiosInstance.get(`comment/${params.slug}/`)
            setPost(response.data)
            setRelatedPost(posts.data.slice(0, 5))
            setPostComment(comments.data)
            setIsLoading(false)

        } catch (error) {
        }
    }

    localStorage.setItem("readLaterPosts", JSON.stringify(readLaterPosts))


    const savePostToStore = () => {
        if (readLaterPosts.includes(post)) {
            setReadLaterPost(readLaterPosts.filter((item) => item !== post))
            btnRef.current.innerHTML = "Read later"

        } else {
            setReadLaterPost([...readLaterPosts, post])
            btnRef.current.innerHTML = "Removed from read later"

        }

        localStorage.setItem("readLaterPosts", JSON.stringify(readLaterPosts))


    }

    const handleCommentSubmit = async (e) => {
        e.preventDefault()
        if (comment.name === "" || comment.comment === "") {
            setError(true)
            setMessage("fields must not be empty!")
        }

        else {
            setComment({ ...comment, post: post.id })
            setPostComment([comment, ...postComment])

            const response = await AxiosInstance.post("comment/", comment)


            console.log(postComment)
            console.log(response)
        }
    }

    useEffect(() => {
        getPost()
        // eslint-disable-next-line 
    }, [params.slug])


    return (
        <>

            {isLoading ? <Spinner /> : (

                <Container>
                    <StyledDetail>
                        <StyledSection
                            variants={variants}
                            initial={"onLoad"}
                            animate={"onLoaded"}>
                            <h1>{post.title}</h1>
                            <div>
                                <img src={"http://127.0.0.1:8000" + post.image} alt="" />
                            </div>

                            {post.caption ? post.caption.map((cap, index) => (
                                <li key={index + 1}>{cap}</li>
                            )) : null}

                            <Button ref={btnRef} onClick={savePostToStore}>Read Later</Button>
                            <div>
                                <p className="author">By {post.author}</p>

                            </div>
                            <p>{post.content}</p>


                            <CommentDiv>
                                {error && <Alert message={message} />}
                                <form onSubmit={handleCommentSubmit}>

                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" value={comment.name} onChange={(e) => setComment({ ...comment, name: e.target.value, post: post.id })} />
                                    </div>

                                    <div>
                                        <label htmlFor="comment">Comment</label>
                                        <textarea name="comment" value={comment.comment} onChange={(e) => setComment({ ...comment, comment: e.target.value, post: post.id })}></textarea>
                                    </div>

                                    <button type="submit">Comment</button>
                                </form>


                                {postComment.length > 0 && (
                                    <DIV>
                                        {postComment.map((comment, index) => (
                                            <div key={index+1}>
                                                <h3>{comment.name}</h3>
                                                <p>{comment.comment}</p>
                                            </div>
                                        ))}
                                    </DIV>
                                )}

                            </CommentDiv>
                        </StyledSection>


                        <AsideStyle
                            variants={variants}
                            initial={"XLoad"}
                            animate={"XLoaded"}
                        >
                            <p >Related Articles</p>
                            {relatedPost.length > 0 && (
                                relatedPost.map((repost) => (
                                    <AuthorPosts post={repost} key={repost.id} />
                                ))
                            )}
                        </AsideStyle>
                    </StyledDetail>
                </Container>
            )}

        </>
    )
}

export default Detail