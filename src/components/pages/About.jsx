import React from 'react'

import book from "../../images/about.png"
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'
import Container from '../UI/Container.styled'
import { motion } from "framer-motion"
import { variants } from '../shared/Variants'

function About() {
    return (
        <Container>
            <AboutMain
                variants={variants}
                initial={"onLoad"}
                animate={"onLoaded"}
            >
                <Section>
                    <Article>
                        <h2>Hi, Thanks for taking time to know about us!</h2>
                        <p>
                            Book'Grid is a platform where young and passionate writers can start to show case their writing skills to the world.

                        </p>

                        <p>
                            It's is aim to remove the limitations from writers who are not able to showcase or rather publish thier books to get to a good audience. With this, interested writers can sign up and take this as a starting point of becoming a better writer.

                        </p>

                        <p>
                            Every Writers will be asign a small admin section where they can manage thier posts (create, update and destroy!)
                        </p>


                        <p>
                            We are open for feedback and innovative ideas to help move this project. do well to contact the developers via email  <a href="mailto:benwedev29@gmail.com"> <FaEnvelope /></a>
                        </p>
                    </Article>
                    <ImagDiv className="image">
                        <img src={book} alt="" />
                    </ImagDiv>
                </Section>
            </AboutMain>
        </Container>
    )
}

export default About

const AboutMain = styled(motion.div)`
    padding-top: 30px;
    margin-top: 60px;
`
const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media(max-width:700px){
    flex-wrap: wrap;
    align-items: center;
    justify-content: center
    }

`

const Article = styled.article`

    width: 100%;
    margin-right: 25px;

    h2{
        font-weight: 400;
        padding-bottom: 20px;

    }

    p{
        padding-bottom: 20px;
        font-size: 18px;
        line-height:1.7em;
    }

    svg{
        color:${({ theme }) => theme.color.red};
        font-size: 20px;
    }

     @media(max-width:700px){
        width: 100%;
        text-align: center;

        h2{
            font-size: 18px;
        }
        p{
            font-size: 16px;
        }
    }
`

const ImagDiv = styled.div`
    width: 80%;
    img{
        width: 100%;
    }

     @media(max-width:700px){
        width: 100%;
    }


`