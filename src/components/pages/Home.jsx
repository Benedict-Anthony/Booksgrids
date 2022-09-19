import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';

import Container from '../UI/Container.styled'
import { HomeMain, HomeMainSection, HomeAside, SectionHome, HomeAsideWrapper } from "../UI/Home.styled";

import AxiosInstance from '../shared/Axios';

import Post from '../Post';
import Spinner from '../shared/Spinner';
import { variants } from '../shared/Variants';

function Home() {

    const [posts, setPosts] = useState([])
    const [trending, setTrending] = useState([])
    const [top, setTop] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        setIsLoading(true)
        const response = await AxiosInstance.get("posts/")
        const { data } = response.data

        setTrending(data.slice(0, 3))
        setTop(data.slice(0, 1))
        setPosts(data.slice(4,))

        setIsLoading(false)

    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            {isLoading ? <Spinner /> : (

                <Container>
                    <HomeMain
                        variants={variants}
                        initial={"onLoad"}
                        animate={"onLoaded"}
                    >
                        <HomeMainSection>

                            {top.map((post) => (
                                <Link to={"detail/" + post.slug} key={post.id}>

                                    <div >
                                        <img src={post.image} alt="" />
                                        <div>
                                            <h2>{post.title}</h2>
                                            <p>{post.excerpt}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </HomeMainSection>

                        <HomeAsideWrapper>

                            {trending.map((post) => (
                                <Link to={"detail/" + post.slug} key={post.id}>
                                    <HomeAside >
                                        <div>
                                            <img src={post.image} alt="" />
                                        </div>

                                        <div>
                                            <p>{post.excerpt}
                                            </p>
                                        </div>
                                    </HomeAside>
                                </Link>
                            ))}

                        </HomeAsideWrapper>
                    </HomeMain>


                    <SectionHome
                        variants={variants}
                        initial={"onXLoad"}
                        animate={"onXLoaded"}
                    >
                        {posts.map((post) => (
                            <Post post={post} key={post.id} />
                        ))}
                    </SectionHome>
                </Container>
            )}

        </>

    )
}

export default Home
