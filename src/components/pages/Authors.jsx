import React from 'react';
import AxiosInstance from '../shared/Axios';
import { useState, useEffect } from "react";
import Author from '../SingleAuthor';
import Spinner from '../shared/Spinner';

import Container from '../UI/Container.styled';
import { StyledAuthor } from '../UI/Author.styled';
import { variants } from '../shared/Variants';
function Authors() {

    const [authors, setAuthors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const url = "authors/";

    const getAuthors = async () => {
        setIsLoading(true)
        const response = await AxiosInstance.get(url)
        setAuthors(response.data.data.filter((auth) => auth.profile !== null))
        setIsLoading(false)
    }

    useEffect(() => {
        getAuthors()
    }, [])

    return (
        <>
            {isLoading ? <Spinner /> : (
                <Container>
                    <StyledAuthor
                        variants={variants}
                        initial={"XLoad"}
                        animate={"XLoaded"}
                        transition={"timing"}>
                        {authors.length > 0 && authors.map((author) => (
                            <Author key={author.id} author={author} />
                        ))}
                    </StyledAuthor>
                </Container>
            )}
        </>
    )
}

export default Authors