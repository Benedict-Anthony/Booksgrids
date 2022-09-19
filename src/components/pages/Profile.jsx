import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AuthorPosts } from '../Post';


import AxiosInstance from '../shared/Axios'
import Container from "../UI/Container.styled";
import { StyledProfileSection, ImageWrapper, InfoWrapper, SocialIcons, RelatedPost } from '../UI/Profile.styled';
import { variants } from '../shared/Variants';



function Profile() {
    const params = useParams()

    const [authorsPost, setAuthorsPost] = useState([])
    const [authprofile, setAuthProfile] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const getAuthorProfile = async () => {
        try {
            const profile = await AxiosInstance.get(`authors/${params.url}/`)
            const posts = await AxiosInstance.get(`authors/${params.url}/posts/`)
            setAuthProfile(profile.data)
            setAuthorsPost(posts.data.data)

            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAuthorProfile()

        // eslint-disable-next-line 
    }, [params.url])

    return (
        <>

            {isLoading ? (
                <h1>Loading</h1>
            ) : (
                <Container>
                    <section style={{
                        marginTop: "70px",
                        paddingTop: "20px"
                    }}>
                        <StyledProfileSection
                            variants={variants}
                            initial={"onLoad"}
                            animate={"onLoaded"}
                        >
                            <ImageWrapper>
                                <img src={authprofile.profile.image} alt="" />
                            </ImageWrapper>
                            <InfoWrapper>
                                <div>
                                    <h2>{authprofile.full_name} </h2>
                                </div>
                                <div>
                                    <p>{authprofile.profile.about} </p>
                                    <p>{authprofile.profile.write_about} </p>
                                </div>
                                <div>
                                    <SocialIcons>
                                        <a href={authprofile.profile.facebook_url} target="blank"><FaFacebook /></a>
                                        <a href={authprofile.profile.twitter_url} target="blank"><FaTwitter /></a>
                                        <a href={authprofile.profile.instgram_url} target="blank"><FaInstagram /></a>
                                        <a href={authprofile.profile.linkedin_url} target="blank"><FaLinkedin /></a>
                                    </SocialIcons>
                                </div>
                            </InfoWrapper>
                        </StyledProfileSection>
                    </section>


                    <RelatedPost variants={variants}
                        initial={"onXLoad"}
                        animate={"onXLoaded"}
                    >
                        {authorsPost <= 0 ? (
                            <p>No book published by {authprofile.profile && authprofile.profile.first_name}</p>
                        ) :

                            authorsPost.map((post) => (
                                <AuthorPosts post={post} key={post.id} />
                            ))}
                    </RelatedPost>
                </Container>
            )}
        </>
    )
}

export default Profile