import React, { Component } from 'react';
import HEADER from '../../header/header';
import * as Icon from "react-bootstrap-icons";
import history from '../../../history';
import PROJECT_SECTION from '../section/section';

import talented from "../../../img/talented.svg";
import bubble from "../../../img/bubble.png";
import maze from "../../../img/maze.png";
import PROJECTS_NAV from '../nav/nav';

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
        if (y > 300) {
            top = true;
        }
        this.setState({
            top: top
        });
    }

    change() {
        document.getElementById("projects").style.opacity = "0";
        setTimeout(function () {
            history.push("/cv");
        }, 400);
    }

    render() {
        return (
            <div className="main" id="main">
                <div className="content">
                    <div style={{ position: "relative" }}>
                        <HEADER />
                        <div className="link_to_other">
                            Check out my <a onClick={() => this.change("/cv")}>CV<div className="arrow"><Icon.ArrowRightShort /></div></a>
                        </div>
                    </div>

                    <div id="projects">
                        <PROJECT_SECTION img={talented} heading="TalentEd" date="2020 - 2021" stack={["React.js", "SASS", "AWS Amplify"]}
                            text={<span>TalentEd is a web app that looked at improving the employability of Rohingya refugees in Malaysia.
                            In collaboration with the UNHCR and Aspire Penang, the app was developed with a focus on providing refugees
                            with a platform on which they can trade and learn skills. This project was completed for my final year dissertation.
                                <br /><br />
                                Particular care was taken over the language translations and accessibility for those unable to read. Translations for text
                                was provided in four different languages, and there was a text-to-speech feature for all written text throughout the app.
                                Help videos were included to guide users through the different features of the app, and iconography was implemented to help with user recall.
                                </span>}
                            link="https://talent-ed.app"
                        />

                        <PROJECT_SECTION img={bubble} git="https://gitlab.com/Mcgregor381/bubble" heading="Bubble" date="2019 - 2020" stack={["HTML5", "PHP", "Javascript", "CSS3", "JQuery"]}
                            text={<span>With a team of 6 people in a university project, we created an application that allows for the control of smart devices within the home.
                                It is possible to set timers, review statistics of the home, and toggle individual devices, whole rooms, or the entire house.</span>}
                            link="http://bubble.rorydobson.com/"
                        />

                        <PROJECT_SECTION img={maze} git="https://gitlab.com/rmd5/maze" heading="Maze" date="2020" stack={["HTML5", "Javascript", "CSS3"]}
                            text={<span>Small maze game I created as a hobby. The aim is to get through the maze using a series of buttons.</span>}
                            link="https://rorydobson.com/maze"
                        />

                        <PROJECTS_NAV />

                        <div onClick={() => document.getElementById("main").scrollTo({ top: 0, behavior: 'smooth' })} style={{ visibility: this.state.top ? "visible" : "hidden" }} className="scroll_button">
                            <div className="tooltip">Scroll to top</div>
                            <i class="fas fa-chevron-up"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PROJECTS;