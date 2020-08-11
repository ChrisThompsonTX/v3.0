import React, { useState } from 'react'
import './projects.css';
import ProjectItem from './ProjectItem';
// import ProjectContent from './ProjectContent';

function Projects() {
    const [open, setOpen] = useState(false);

    return (
        <div className="projects">
            <div className="projects__left">
                <ProjectItem 
                    title="Chicken Tinder"
                    date="3/15 - 6/1"
                    tech="(MongoDB, Javascript, Express, React, Node, Mapbox, Yelp API)"
                    description="A single page app designed for groups to vote on a restaurant for their next gathering based on group location and filters."
                    onClick={() => setOpen("Chicken Tinder")}
                />
                <ProjectItem 
                    title="Tappd"
                    date="2/1 - 5/10"
                    tech="(Ruby on Rails, React, Redux, AWS)"
                    description="A social media platform centered around beer utilizing a Ruby on Rails backend and React and Redux frontend."
                    onClick={() => setOpen("Tappd")}
                />
                <ProjectItem 
                    title="Wiki-Clicker"
                    date="4/19 - 5/2"
                    tech="(Javascript, D3, Regex)"
                    description="A game utilizing Javascripts D3 library and Wikipedia API to navigate from one starter page to another in 10 link “clicks”"
                    onClick={() => setOpen("Wiki-Clicker")}
                />
                <ProjectItem 
                    title="Instagram Clone"
                    date="8/1 - 8/10"
                    tech="(Javascript, React Hooks, Firebase)"
                    description="Full Instagram clone with user auth and backend using Google Firebase"
                    onClick={() => setOpen("Instagram Clone")}
                />
                <ProjectItem 
                    title="Paralax-Scroll"
                    date="6/29 - 7/1"
                    tech="(Javascript, HTML, CSS)"
                    description="A first attempt at building out a Paralax Scroll"
                    onClick={() => setOpen("Paralax Scroll")}
                />
                <ProjectItem 
                    title="React Expense Tracker"
                    date="6/25 - 6/27"
                    tech="(React, Hooks, Javascript)"
                    description="React app to keep track of total expenses using React Hooks"
                    onClick={() => setOpen("React Expense Tracker")}
                />
            </div>
            <div className="projects__right">
                {open === "Chicken Tinder" ?
                    <iframe src="https://lit-atoll-81167.herokuapp.com/#/" height="100%" width="100%" frameBorder="0" ></iframe>
                :null
                }
            </div>
        </div>
    )
}

export default Projects;
