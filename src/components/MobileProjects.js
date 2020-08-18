import React from 'react'
import './mobileprojects.css'
import ProjectItem from './ProjectItem';

function MobileProjects({ open }) {
    return (
        <div className={open === "Projects" ? "mobileprojects open" : "mobileprojects"} >
            <div className={open === "Projects" ? "mobileprojects__child fade" : "mobileprojects__child"}>
                <ProjectItem
                    title="Chicken Tinder"
                    date="3/15 - 6/1"
                    tech="(MongoDB, Javascript, Express, React, Node, Mapbox, Yelp API)"
                    description="A single page app designed for groups to vote on a restaurant for their next gathering based on group location and filters."
                />
                <ProjectItem
                    title="Tappd"
                    date="2/1 - 5/10"
                    tech="(Ruby on Rails, React, Redux, AWS)"
                    description="A social media platform centered around beer utilizing a Ruby on Rails backend and React and Redux frontend."
                />
                <ProjectItem
                    title="Wiki-Clicker"
                    date="4/19 - 5/2"
                    tech="(Javascript, D3, Regex)"
                    description="A game utilizing Javascripts D3 library and Wikipedia API to navigate from one starter page to another in 10 link “clicks”"
                />
                <ProjectItem
                    title="Instagram Clone"
                    date="8/1 - 8/10"
                    tech="(Javascript, React Hooks, Firebase)"
                    description="Full Instagram clone with user auth and backend using Google Firebase"
                />
                <ProjectItem
                    title="Paralax-Scroll"
                    date="6/29 - 7/1"
                    tech="(Javascript, HTML, CSS)"
                    description="A first attempt at building out a Paralax Scroll"
                />
                <ProjectItem
                    title="React Expense Tracker"
                    date="6/25 - 6/27"
                    tech="(React, Hooks, Javascript)"
                    description="React app to keep track of total expenses using React Hooks"
                />
                <ProjectItem
                    title="Amity Lianne"
                    date="6/29 - 7/10"
                    tech="(Javascript, HTML, CSS)"
                    description="A mobile friendly portfolio site made for my moms art for her Birthday"
                />
           </div>
        </div>
    )
}

export default MobileProjects;