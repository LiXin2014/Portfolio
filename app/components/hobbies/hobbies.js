import React from "react";
import "./hobbies.css";

export function Hobbies(props) {
    return (
        <div className="hobbies card">
            <div className="header">Hobbies</div>

            {props.hobbies.map(hobby => (
                <div className="hobby" key={hobby.name}>
                    <img src={hobby.imgSource} />
                    <div className="name">{hobby.name}</div>
                </div>
            ))}
        </div>
    )
}