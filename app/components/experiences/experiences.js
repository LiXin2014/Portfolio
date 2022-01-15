import React from "react";
import "./experiences.css";

export function Experiences(props) {
    return (
        <div className="experiences card">
            <div className="header">Experiences</div>

            {props.experiences.map((experience) => (
                <div className="experience">
                    <img src={experience.icon} />
                    <div className="info">
                        <div className="time">{experience.time}</div>
                        <div className="title">{experience.title}</div>
                        <div className="name">{experience.company}</div>
                        <ul className="accomplishments">
                            {experience.accomplishments.map(task => (
                                <li className="task">{task}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}