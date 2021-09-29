import React, { Component } from 'react';

class SKILLS extends Component {
    render() {
        return (
            <div className="section" id="skills" style={{ opacity: "0", transition: "0.4s all ease-in-out", transform: "translate(0, 100px)" }}>
                <div className="heading">
                    Other skills
                </div>
                <div className="dropper"></div>

                <div className="sub_section">
                    <div className="sub_content" style={{ width: "calc(100% - 20px)" }}>
                        <div className="sub_heading">
                            Leadership
                        </div>
                        <div className="date">
                        </div>
                        <div className="text">
                            As the project manager of an app development team I gained extensive organisational, planning, decision making and delegation skills. I can work well under pressure and I am good at encouraging a team to meet a deadline.
                        </div>
                    </div>
                </div>

                <hr />

                <div className="sub_section">
                    <div className="sub_content" style={{ width: "calc(100% - 20px)" }}>
                        <div className="sub_heading">
                            Communication
                        </div>
                        <div className="date">
                        </div>
                        <div className="text">
                            I have strong communication skills and I am a good listener. Working in customer service since the age of fourteen has helped me develop excellent verbal skills. Having studied Graphic Communications, I am also proficient in communicating through different mediums. In addition, I learned how to adapt my communication methods during my time spent teaching English in Cambodia, as I had to make myself understood over a wide language barrier.
                        </div>
                    </div>
                </div>

                <hr />

                <div className="sub_section">
                    <div className="sub_content" style={{ width: "calc(100% - 20px)" }}>
                        <div className="sub_heading">
                            Problem solving
                        </div>
                        <div className="date">
                        </div>
                        <div className="text">
                            I have an aptitude for mathematics and logic which has helped to hone my problem-solving skills. This is an important requirement within any project, as it is necessary to have the ability to debug, adapt to changing circumstances or requirements, and learn new techniques quickly. Problem solving has been a major factor while undertaking university projects, including my work on a smart home app, an automated planner in PDDL, and other apps using Agile techniques.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SKILLS;