import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function Footer(props){

    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-left align-items-center">
                    <div className="col-12 col-md-3 mt-2">
                        <ScrollAnimation offset={10} animateIn="animate__fadeInLeft" animateOnce >
                            <h3 id="contact">Contact me</h3>
                        </ScrollAnimation>
                    </div>
                    <div className="col-12 col-md-3 mt-2">
                        <ScrollAnimation offset={10} animateIn="animate__fadeInLeft" animateOnce >
                            <a className="fa fa-linkedin" id="icon-linkedin" href="https://www.linkedin.com/in/brennocesarlima/"> </a>{'  '}/brennolima
                        </ScrollAnimation>
                        
                    </div>
                    <div className="col-12 col-md-3 mt-2">
                        <ScrollAnimation offset={10} animateIn="animate__fadeInLeft" animateOnce >
                            <a className="fa fa-envelope fa-lg" id="icon-mail" href="mailto:brennocesar@live.com"> </a> {'  '}brennocesar@live.com
                        </ScrollAnimation>
                    </div>
                    <div className="col-12 col-md-3 mt-2">
                        <ScrollAnimation offset={10} animateIn="animate__fadeInLeft" animateOnce >
                            <a className="fa fa-github fa-lg" id="icon-github" href="https://github.com/BrennoLima"> </a> {'  '}/brennolima
                        </ScrollAnimation>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Footer;
