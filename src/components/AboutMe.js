import React from 'react'
import './aboutme.css'

function AboutMe() {
    return (
        <div className="aboutme">
            <div className="aboutme__left">
                <div className="aboutme_frame">
                    <img alt="aboutme__portrait" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/me.jpeg"/>
                </div>
            </div>
            <div className="aboutme__info"></div>
        </div>
    )
}

export default AboutMe;
