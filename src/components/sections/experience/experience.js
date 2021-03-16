import React, { Component } from 'react';
import EXPERIENCE_SECTION from './section';

import free from "../../../img/free.jpeg";
import bright from "../../../img/bright.jpeg";
import hw from "../../../img/hw.png";
import camp from "../../../img/camp.png";
import gravity from "../../../img/gravity.jpeg";
import goodbrands from "../../../img/goodbrands.jpg";
import toggle_accordion from '../../../constants/accordion';

class EXPERIENCE extends Component {
    render() {
        return (
            <div className="section" id="experience">
                <div className="heading">
                    Experience
                </div>
                <div className="dropper"></div>
                <EXPERIENCE_SECTION img={free} title="Full Stack Developer at Free.co.uk" date="2020 - Present" text="I am currently working as a full stack developer for the fintech/proptech B2C startup Free.co.uk. I have been creating dynamic content in React.js and Node.js with the idea of providing a simple, one-stop shop for users trying to sell their own property." />
                <hr />
                <EXPERIENCE_SECTION img={bright} title="Technology Intern at Bright Network" date="2020" text="I completed a virtual internship in technology with Bright Network. It consisted of seminars from leading technology companies, including Google, Amazon and Bloomberg, a real-world project, and the opportunity to network with like-minded people." />
                <hr />
                <EXPERIENCE_SECTION link="https://digitalskillspartnership.scot/digital-skills-partnership-pilot-programme-takes-radical-new-approach-to-delivering-work-ready-tech-talent/" img={hw} title="Project Manager of App Development Team" date="2019" text="Winner of the Scottish Digital Skills Partnership Curriculum Project." />
                <hr />
                <div className="accordion" id="experience_accordion" style={{maxHeight: "0px"}}>
                    <EXPERIENCE_SECTION img={camp} title="Teaching English as a Foreign Language" date="2018" text="Using my Teaching Young Learners training, I taught English at two schools in Cambodia." />
                    <hr />
                    <EXPERIENCE_SECTION img={gravity} title="Marshal at Gravity Trampoline Park" date="2017 - 2020" text="At Gravity my main role was to supervise those using the trampoline park and the rock wall." />
                    <hr />
                    <EXPERIENCE_SECTION img={goodbrands} title="Kitchen Porter at Goodbrand & Ross" date="2012 - 2017" text="As a kitchen porter I would wait on tables, work the tills and restock shelves." />
                    <br/><br/>
                </div>
                <button className="accordion_btn" id="experience_button" onClick={() => toggle_accordion("experience_accordion", "experience_button")}>See more</button>
            </div>
        );
    }
}

export default EXPERIENCE;