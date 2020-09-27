import React from 'react'
import './projects.css';
import ProjectItem from './ProjectItem';
import ProjectContent from './ProjectContent';

class Projects extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            open: "Chicken Tinder"
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
                    <div className="projects__leftheader" >
                        <h4>Recent Projects</h4>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div className="projects__leftbody">
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
                            setOpen={() => this.setOpen("Paralax-Scroll")}
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
                        <ProjectItem 
                            title="Amazon Clone"
                            date="9/01 - 9/17"
                            tech="(React, Node, Stripe, React Hooks, Firebase, Express, Javascript, HTML, CSS)"
                            description="A responsive clone of Amazon complete with User Auth and payment handler"
                            setOpen={() => this.setOpen("Amazon Clone")}
                        />
                        <ProjectItem 
                            title="Edible School Yard Email Templates"
                            date="9/06 - 9/10"
                            tech="(HTML, CSS)"
                            description="Email Templates made for the gardening non-profit Edible School Yard"
                            setOpen={() => this.setOpen("ESY")}
                        />
                    </div>
                </div>
                <div className="projects__right">
                    {this.state.open === "Chicken Tinder" ? 
                        <ProjectContent
                            title="Chicken Tinder"
                            date="3/15 - 6/1"
                            tech="(MongoDB, Javascript, Express, React, Node, Mapbox, Yelp API)"
                            description="A single page app designed for groups to vote on a restaurant for their next gathering based on group location and filters."
                            icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/ChickenIcon.png"
                            gif="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/CT_trimmed.mp4.mp4"
                            keyfeatures={["Chicken Tinder allows users to create a group and select a location in San Francisco. The group creator can then search for other users to add to their group, as well as determine any initial food restrictions they would like their group to be aware of, whether the bill would be split among all members, and the price range they would like to filter by. Data from restaurants local to the area is then added to the group. The creator will also set a deadline for the members to vote.",
                                        "All group members can then log in to vote on each one of the pre-selected venues. Users can access any group they have been added to to either vote (if the group is ongoing) or view results (if the group deadline has passed).",
                                        "Once all the group members have voted or the deadline is reached, the top 3 venues are displayed, based on number of votes."
                                        ]}
                            challenges={["Responsive CSS design", "Implementing search functionality with auto-complete", "Integrating the data with Mapbox API", "Building demo functionalities with a random user and a random group", "Designing user-friendly UI/UX using modals and a carousel", "Creating interactivities with hover effects"]}
                            github="https://github.com/hkryucr/mern-ct"
                            livelink="https://lit-atoll-81167.herokuapp.com/#/"
                        />
                    : null }
                    {this.state.open === "Tappd" ? 
                        <ProjectContent
                            title="Tappd"
                            date="2/1 - 5/10"
                            tech="(Ruby on Rails, React, Redux, AWS, Heroku)"
                            description="A social media platform centered around beer utilizing a Ruby on Rails backend and React and Redux frontend."
                            icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/TappdIcon.png"
                            gif="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/Tappd.mp4"
                            keyfeatures={["Secure User Authorization using BCrypt hashing",
                                            "User auth errors are separated and displayed over the proper field",
                                            "Breweries are displayed in a list as links to a page displaying all their beers"
                                        ]}
                            challenges={["Responsive CSS design", "mplementing search functionality with auto-complete", "Integrating the data with Mapbox API", "Building demo functionalities with a random user and a random group", "Designing user-friendly UI/UX using modals and a carousel", "Creating interactivities with hover effects"]}
                            github="https://github.com/ChrisThompsonTX/Tappd"
                            livelink="https://tappd-ct.herokuapp.com/"
                        />
                    : null }
                    {this.state.open === "Wiki-Clicker" ? 
                        <ProjectContent
                            title="Wiki-Clicker"
                            date="4/19 - 5/2"
                            tech="(Javascript, D3, Regex)"
                            description="A game utilizing Javascripts D3 library and Wikipedia API to navigate from one starter page to another in 10 link “clicks”"
                            icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/WikiIcon.png"
                            gif="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/WikiClicker.mp4"
                            keyfeatures={["Wiki-Clicker is designed as a game using the Wikipedia API to crawl across different pages. After inputting a search, a node is spawned with connections to all the links its given page. By pulling a node you will search that link and will spawn more nodes. The goal of the game is to get from one page to another and bridge the gap",
                            "When a call is put out to the API the resulting definition is displayed on the right. There is also a progress bar along the top that is updated as the API call is sent, recieved, and processed."
                            ]}
                            challenges={["This was my first experience using Javascripts D3.js library and deep diving into a libraries docs", "I learned a great deal about organization and splitting different processes into separate files in the repo", "I also wanted to closely mimic the Wikipedia design in its simplicity and funcionality"]}
                            github="https://github.com/ChrisThompsonTX/WikiClicker"
                            livelink="http://christhompson.online/WikiClicker/"
                        />
                    : null }
                    {this.state.open === "Instagram Clone" ? 
                        <ProjectContent
                            title="Instagram Clone"
                            date="8/1 - 8/10"
                            tech="(Javascript, React, React Hooks, Firebase)"
                            description="Full Instagram clone with user auth and backend using Google Firebase"
                            icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/InstaIcon.png"
                            gif="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/Instagram.mp4"
                            keyfeatures={["Complete with User Auth and updating live with React Hooks suppored by a firebase backend, this Instagram Clone allows users to post and comment while being updated in real time.",
                            ]}
                            challenges={["This was my first experience using Google Firebase which makes user auth and database setup streamlined and quick", "This was also my first expereince deep diving into using React Hooks which I employed to update incoming posts as they are posted", "I used the setState hook to keep upload info locally to be deployed to firebase upon submit"]}
                            github="https://github.com/ChrisThompsonTX/react-instagram"
                            livelink="https://reactinstagram-c443e.web.app/"
                        />
                    : null }
                    {this.state.open === "Paralax-Scroll" ? 
                        <ProjectContent
                            title="Paralax-Scroll"
                            date="6/29 - 7/1"
                            tech="(Javascript, HTML, CSS)"
                            description="A first attempt at building out a Paralax Scroll"
                            icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/ParalxIcon.png"
                            gif="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/ParalaxScroll.mp4"
                            keyfeatures={["Paralax Scroll is a demo of the use of event listeners and ids to create simple CSS animations on scroll","When the user scrolls, separate listeners on different image layers scroll in different directions and speeds set in index.html"
                            ]}
                            challenges={["Paralax Scroll is a practice for a website made for my Motehrs birthday in order to create an interactive scroll header"]}
                            github="https://github.com/ChrisThompsonTX/Paralax-Scroll"
                            livelink="http://christhompson.online/Paralax-Scroll/"
                        />
                    : null }
                    {this.state.open === "React Expense Tracker" ? 
                        <ProjectContent
                            title="React Expense Tracker"
                            date="6/25 - 6/27"
                            tech="(React, Hooks, Javascript)"
                            description="React app to keep track of total expenses using React Hooks"
                            icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/ExpenseIcon.png"
                            gif="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/ExpenseTracker.mp4"
                            keyfeatures={["React Expense Tracker allows users to locally add expenses and income variables to a list",
                                "By threading user input data to separate React Components, I was able to update multiple components at once while simultaneously performing simple math and css reactions to inputs."
                            ]}
                            challenges={["This expense tracker was a practice in system design, I needed to map out which components needed access to state and parse it out accordingly", "Depending on the users input I applied different sets of CSS to elements that could be created or deleted instantly"]}
                            github="https://github.com/ChrisThompsonTX/React-Expense-Tracker"
                            livelink="http://christhompson.online/React-Expense-Tracker/"
                        />
                    : null }
                    {this.state.open === "Amity Lianne" ? 
                        <ProjectContent
                            title="Amity Lianne"
                            date="6/29 - 7/10"
                            tech="(Javascript, HTML, CSS)"
                            description="A mobile friendly portfolio site made for my moms art for her Birthday"
                            icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/AmityIcon.png"
                            gif="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/AmityLianne.mp4"
                            keyfeatures={["Amity Lianne is an ongoing project and birthday portfolio project for my Mom.",
                                "Currently it displays recent artwork and breif descriptions of the Task that was assigned for each.",
                            ]}
                            challenges={["Utilizing a Paralax Scroll on the header was an initial challenge and will soon be updated", 
                                "Future updates will change this into a full react app allowing direct posting of new art.", 
                                "One challenge to be updated is implementing a masonry gallery at the bottom, currently flexbox is used to distinguish individual rows, with the implementation of some javascript I will add a more dynamic layout to the artwork", 
                                ]}
                            github="https://github.com/ChrisThompsonTX/AmityLianne.com"
                            livelink="https://www.amitylianne.com/"
                        />
                    : null }
                    {this.state.open === "ESY" ? 
                        <ProjectContent
                            title="Edible School Yard Email Templates"
                            date="9/06 - 9/10"
                            tech="(HTML, CSS)"
                            description="Email Templates made for the gardening non-profit Edible School Yard"
                            icon=""
                            gif=""
                            keyfeatures={["These templates were made working closely with a design team.", "I was given a folder of assets and an overview design and did my best to translate that to an e-mail template form ready for Mailchimp"
                            ]}
                            challenges={["E-mail technology is far behind browser technology, after doing a lot of research I came to find email templating only supports html and css", "The subset of CSS supported is limited and has to be inline, most spacing does not work as well as nested divs", "Most of the HTML in these templates had to be set up as a sequence of tables with Mailchimp templating tags and blank table rows for spacing", "Wrapping images became a particular challenge as they required being split up and put into table cells", "One final challenge was that each email client will digest the HTML differently, I had to add code to support the majority of clients"
                            ]}
                            github="https://github.com/ChrisThompsonTX/EdibleSchoolyardNewsletter"
                            livelink="http://christhompson.online/ESY/"
                        />
                    : null }
                    {this.state.open === "Amazon Clone" ? 
                        <ProjectContent
                            title="Amazon Clone"
                            date="9/01 - 9/17"
                            tech="(React, Node, Stripe, React Hooks, Firebase, Express, Javascript, HTML, CSS)"
                            description="A responsive clone of Amazon complete with User Auth and payment handler"
                            icon=""
                            gif=""
                            keyfeatures={[
                            ]}
                            challenges={[
                            ]}
                            github=""
                            livelink=""
                        />
                    : null }
                </div>
            </div>
        )
    }
}

export default Projects;
