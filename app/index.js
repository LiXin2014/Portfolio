import React from "react";
import ReactDom from "react-dom";
import './index.css';

import { PersonalCard } from "./components/personalCard/personalCard";
import { Skills } from "./components/skills/skills";
import { Hobbies } from "./components/hobbies/hobbies";
import { Experiences } from "./components/experiences/experiences";
import { Education } from "./components/education/education";
import { personal, skills, hobbies, experiences, education, projects } from "./components/data";
import { Projects } from "./components/projects/projects";

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
                <Projects projects = {projects()}/>
            </React.Fragment>
        )
    }
}

ReactDom.render(
    <App/>, 
    document.getElementById('app')
);