import React from 'react'

import { Card } from './UI/Home.styled';
import { Link } from "react-router-dom";
import { MorePost } from './UI/Profile.styled';

function Post({ post }) {
    return (
        <Card>
            <div className='image'>
                <img src={post.image} alt={post.title} />
            </div>
            <div>
                <h3>{post.title}</h3>
                <p>
                    {post.excerpt}
                </p>
                <Link to={"/detail/" + post.slug}>Read more</Link>
            </div>

        </Card>
    )
}

export default Post


export const AuthorPosts = ({ post }) => {
    const imgUrl = 'http://127.0.0.1:8000'

    return (
        <MorePost>
            <div>
                <img src={imgUrl + post.image} alt="" />
            </div>
            <Link to={"/detail/" + post.slug}> <p>{post.title}</p> </Link>
        </MorePost>
    )
}