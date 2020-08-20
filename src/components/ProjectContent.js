import React from 'react'
import './projectcontent.css'

export default function ProjectContent({title, tech, date, description, icon, gif}) {
    return (
        <div className="projectcontent">
            <div className="projectcontent__header">
                <div className="projectcontent__headerleft">
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                    <h3>{tech}</h3>
                </div>
                <div className="projectcontent__headerright">
                    <h3>{date}</h3>
                    <div className="projectcontent__iconcontainer">
                        <img src={icon} alt="projecticon" />
                    </div>
                </div>
            </div>
            <div className="projectcontent__body">
                <div className="projectcontent_gifcontainer">
                    <img src={gif} alt="projectanimation" />
                </div>
                asdklfjalksdjfkljsdfkljaslkdfjklasjfkljasklj klajsdlk fjakls jfkljsajkf hajkhalkjdhjkads fhsahfkjasdfasdk fals jasj f;ja jkfjas jdfja;l jsdlfjajsdkfja slkjkaj;ajf
            </div>
        </div>
    )
}
