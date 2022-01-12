import React from "react";

export function PersonalCard(props) {
    console.log(props)
    return (
            <div className="personal-profile flex-center">
                <img src="https://github.com/LiXin2014.png" />
                <div className="info">
                    <div className="namecontact flex-center">
                        <div className="name-container">
                            <div className="name">{props.name}</div>
                            <div className="title">{props.title}</div>
                        </div>
                        <div className="contact">
                            <div className="email flex-center"><span class="material-icons">
                                email
                                </span>
                                {props.email}</div>
                            <div className="phone flex-center"><span class="material-icons">
                                phone
                                </span>{props.phone}</div>
                        </div>
                    </div>
                    <div className="description">{props.description} </div>
                </div>
            </div>
    )
}