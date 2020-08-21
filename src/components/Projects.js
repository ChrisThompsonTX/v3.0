import React from 'react'
import './projects.css';
import ProjectItem from './ProjectItem';
import ProjectContent from './ProjectContent';

class Projects extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.setOpen = this.setOpen.bind(this)
    }

    setOpen(page) {
        this.setState({open: page})
    }

    render() {
        return (
            <div className="projects">
                <div className="projects__left">
                    <ProjectItem 
                        title="Chicken Tinder"
                        date="3/15 - 6/1"
                        tech="(MongoDB, Javascript, Express, React, Node, Mapbox, Yelp API)"
                        description="A single page app designed for groups to vote on a restaurant for their next gathering based on group location and filters."
                        setOpen={this.setOpen}
                    />
                    <ProjectItem 
                        title="Tappd"
                        date="2/1 - 5/10"
                        tech="(Ruby on Rails, React, Redux, AWS)"
                        description="A social media platform centered around beer utilizing a Ruby on Rails backend and React and Redux frontend."
                        setOpen={this.setOpen}
                    />
                    <ProjectItem 
                        title="Wiki-Clicker"
                        date="4/19 - 5/2"
                        tech="(Javascript, D3, Regex)"
                        description="A game utilizing Javascripts D3 library and Wikipedia API to navigate from one starter page to another in 10 link “clicks”"
                        setOpen={() => this.setOpen("Wiki-Clicker")}
                    />
                    <ProjectItem 
                        title="Instagram Clone"
                        date="8/1 - 8/10"
                        tech="(Javascript, React Hooks, Firebase)"
                        description="Full Instagram clone with user auth and backend using Google Firebase"
                        setOpen={() => this.setOpen("Instagram Clone")}
                    />
                    <ProjectItem 
                        title="Paralax-Scroll"
                        date="6/29 - 7/1"
                        tech="(Javascript, HTML, CSS)"
                        description="A first attempt at building out a Paralax Scroll"
                        setOpen={() => this.setOpen("Paralax Scroll")}
                    />
                    <ProjectItem 
                        title="React Expense Tracker"
                        date="6/25 - 6/27"
                        tech="(React, Hooks, Javascript)"
                        description="React app to keep track of total expenses using React Hooks"
                        setOpen={() => this.setOpen("React Expense Tracker")}
                    />
                    <ProjectItem 
                        title="Amity Lianne"
                        date="6/29 - 7/10"
                        tech="(Javascript, HTML, CSS)"
                        description="A mobile friendly portfolio site made for my moms art for her Birthday"
                        setOpen={() => this.setOpen("Amity Lianne")}
                    />
                </div>
                <div className="projects__right">
                    {this.state.open === "Chicken Tinder" ? 
                        <ProjectContent
                            title="Chicken Tinder"
                            date="3/15 - 6/1"
                            tech="(MongoDB, Javascript, Express, React, Node, Mapbox, Yelp API)"
                            description="A single page app designed for groups to vote on a restaurant for their next gathering based on group location and filters."
                            icon=""
                            gif="https://tappd-seeds.s3-us-west-1.amazonaws.com/CTDemo.gif"
                            keyfeatures={["Chicken Tinder allows users to create a group and select a location in San Francisco. The group creator can then search for other users to add to their group, as well as determine any initial food restrictions they would like their group to be aware of, whether the bill would be split among all members, and the price range they would like to filter by. Data from restaurants local to the area is then added to the group. The creator will also set a deadline for the members to vote.",
                                        "All group members can then log in to vote on each one of the pre-selected venues. Users can access any group they have been added to to either vote (if the group is ongoing) or view results (if the group deadline has passed).",
                                        "Once all the group members have voted or the deadline is reached, the top 3 venues are displayed, based on number of votes."
                                        ]}
                            challenges={["Responsive CSS design", "mplementing search functionality with auto-complete", "Integrating the data with Mapbox API", "Building demo functionalities with a random user and a random group", "Designing user-friendly UI/UX using modals and a carousel", "Creating interactivities with hover effects"]}
                            github=""
                            livelink=""
                        />
                    : null }
                    {/* {this.state.open === "Tappd" ? <iframe title="Tappd" src="https://tappd-ct.herokuapp.com/#/" height="100%" width="100%" frameBorder="0" ></iframe> : null }
                    {this.state.open === "Wiki-Clicker" ? <iframe title="Wiki-Clicker" src="http://christhompson.online/WikiClicker/" height="100%" width="100%" frameBorder="0" ></iframe> : null }
                    {this.state.open === "Instagram Clone" ? <iframe title="Instagram Clone" src="https://reactinstagram-c443e.web.app/" height="100%" width="100%" frameBorder="0" ></iframe> : null }
                    {this.state.open === "Paralax-Scroll" ? <iframe title="Paralax-Scroll" src="http://christhompson.online/Paralax-Scroll/" height="100%" width="100%" frameBorder="0" ></iframe> : null }
                    {this.state.open === "React Expense Tracker" ? <iframe title="React Expense Tracker" src="https://lit-atoll-81167.herokuapp.com/#/" height="100%" width="100%" frameBorder="0" ></iframe> : null }
                    {this.state.open === "Amity Lianne" ? <iframe title="Amity Lianne" src="https://www.amitylianne.com/" height="100%" width="100%" frameBorder="0" ></iframe> : null } */}
                </div>
            </div>
        )
    }
}

export default Projects;
