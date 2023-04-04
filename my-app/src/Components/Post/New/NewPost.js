import React from "react";
import home from "../../images/lens-1418954.jpg";
import { Link } from "react-router-dom";

export default function NewPost(){
    return(
        <div className="home-content">
            <div className="landing-img">
                <img src={home} alt="Landing"/>
            </div>
            <div className="landing-content">
                <h3>10x Team 04</h3>
                <Link to={"post/all"}><button>Enter</button></Link>
            </div>
        </div>
    )
}