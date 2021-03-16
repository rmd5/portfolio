import React, { Component } from 'react';
import TECHNICAL_SECTION from './section';

class TECHNICAL extends Component {
    render() {
        return (
            <div className="section" id="technical">
                <div className="heading">
                    Technical skills
                </div>
                <div className="dropper"></div>
                <div className="sub_section">
                    <div className="sub_content" style={{width: "calc(100% - 20px)"}}>
                        <div className="sub_heading">
                            Languages
                        </div>
                        <div className="date">
                            Ratings relative to my own knowledge
                        </div>
                        <TECHNICAL_SECTION skill="Javascript" rating={5} />
                        <TECHNICAL_SECTION skill="Java" rating={3} />
                        <TECHNICAL_SECTION skill="PHP" rating={3} />
                        <TECHNICAL_SECTION skill="SQL" rating={4} />
                        <TECHNICAL_SECTION skill="C" rating={2} />
                        <TECHNICAL_SECTION skill="Python" rating={1} />
                    </div>
                </div>
                <hr />
                <div className="sub_section">
                    <div className="sub_content" style={{width: "calc(100% - 20px)"}}>
                        <div className="sub_heading">
                            Frameworks
                        </div>
                        <div className="date">
                            Ratings relative to my own knowledge
                        </div>
                        <TECHNICAL_SECTION skill="React.js" rating={5} />
                        <TECHNICAL_SECTION skill="Node" rating={3} />
                        <TECHNICAL_SECTION skill="Express.js" rating={2} />
                    </div>
                </div>
                <hr />
                <div className="sub_section">
                    <div className="sub_content" style={{width: "calc(100% - 20px)"}}>
                        <div className="sub_heading">
                            Technologies
                        </div>
                        <div className="date">
                            Ratings relative to my own knowledge
                        </div>
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