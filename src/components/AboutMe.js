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

                </div>
                <div className="aboutme__footer">

                </div>
            </div>
        </div>
    )
}

export default AboutMe;
