import React from "react";
import microsoftIcon from "../img/microsoft.png";
import wolframIcon from "../img/wolfram.png";

export function Experiences(props) {
    return (
        <div className="experiences card">
            <div className="title">Experiences</div>

            {props.experiences.map((experience, index) => (
                <div className="experience">
                    <img src={index === 0 ? microsoftIcon : wolframIcon} />
                    <div className="info">
                        <div className="time">{experience.time}</div>
                        <div className="title">{experience.title}</div>
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