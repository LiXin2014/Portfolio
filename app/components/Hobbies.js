import React from "react";

export function Hobbies(props) {
    return (
        <div className="hobbies card">
            <div className="header">Hobbies</div>

            {props.hobbies.map(hobby => (
                <div className="hobby">
                    <img src={hobby.imgSource} />
                    <div className="name">{hobby.name}</div>
                </div>
            ))}
        </div>
    )
}