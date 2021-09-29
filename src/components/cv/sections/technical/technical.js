import React, { Component } from 'react';
import toggle_accordion from '../../../../constants/accordion';
import TECHNICAL_SECTION from './section';

class TECHNICAL extends Component {
    render() {
        return (
            <div className="section" id="technical" style={{ opacity: "0", transition: "0.4s all ease-in-out", transform: "translate(0, 100px)" }}>
                <div className="heading">
                    Technical skills
                </div>
                <div className="dropper"></div>
                <div className="sub_section">
                    <div className="sub_content" style={{ width: "calc(100% - 20px)" }}>
                        <div className="sub_heading">
                            Languages
                        </div>
                        <div className="date">
                            Ratings relative to my own knowledge
                        </div>
                        <TECHNICAL_SECTION skill="Javascript" rating={5} />
                        <TECHNICAL_SECTION skill="CSS3" rating={5} />
                        <TECHNICAL_SECTION skill="HTML5" rating={5} />
                        <TECHNICAL_SECTION skill="Java" rating={3} />
                        <TECHNICAL_SECTION skill="PHP" rating={3} />
                        <TECHNICAL_SECTION skill="SQL" rating={4} />
                        <div className="accordion" id="language_accordion" style={{ maxHeight: "0px" }}>
                            <TECHNICAL_SECTION skill="MQL" rating={4} />
                            <TECHNICAL_SECTION skill="C" rating={2} />
                            <TECHNICAL_SECTION skill="C++" rating={1} />
                            <TECHNICAL_SECTION skill="Python" rating={1} />
                            <TECHNICAL_SECTION skill="PDDL" rating={3} />
                            <TECHNICAL_SECTION skill="SML" rating={3} />
                            <TECHNICAL_SECTION skill="Prolog" rating={2} />
                        </div>
                        <button style={{ margin: "0px", width: "100%", marginTop: "10px" }} className="accordion_btn" id="language_button" onClick={() => toggle_accordion("language_accordion", "language_button")}>See more</button>
                    </div>
                </div>
                <hr />
                <div className="sub_section">
                    <div className="sub_content" style={{ width: "calc(100% - 20px)" }}>
                        <div className="sub_heading">
                            Frameworks
                        </div>
                        <div className="date">
                            Ratings relative to my own knowledge
                        </div>
                        <TECHNICAL_SECTION skill="React.js" rating={5} />
                        <TECHNICAL_SECTION skill="SASS / SCSS" rating={5} />
                        <TECHNICAL_SECTION skill="Node.js" rating={3} />
                        <TECHNICAL_SECTION skill="Express.js" rating={3} />
                    </div>
                </div>
                <hr />
                <div className="sub_section">
                    <div className="sub_content" style={{ width: "calc(100% - 20px)" }}>
                        <div className="sub_heading">
                            Technologies &amp; Libraries
                        </div>
                        <div className="date">
                            Ratings relative to my own knowledge
                        </div>
                        <TECHNICAL_SECTION skill="MongoDB" rating={4} />
                        <TECHNICAL_SECTION skill="React Hooks" rating={4} />
                        <TECHNICAL_SECTION skill="Redux" rating={2} />
                        <TECHNICAL_SECTION skill="AWS Amplify" rating={4} />
                        <TECHNICAL_SECTION skill="Git" rating={5} />
                        <TECHNICAL_SECTION skill="Stripe" rating={2} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TECHNICAL;