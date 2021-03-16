import React, { Component } from 'react';
import hw from "../../../img/hw.png";
import alford from "../../../img/alford.jpeg";
import EXPERIENCE_SECTION from '../experience/section';

class EDUCATION extends Component {
    render() {
        return (
            <div className="section" id="education">
                <div className="heading">
                    Education
                </div>
                <div className="dropper"></div>
                <EXPERIENCE_SECTION img={hw} title="Computer Science at Heriot Watt" date="2017 - 2021" text="Computer Science fourth year, currently studying Big Data, E-Commerce and Machine Learning. For my dissertation, I attempting to increase the employability of Rohingya refugees in Malaysia through the use of a skill sharing web app." />
                <hr />
                <EXPERIENCE_SECTION img={hw} title="Actuarial Science at Heriot Watt" date="2016 - 2017" text="Actuarial Science first year, studying statistics, economics, finance and calculus." />
                <hr />
                <EXPERIENCE_SECTION img={alford} title="Alford Academy" date="2010 - 2016" text="Grade A in Higher Mathematics, Graphic Communication, Physics, Chemistry, Biology, Music, and Nat5 English." />
            </div>
        );
    }
}

export default EDUCATION;