import React from "react";

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