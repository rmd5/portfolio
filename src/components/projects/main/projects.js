import React, { Component } from 'react';
import HEADER from '../../header/header';
import * as Icon from "react-bootstrap-icons";
import history from '../../../history';
import PROJECT_SECTION from '../section/section';

import talented from "../../../img/talented.svg";
import bubble from "../../../img/bubble.png";

class PROJECTS extends Component {
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

                        <PROJECT_SECTION img={bubble} heading="Bubble" date="2019 - 2020" stack={["HTML5", "PHP", "Javascript", "CSS3", "JQuery"]}
                            text={<span>With a team of 6 people in a university project, we created an application that allows for the control of smart devices within the home. 
                                It is possible to set timers, review statistics of the home, and toggle individual devices, whole rooms, or the entire house.</span>}
                            link="http://bubble.rorydobson.com/"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default PROJECTS;