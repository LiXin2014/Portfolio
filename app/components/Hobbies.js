import React from "react";
import bakingImg from "../img/baking.jpg";
import hikingImg from "../img/hiking.jpg";
import readingImg from "../img/reading.jpg";

export function Hobbies(props) {
    return (
        <div className="hobbies card">
            <div className="title">Hobbies</div>
            <div className="hobby">
                <img src={bakingImg} />
                <div className="name">Baking</div>
            </div>
            <div className="hobby">
                <img src={hikingImg} />
                <div className="name">Hiking</div>
            </div>
            <div className="hobby">
                <img src={readingImg} />
                <div className="name">Reading</div>
            </div>
        </div>
    )
}