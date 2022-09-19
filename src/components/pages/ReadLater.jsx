import React from 'react'
import { useState, useEffect } from "react"

import { variants } from "../shared/Variants"
import Container from '../UI/Container.styled'
import { SectionHome } from '../UI/Home.styled';
import { SearchSection } from '../UI/Search.styled';
import Post from '../Post';
function ReadLater() {

    const [postFromStore, setPostFromStore] = useState([])

    function fetchSavePost() {
        try {
            const savedPost = JSON.parse(localStorage.getItem("readLaterPosts"))
            if (savedPost) {

                // const { savedPosts } = savedPost
                setPostFromStore(savedPost)
            }
        } catch (error) {

        }

    }

    useEffect(function () {
        fetchSavePost()
    }, [])

    return (
        <SearchSection>
            <Container>
                <h2 style={
                    {
                        fontWeight: "400",
                        fontSize: "18px"
                    }
                }>Your saved post</h2>
                {postFromStore.length > 0 ? (
                    <SectionHome
                        variants={variants}
                        initial={"onLoad"}
                        animate={"onLoaded"}>
                        {postFromStore.map((post) => (
                            <Post post={post} key={post.id} />
                        ))}
                    </SectionHome>
                ) : (
                    <h2 style={{
                        fontWeight: "400",
                        fontSize: "18px"
                    }}>You have no post save for read later</h2>
                )}
            </Container>
        </SearchSection>
    )
}

export default ReadLater
