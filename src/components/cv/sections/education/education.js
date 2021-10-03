import React, { Component } from 'react';
import hw from "../../../../img/hw.png";
import alford from "../../../../img/alford.png";
import EXPERIENCE_SECTION from '../experience/section';

class EDUCATION extends Component {
    render() {
        return (
            <div className="section" id="education" style={{ opacity: "0", transform: "translate(0, 100px)" }}>
                <div className="heading">
                    Education
                    <div className="dropper"></div>
                </div>

                <EXPERIENCE_SECTION img={hw} title="Computer Science at Heriot Watt" date="2017 - 2021" text="I graduated from Heriot Watt University with a Bachelor of Science in Computer Science with Honours of the First Class Award. For my dissertation project, in which I created a web app to help the sharing of knowledge within the Rohingya communities of Malaysia, I earned the Cooper-Walker Engineering Ltd Prize." />
                <hr />
                <EXPERIENCE_SECTION img={hw} title="Actuarial Science at Heriot Watt" date="2016 - 2017" text="Actuarial Science first year, studying statistics, economics, finance and calculus." />
                <hr />
                <EXPERIENCE_SECTION img={alford} title="Alford Academy" date="2010 - 2016" text="Grade A in Higher Mathematics, Graphic Communication, Physics, Chemistry, Biology, Music, and Nat5 English." />
            </div>
        );
    }
}

export default EDUCATION;