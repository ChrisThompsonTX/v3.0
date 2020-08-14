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
                    skadjflkasjdklfjaskfjlksadj fkljsalkdf klsajdflka jsdklfj aslkflkasd flka sfjlksd flkjalks fkjas flkaslf jljalkf 
                </div>
           </div>
        </div>
    )
}

export default MobileAboutMe;
