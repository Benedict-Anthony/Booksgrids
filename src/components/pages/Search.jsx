import React from 'react'

import { useState } from "react"
import AxiosInstance from '../shared/Axios';
import Spinner from '../shared/Spinner';
import Post from '../Post';
import Alert from '../shared/Alert';
import { variants } from '../shared/Variants';
import Container from '../UI/Container.styled'
import { SectionHome } from '../UI/Home.styled';
import { SearchSection, FormDiv } from '../UI/Search.styled';

function Search() {

    const [searchedTerm, setSearchedTerm] = useState("");
    const [searchResults, setSearchResult] = useState([])
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function getSearchedPost() {
        setIsLoading(true)
        const response = await AxiosInstance.get(`posts/search/${searchedTerm.trim()} /`);

        setSearchResult(response.data.data)

        if (response.data.data.length <= 0) {
            setError(true)
            setMessage("Oops!, Couldn't find Your Book! Consider searching with enough key words")

            setTimeout(() => setError(false), 5000)
        }
        setIsLoading(false)

    }


    function handleSearchPost(e) {
        e.preventDefault()
        if (searchedTerm === "") {
            setError(true)
            setMessage("field cannot be empty for a search!")

            setTimeout(() => setError(false), 3000)
        } else {
            getSearchedPost()
        }

    }
    return (
        <Container>
            <SearchSection
                variants={variants}
                initial={"onXLoad"}
                animate={"onXLoaded"}>
                <FormDiv>
                    {error && <Alert message={message} />}
                    <form onSubmit={handleSearchPost}>
                        <input type="text" placeholder="Search for your favourate book" value={searchedTerm} onChange={(e) => setSearchedTerm(e.target.value)} />
                        <button type="submit">Go</button>
                    </form>
                </FormDiv>

                {isLoading ? <Spinner /> : (
                    <SectionHome
                        variants={variants}
                        initial={"onLoad"}
                        animate={"onLoaded"}>
                        {searchResults.length > 0 && searchResults.map((post) => (
                            <Post post={post} key={post.id} />
                        ))}
                    </SectionHome>
                )}
            </SearchSection>
        </Container>
    )
}

export default Search
