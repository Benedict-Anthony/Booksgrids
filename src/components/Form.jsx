import React from 'react'
import Container from './UI/Container.styled';
import { Main, FormForm, Div, Button } from './UI/Form.styled';
import PropTypes from "prop-types"
import { variants } from './shared/Variants';

function Form({ formText, children, buttonText, image, handleSubmit }) {
    return (
        <Container>
            <Main
                variants={variants}
                initial={"onXLoad"}
                animate={"onXLoaded"}>

                <Div >
                    <img src={image} alt="" />
                </Div>
                <FormForm action="" onSubmit={handleSubmit}>
                    <h3>{formText}</h3>
                    {children}
                    <div>
                        <Button type="submit">{buttonText}</Button>
                    </div>
                </FormForm>
            </Main>
        </Container>
    )
}

Form.defaultProps = {
    formText: "Enter details in the form fields",
    buttonText: "Submit"
}
Form.propTypes = {
    formText: PropTypes.string.isRequired,
    children: PropTypes.node,
    buttonText: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
}
export default Form