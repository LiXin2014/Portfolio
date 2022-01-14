import React from "react";
import IUlogo from "../img/IUlogo.jpg";
import BeiJiaologo from "../img/BJlogo.png";

export function Education(props) {
    return (
        <div className="educations card">
            <div className="header">Education</div>
            {props.education.map((eachEducation, index) => (
                <div className="education">
                    <img src={index === 0 ? IUlogo : BeiJiaologo} />
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