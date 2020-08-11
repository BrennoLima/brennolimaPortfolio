import React, {Component} from 'react';
import {SKILLS} from '../shared/skills'
import { CardBody, Card, CardTitle } from 'reactstrap';

class Skills extends Component{

    constructor(props){
        super(props);
        this.state={
            skills: SKILLS
        }
        this.RenderSkill = this.RenderSkill.bind(this);
    }
    RenderSkill({skill}){
        return(
            <div className="col-12 col-md-3 mb-1 mt-1"> 
                <Card>
                    <CardBody>
                        <CardTitle>{skill.name}</CardTitle>
                    </CardBody>
                </Card>
            </div>
        );
    }

    render(){

        const skills = this.state.skills.map((skill) => {
            return (
                <this.RenderSkill skill={skill}/>
            );
        });
        return(
            <div className="skills" id="skills">
                <div className="container-fluid skills-container">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h1>Skills</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {skills}
                    </div>
                    <div className="row mt-5"></div>
                </div>
            </div>
        );
    }
}

export default Skills;