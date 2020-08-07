import React from 'react'
import './aboutme.css'

function AboutMe() {
    return (
        <div className="aboutme">
            <div className="aboutme__left">
                <div className="aboutme__frame">
                    <div className="aboutme__frameinner">
                        <img alt="aboutme__portrait" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/me.jpeg"/>
                    </div>
                </div>
            </div>
            <div className="aboutme__right">
                <div className="aboutme__header">
                    <div className="aboutme__name">
                        <h1>chris</h1>
                        <h2>Thompson</h2>
                    </div>
                    <h3>Software Engineer | San Francisco Bay Area</h3>
                </div>
                <div className="aboutme__body">
                    I am a Full Stack Software Developer with a passion for understanding the way things work and building and refactoring systems. For the last two years I have been using JavaScript, Node, React, Redux, jQuerry, Postgresql, CSS and HTML5 to build my own webapps and have recently sharpened my skills at App Academy, learning Ruby on Rails, and the MERN stack. I’m thrilled to be writing to apply for the Software Engineer  position at Frisbie Inc and apply my skill-set at a company that values being on the cutting edge of technology.
                </div>
                <div className="aboutme__footer">
                    <div>Resume...</div>
                    <div>Contact Me...</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
