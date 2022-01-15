import React from "react";
import "./education.css";

export function Education(props) {
    return (
        <div className="educations card">
            <div className="header">Education</div>
            {props.education.map((eachEducation) => (
                <div className="education">
                    <img src={eachEducation.logo} />
                    <div className="info">
                        <div className="name">{eachEducation.school}</div>
                        <div className="description">{eachEducation.description}</div>
                        <div className="time">{eachEducation.time}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}