import React from 'react'
import './projectcontent.css'

export default function ProjectContent({
                                    title, 
                                    tech, 
                                    date, 
                                    description, 
                                    icon, 
                                    gif, 
                                    keyfeatures, 
                                    challenges,
                                    github,
                                    livelink
                                    }) {
    return (
        <div className="projectcontent">
            <div className="projectcontent__header">
                <div className="projectcontent__headerleft">
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                    <h3>{tech}</h3>
                </div>
                <div className="projectcontent__headerright">
                    <div className="projectcontent__headerrighttop">
                        <h3>{date}</h3>
                        <div className="projectcontent__iconcontainer">
                            <img src={icon} alt="projecticon" />
                        </div>
                    </div>
                    <div className="projectcontent__headerrightbottom">
                        <div className="projectcontent__button"><a className="projectcontent__buttonlink" href={github}>GITHUB</a></div>
                        <div className="projectcontent__button"><a className="projectcontent__buttonlink" href={livelink}>DEMO</a></div>
                    </div>
                </div>
            </div>
            <div className="projectcontent__body">
                <video className="projectcontent_gifcontainer" muted autoPlay loop>
                    <source src={gif} type="video/mp4"/>
                </video>
                {keyfeatures ? 
                    <div className="projectcontent__keyfeatures">
                        <h2>Key Features</h2>
                        <p>{keyfeatures.map((feature) => (
                            <div className="projectcontent__feature">
                                {feature}
                            </div>
                        ))}</p>
                    </div>
                :
                null
                }
                {challenges ? 
                    <div className="projectcontent__challenges">
                        <h2>Challenges</h2>
                        <ul>{challenges.map((challenge) => (
                            <li className="projectcontent_challenge">
                                {challenge}
                            </li>
                        ))}</ul>
                    </div>
                :
                null
                }
            </div>
        </div>
    )
}
