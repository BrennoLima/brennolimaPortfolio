import React, {Component} from 'react';
import {SKILLS} from '../shared/skills'
import { CardBody, Card } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Skills extends Component{

    constructor(props){
        super(props);
        this.state={
            skills: SKILLS
        }
        this.RenderSkill = this.RenderSkill.bind(this);
    }

    

    RenderSkill({skillName}){
        return(
            <div className="col-12 col-md-3 mb-1 mt-1"> 
                <ScrollAnimation offset={10} animateIn="animate__fadeInUp" animateOnce >
                    <Card>
                        <CardBody>
                            {skillName}
                        </CardBody>
                    </Card>
                </ScrollAnimation>
            </div>
        );
    }

    render(){

        const skills = this.state.skills.map((skill) => {
            return (
                <this.RenderSkill skillName={skill.name} key={skill.id}/>
            );
        });
        return(
            <div className="section container-fluid skills-container" id="skills">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="black">Skills</h1>
                            <p className="quote">"Man often becomes what he believes himself to be." - <strong>Mahatma Gandhi</strong> </p>
                        </div>
                    </div>
                    <div className="row mt">
                        {skills}
                    </div>
                    <div className="row mt-5"></div>
            </div>
        );
    }
}

export default Skills;