import projects from '../data/projects.json';
import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {

  constructor(){
    super();
    this.state = {
        ps: projects.allProjects
    }
 }
  render() {

    return(
      <div>
          {
          this.state.ps.map( (p) => {

            return <Project   title={ p.title }
                                description= {p.description}
                                imgName= {p.imgName}
                                />
                              })
                              }
      </div>
    )
  }
}

export default Projects;
