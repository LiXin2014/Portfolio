import React from "react";
import ReactDom from "react-dom";
import './index.css';

import { PersonalCard } from "./components/PersonalCard";
import { Skills } from "./components/Skills";
import { Hobbies } from "./components/Hobbies";
import { Experiences } from "./components/Experiences";
import { Education } from "./components/Education";
import { personal, skills, hobbies, experiences, education, projects } from "./components/data";

class App extends React.Component {
    render() {
        return (
            <React.Fragment >
                <PersonalCard {...personal()}/>
                <div className="mainSection">
                    <Skills skills = {skills()}/>
                    <Hobbies hobbies = {hobbies()}/>
                    <Experiences experiences = {experiences()}/>
                    <Education education = {education()} />
                </div>
            </React.Fragment>
        )
    }
}

ReactDom.render(
    <App/>, 
    document.getElementById('app')
);