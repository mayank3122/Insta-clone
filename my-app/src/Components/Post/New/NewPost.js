import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../../images/icon.jpg";
import Camera from '../../../images/camera.jpg';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/esm/Button";
import './NewPost.css'


export default function NewPost() {
    function CaptureForm(){
        
    }
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="Logo" />
                        <span>Insta Clone</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <img src={Camera} alt="Camera" />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="new-post-container">
                <Card>
                    <Card.Body>
                        <Form onSubmit={CaptureForm}>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="file" />
                            </Form.Group>
                            <InputGroup className="mb-3">
                                <Form.Control aria-label="First name" placeholder="Enter Name" />
                                <Form.Control aria-label="Last name" placeholder="Enter Location" />
                            </InputGroup>
                            <Form.Control size="lg" type="text" placeholder="Description" />
                            <div className="btn" >
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}