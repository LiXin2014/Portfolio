import React from "react";
import "./projects.css";
import "../../index.css";

function ProjectsNav(props) {
    const {projectCategories, selected, onSelectionChanged} = props;
    return (
        <div className="projectsNav card">
            <div className="title">{`Projects (${projectCategories.length})`}</div>
            <div className="projectsCategory">
                {projectCategories.map(category => (
                    <button 
                        className={`${selected === category ? "selected" : ""}` }
                        onClick={() => onSelectionChanged(category)}
                    >{category}</button>
                ))}
            </div>
        </div>
    )
}

function ProjectCard(props) {
    const {name, img, description, demoURL, codeURL, skills} = props;
    return (
        <div className="projectCard card">
            <img src={img} />
            <div className="tags">
                {skills.map(skill => (
                    <span>{`#${skill}`}</span>
                ))}
            </div>
            <div className="name">{name}</div>
            <div className="description">{description}</div>
            <div className="links">
                <a href={demoURL} className="demo" target="_blank">Demo</a>
                <a href={codeURL} className="code" target="_blank">Code</a>
            </div>
        </div>
    )
}

export class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.projects = this.props.projects;
        this.projectCategories = Object.keys(this.projects);
        this.state = {
            selectedCategory: "Responsive"
        }
        this.onCategoryChanged = this.onCategoryChanged.bind(this);
    }

    render() {
        return (
            <div className="projects">
                <ProjectsNav 
                    projectCategories={this.projectCategories} 
                    selected={this.state.selectedCategory} 
                    onSelectionChanged = {this.onCategoryChanged}/>
                <div className="projectCards">
                    {this.projects[this.state.selectedCategory].map(project => (
                        <ProjectCard {...project}/>
                    ))}
                </div>
            </div>)
    }

    onCategoryChanged(newCategory) {
        this.setState({selectedCategory: newCategory});
    }
}

/*NOTE:
 1. It is onclick for original html button click handler, but onClick for React.
 2. To make demo and code buttons to be always placed at bottom, regardless of size of description. 
    https://stackoverflow.com/questions/31000885/align-an-element-to-bottom-with-flexbox
 */