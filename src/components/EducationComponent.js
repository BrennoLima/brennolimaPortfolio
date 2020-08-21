import React from 'react';
import { Media } from 'reactstrap';
import SenecaLogo from '../assets/images/seneca-logo.png';
import UNBLogo from '../assets/images/unb-logo.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

function Education(props) {
    return(
        <div className="section" id="education">
           <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Education</h1>
                    </div>
                </div>
                <div className="row row-content">
                        <div className="col-12">
                            <ScrollAnimation offset={10} animateIn="animate__backInUp" animateOnce >
                                <Media>
                                    <Media left href="https://www.senecacollege.ca/home.html">
                                        <Media object src={SenecaLogo} alt="Seneca College logo"/>
                                    </Media>
                                    <Media body>
                                        <Media heading className="ml-3">Seneca College</Media>
                                        <p className="ml-3">Toronto, Ontario.</p>
                                        <p className="ml-3">Computer Programmer, 2017-2019.</p>
                                        <p className="ml-3"><strong>Honor graduation.</strong></p>
                                    </Media>
                                </Media>
                                <hr/>
                            </ScrollAnimation>
                        </div>
                        <div className="col-12">
                            <ScrollAnimation offset={10} animateIn="animate__backInUp" animateOnce >
                                <Media>
                                    <Media left href="https://www.unb.br/">
                                        <Media object src={UNBLogo} alt="Seneca College logo"/>
                                    </Media>
                                    <Media body>
                                        <Media heading className="ml-3">University of Brasilia</Media>
                                        <p className="ml-3">Brasilia, Brazil.</p>
                                        <p className="ml-3">Computer Science, 2014-2017.</p>
                                    </Media>
                                </Media>
                            </ScrollAnimation>
                        </div>
                </div>    
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 quote" id="quote1">
                            <p>“Anyone who has never made a mistake has never tried anything new.” – <strong>Albert Einstein</strong>  </p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
} 

export default Education;