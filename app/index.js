import React from "react";
import ReactDom from "react-dom";
import './index.css';
import config from './data.json';

import { PersonalCard } from "./components/PersonalCard";
import { Skills } from "./components/Skills";
import { Hobbies } from "./components/Hobbies";
import { Experiences } from "./components/Experiences";
import { Education } from "./components/Education";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PersonalCard {...config.personal} />
                <div className="mainSection">
                    <Skills skills = {config.skills}/>
                    <Hobbies hobbies = {config.hobbies} />
                    <Experiences experiences = {config.experiences}/>
                    <Education education = {config.education} />
                </div>
            </React.Fragment>
        )
    }
}

ReactDom.render(
    <App/>, 
    document.getElementById('app')
);