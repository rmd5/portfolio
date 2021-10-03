import React, { Component } from 'react';

class INTERESTS extends Component {
    render() {
        return (
            <div className="section" id="interests" style={{ opacity: "0", transform: "translate(0, 100px)" }}>
                <div className="heading">
                    Interests
                    <div className="dropper"></div>
                </div>

                <div className="sub_section">
                    <div className="sub_content" style={{ width: "calc(100% - 20px)" }}>
                        <div className="sub_heading">
                            Voluntary work
                        </div>
                        <div className="date">
                        </div>
                        <div className="text">
                            I taught a primary school football team for a year and a half, earning my 100-hour Saltire award. While in Cambodia, as well as teaching English, I helped construct a new school, and in 2015 I went to Zambia and helped build a house for a local family.
                        </div>
                    </div>
                </div>

                <hr />

                <div className="sub_section">
                    <div className="sub_content" style={{ width: "calc(100% - 20px)" }}>
                        <div className="sub_heading">
                            Sport
                        </div>
                        <div className="date">
                        </div>
                        <div className="text">
                            I enjoy running, tennis and squash. I am a keen snowboarder and have boarded both in Scotland and abroad. I have recently started rock climbing, and generally like to stay fit and healthy.
                        </div>
                    </div>
                </div>

                <hr />

                <div className="sub_section">
                    <div className="sub_content" style={{ width: "calc(100% - 20px)" }}>
                        <div className="sub_heading">
                            Music
                        </div>
                        <div className="date">
                        </div>
                        <div className="text">
                            I play the guitar and the ukulele. I also sing and have performed gigs for events at my previous job and at my secondary school.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default INTERESTS;