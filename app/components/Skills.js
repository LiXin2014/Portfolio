import React from "react";

export function Skills(props) {
    return (
        <div className="skills card">
            <div className="title">Skills</div>
            <ul>
                {props.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}