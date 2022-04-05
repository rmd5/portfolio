import React, { Component } from 'react';
import HEADER from '../../header/header';
import * as Icon from "react-bootstrap-icons";
import history from '../../../history';
import PROJECT_SECTION from '../section/section';

import talented from "../../../img/talented.svg";
import bubble from "../../../img/bubble.png";
import maze from "../../../img/maze.png";
import profile from "../../../img/profile_round.png";
import ball from "../../../img/ball.png"

import PROJECTS_NAV from '../nav/nav';

import maze1 from "../../../img/maze1.png";
import maze2 from "../../../img/maze2.png";
import maze3 from "../../../img/maze3.png";
import maze4 from "../../../img/maze4.png";
import maze5 from "../../../img/maze5.png";

import tennis1 from "../../../img/tennis1.png"
import tennis2 from "../../../img/tennis2.png"
import tennis3 from "../../../img/tennis3.png"

import bubble1 from "../../../img/bubble1.png";
import bubble2 from "../../../img/bubble2.png";
import bubble3 from "../../../img/bubble3.png";
import bubble4 from "../../../img/bubble4.png";

import te1 from "../../../img/te1.png";
import te2 from "../../../img/te2.png";
import te3 from "../../../img/te3.png";
import te4 from "../../../img/te4.png";
import te5 from "../../../img/te5.png";
import te6 from "../../../img/te6.png";
import te7 from "../../../img/te7.png";
import Background from '../../parallax/background';
import BackgroundMobile from '../../parallax/background_mobile';
import openMenu from '../../menu/open_menu';

import ys1 from "../../../img/ys1.jpg";
import ys2 from "../../../img/ys2.jpg";
import ys3 from "../../../img/ys3.jpg";
import ys4 from "../../../img/ys4.jpg";
import ys5 from "../../../img/ys5.jpg";
import lemon from "../../../img/lemon.svg";

import hop1 from "../../../img/hop1.jpg";
import hop2 from "../../../img/hop2.jpg";
import hop3 from "../../../img/hop3.jpg";
import hop4 from "../../../img/hop4.jpg";
import hop5 from "../../../img/hop5.jpg";
import hop6 from "../../../img/hop6.jpg";
import hop from "../../../img/hourofpower.png";

class PROJECTS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: false
        };
    }

    componentDidMount() {
        document.getElementById("main").addEventListener("scroll", () => this.scrolled());
    }

    scrolled() {
        let y = document.getElementById("main").scrollTop;
        let top = false;
        if (y > 300) { top = true }
        this.setState({
            top: top
        });
    }

    change() {
        document.getElementById("fade").style.opacity = "0";
        setTimeout(function () {
            history.push("/cv");
        }, 400);
    }

    render() {
        return (
            <div className="main" id="main" onClick={() => openMenu("close")}>
                <div className="content">
                    <div style={{ position: "relative" }}>
                        <HEADER />
                    </div>

                    <div id="projects">
                        <Background />
                        <BackgroundMobile />
                        <div id="fade">
                            <PROJECT_SECTION slides={[ys1, ys2, ys3, ys4, ys5]} img={lemon} heading="Yeah, sure!" date="2021" stack={["Liquid", "Shopify", "CSS", "Javascript"]}
                                text={<span>
                                    Yeahsure is a website designed and created to sell the fresh lemonade sold by Max McCann
                                    of <a href="https://mealswithmax.com" target="_blank" rel="noreferrer">MealsWithMax</a> in partnership
                                    with <a href="https://www.linkedin.com/in/ray5d/" target="_blank" rel="noreferrer">Ray Rafiq</a>. The lemonade comes in three different
                                    flavours; original lemonade, mint lemonade and honey lemonade, and they all look absolutely delicious (my totally unbiased opinion).
                                    <br /><br />
                                    I created the website on Shopify, a site that handles all of the eCommerce side of the site, using their
                                    own modelling language, Liquid.
                                </span>}
                                link="https://yeahsure.co.uk"
                            />

                            <PROJECT_SECTION slides={[hop1, hop2, hop3, hop4, hop5, hop6]} img={hop} heading="Hour of Power" date="2021" stack={["React Native", "Expo", "Node.js", "Express.js", "SASS"]}
                                text={<span>
                                    In collaboration with <a href="https://www.linkedin.com/in/ray5d/" target="_blank" rel="noreferrer">Ray Rafiq</a>, I have created a management app
                                    to help Ray manage his large network. It allows for the uploading of contacts, either from the mobile contacts, through a csv or directly through
                                    the app, it stores each contact, along with information on how you know them and how often you'd like to contact them, and it will then remind you
                                    to contact each person when they are due to be contacted.
                                    <br /><br />
                                    I have utilised techniques that allow for the management of large amounts of data (Ray knows a lot of people... a lot), such as personalised
                                    sorting algorithms, custom lazy loading methods and both dynamic searching and filtering.
                                    <br /><br />
                                    I'm also very proud of the login process. A unique ID is assigned to each device, and then each device needs to be linked
                                    to a phone number. This way, multiple devices can be added to the same account easily, and automatically allows for single sign-on
                                    by verifying the unique ID stored in the device.
                                    <br /><br />
                                    This app is still in development, and will be on both the play store and the app store soon.
                                </span>}
                                link="https://expo.dev/@rmd5/hour_of_power"
                            />

                            <PROJECT_SECTION slides={[te1, te2, te3, te4, te5, te6, te7]} img={talented} heading="TalentEd" date="2020 - 2021" stack={["React.js", "SASS", "AWS Amplify", "GraphQL", "DynamoDB", "AWS S3"]}
                                text={<span>TalentEd is a web app that looked at improving the employability of Rohingya refugees in Malaysia.
                                    In collaboration with the UNHCR and Aspire Penang, the app was developed with a focus on providing refugees
                                    with a platform on which they can trade and learn skills. This project was completed for my final year dissertation
                                    and earned me the Cooper-Walker Engineering Ltd Prize for outstanding project work.
                                    <br /><br />
                                    Particular care was taken over the language translations and accessibility for those unable to read. Translations for text
                                    was provided in five different languages, and there was a text-to-speech feature for all written text throughout the app.
                                    Help videos were included to guide users through the different features of the app, and iconography was implemented to help with user recall.
                                </span>}
                                link="https://talent-ed.app"
                            />

                            <PROJECT_SECTION slides={[tennis1, tennis2, tennis3]} img={ball} heading="Strathdon.net" date="2021" stack={["React.js", "SASS"]}
                                text={<span>
                                    For my community, I created a website for the local tennis court. It consists of a booking process, contacts, location and access to the community donation page.
                                    Growing up, I used the tennis court a lot, and I wanted to make it easier to use so that it could get the customer engagement it deserved (it's a really awesome tennis court!).
                                </span>}
                                link="https://strathdontennis.pages.dev"
                            />

                            <PROJECT_SECTION img={profile} git="https://gitlab.com/rmd5/portfolio" heading="This website" date="2020 - 2021" stack={["React.js", "SASS", "AWS Amplify"]}
                                text={<span>
                                    This website was created to reflect my experience and achievements. It was created with React.js and hosted on AWS Amplify.
                                    The front page was animated so that it would seemlessly blend into either the "CV" page or the "Projects" page when the buttons were clicked.
                                    The background was given a type of parallax behaviour, allowing it to scroll at a slower rate than the rest of the site, creating a shifting pattern.
                                    The navigation bar at the side of the page displays where the user is on the page, what sections they can navigate to, and allows them to scroll back to the top.
                                </span>}
                            />

                            <PROJECT_SECTION slides={[bubble1, bubble2, bubble3, bubble4]} img={bubble} git="https://gitlab.com/Mcgregor381/bubble" heading="Bubble" date="2019 - 2020" stack={["HTML5", "PHP", "Javascript", "CSS3", "JQuery"]}
                                text={<span>With a team of 6 people in a university project, we created an application that allows for the control of smart devices within the home.
                                    It is possible to set timers, review statistics of the home, and toggle individual devices, whole rooms, or the entire house.
                                    Unfortunately, the server for this site has been taken down and the database deleted, so it isn't possible to access the app anymore.</span>}
                            // link="http://bubble.rorydobson.com/"
                            />

                            <PROJECT_SECTION slides={[maze1, maze2, maze3, maze4, maze5]} img={maze} git="https://gitlab.com/rmd5/maze" heading="Maze" date="2020" stack={["HTML5", "Javascript", "CSS3"]}
                                text={<span>Small maze game I created as a hobby. The aim is to get through the maze using a series of buttons. Unfortunately this project iss no longer live, but I intend to get it up and running again soon.</span>}
                            // link="https://rorydobson.com/maze"
                            />

                            <PROJECTS_NAV />

                            <div onClick={() => document.getElementById("main").scrollTo({ top: 0, behavior: 'smooth' })} style={{ visibility: this.state.top ? "visible" : "hidden" }} className="scroll_button">
                                <div className="tooltip">Scroll to top</div>
                                <div className="up">
                                    <Icon.ArrowUpShort />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PROJECTS;