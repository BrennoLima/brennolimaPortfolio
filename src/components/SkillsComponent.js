import React, {Component} from 'react';
import {SKILLS} from '../shared/skills'
import { CardBody, Card } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

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
                <ScrollAnimation offset="10" animateIn="animate__backInUp" duration="1" animateOnce >
                    <Card key={skill.id}>
                        <CardBody>
                            {skill.name}
                        </CardBody>
                    </Card>
                </ScrollAnimation>
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