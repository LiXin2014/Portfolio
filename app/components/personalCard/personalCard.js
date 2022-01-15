import React from "react";
import "./personalCard.css";

export function PersonalCard(props) {
    return (
            <div className="personal-profile flex-center card">
                <img src="https://github.com/LiXin2014.png" />
                <div className="info">
                    <div className="namecontact flex-center">
                        <div className="name-container">
                            <div className="name">{props.name}</div>
                            <div className="title">{props.title}</div>
                        </div>
                        <div className="contact">
                            <div className="email flex-center"><span className="material-icons">
                                email
                                </span>
                                {props.email}</div>
                            <div className="phone flex-center"><span className="material-icons">
                                phone
                                </span>{props.phone}</div>
                        </div>
                    </div>
                    <div className="description">{props.description} </div>
                </div>
            </div>
    )
}