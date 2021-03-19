import React, { Component } from 'react';
import HEADER from '../../header/header';
import * as Icon from "react-bootstrap-icons";
import history from '../../../history';
import PROJECT_SECTION from '../section/section';

import talented from "../../../img/talented.svg";
import bubble from "../../../img/bubble.png";
import maze from "../../../img/maze.png";
import PROJECTS_NAV from '../nav/nav';

import maze1 from "../../../img/maze1.png";
import maze2 from "../../../img/maze2.png";
import maze3 from "../../../img/maze3.png";
import maze4 from "../../../img/maze4.png";
import maze5 from "../../../img/maze5.png";

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
                        <PROJECT_SECTION slides={[te1, te2, te3, te4, te5, te6, te7]} img={talented} heading="TalentEd" date="2020 - 2021" stack={["React.js", "SASS", "AWS Amplify", "GraphQL", "DynamoDB", "AWS S3"]}
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

                        <PROJECT_SECTION slides={[bubble1, bubble2, bubble3, bubble4]} img={bubble} git="https://gitlab.com/Mcgregor381/bubble" heading="Bubble" date="2019 - 2020" stack={["HTML5", "PHP", "Javascript", "CSS3", "JQuery"]}
                            text={<span>With a team of 6 people in a university project, we created an application that allows for the control of smart devices within the home.
                                It is possible to set timers, review statistics of the home, and toggle individual devices, whole rooms, or the entire house.</span>}
                            link="http://bubble.rorydobson.com/"
                        />

                        <PROJECT_SECTION slides={[maze1, maze2, maze3, maze4, maze5]} img={maze} git="https://gitlab.com/rmd5/maze" heading="Maze" date="2020" stack={["HTML5", "Javascript", "CSS3"]}
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