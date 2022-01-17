import React from "react";
import "./projects.css";

function ProjectsNav(props) {
    console.log(props)
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
            </div>)
    }

    onCategoryChanged(newCategory) {
        this.setState({selectedCategory: newCategory});
    }
}

/*NOTE:
 1. It is onclick for original html button click handler, but onClick for React.
 */