import React from 'react';
import CognizantLogo from '../assets/images/cognizant-logo.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

function Experience (props) {
    return(
        <div className="section" id="experience" fluid="true">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="black">Experience</h1>
                    </div>
                </div>
                <ScrollAnimation offset={10} animateIn="animate__fadeInUp" animateOnce >
                    <div className="row mt">
                        <div className="col-12 col-md-3 mb-3">
                            <a href="https://www.cognizant.com/canada"><img src={CognizantLogo} alt="CognizantLogo" className="exp-logo"/></a>
                        </div>
                        <div className="col-12 col-md-9 exp-content">
                            <div className="exp-title">
                                <h3>Junior Programmer Analyst (QA)</h3>
                                <h6>Aug 2019 - Mar 2020</h6>
                            </div>
                            <div className="exp-text">
                                <p>• Review code for accuracy and run tests for quality assurance.</p>
                                <p>• Perform regression, and integration testing to verify software quality.</p>
                                <p>• Analyze customer needs to create and implement appropriate solutions.</p>
                                <p>• Collaborated with developers to identify and fix root-cause bugs.</p>
                                <p>• Troubleshoot, debug, and upgrade existing software to meet client needs.</p>
                                <p>• Develop, organize, and execute test plans and test cases to prevent failure in essential features (Manual and Automated).</p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </ScrollAnimation>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 quote">
                            <p>“You don’t have to see the whole staircase, just take the first step.” – <strong>Martin Luther King, Jr.</strong> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;  