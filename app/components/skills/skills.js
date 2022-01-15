import React from "react";
import "./skills.css";

export function Skills(props) {
    return (
        <div className="skills card">
            <div className="header">Skills</div>
            <ul>
                {props.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}