import React from "react";
import home from "../../images/lens-1418954.jpg";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Landing.css'

export default function LandingPage(){
    return(
        <div className="home-container">
        <Card className="home-content" >
        <Card.Img className="landing-img" variant="top" src={home} alt="Landing"/>
        <Card.Body className="landing-content">
          <Card.Title>10x Team 04</Card.Title>
          <Link to={"new"}><Button variant="primary">Enter</Button></Link>
        </Card.Body>
      </Card>
      </div>

        // <div className="home-content">
        //     <div className="landing-img">
        //         <img src={home} alt="Landing"/>
        //     </div>
        //     <div className="landing-content">
        //         <h3>10x Team 04</h3>
        //         <Link to={"new"}><button>Enter</button></Link>
        //     </div>
        // </div>
    )
}