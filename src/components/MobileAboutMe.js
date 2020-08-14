import React from 'react'
import './mobileaboutme.css'

function MobileAboutMe({ open }) {
    return (
        <div className={open === "About Me" ? "mobileaboutme open" : "mobileaboutme"} >
           <div className={open === "About Me" ? "mobileaboutme__child fade" : "mobileaboutme__child"}>
                <div className="mobileaboutme__imgcontainer">
                    <img src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/me.jpeg" alt="" />
                </div>
                <div className="mobileaboutme__namecontainer">
                    <h2>chris</h2>
                    <h1>Thompson</h1>
                </div>
                <div className="mobileaboutme__body">
                    I am a Full Stack Software Developer with a passion for understanding the way things work and building and refactoring systems. For the last two years I have been using JavaScript, Node, React, Redux, jQuerry, Postgresql, CSS and HTML5 to build my own webapps and have recently sharpened my skills at App Academy, learning Ruby on Rails, and the MERN stack. I’m thrilled to be writing to apply for the Software Engineer  position at Frisbie Inc and apply my skill-set at a company that values being on the cutting edge of technology.
                </div>
           </div>
        </div>
    )
}

export default MobileAboutMe;
