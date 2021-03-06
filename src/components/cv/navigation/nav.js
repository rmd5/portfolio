import React, { Component } from 'react';
var scrollIntoView = require('scroll-into-view');

class NAV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: "0%",
            top_button: false
        }
    }

    componentDidMount() {
        this.checkId();
        document.getElementById("main").addEventListener("scroll", () => {
            this.getY();
            this.checkId();
        });
    }

    checkId() {
        if (this.isInView("biography")) {
            document.getElementById("biography_blob").style.visibility = "visible";
            document.getElementById("experience_blob").style.visibility = "";
            document.getElementById("education_blob").style.visibility = "";
            document.getElementById("technical_blob").style.visibility = "";
            document.getElementById("skills_blob").style.visibility = "";
            document.getElementById("interests_blob").style.visibility = "";
        } else {
            document.getElementById("biography_blob").style.visibility = "";

            if (this.isInView("experience")) {
                document.getElementById("experience_blob").style.visibility = "visible";
                document.getElementById("education_blob").style.visibility = "";
                document.getElementById("technical_blob").style.visibility = "";
                document.getElementById("skills_blob").style.visibility = "";
                document.getElementById("interests_blob").style.visibility = "";
            } else {
                document.getElementById("experience_blob").style.visibility = "";

                if (this.isInView("education")) {
                    document.getElementById("education_blob").style.visibility = "visible";
                    document.getElementById("technical_blob").style.visibility = "";
                    document.getElementById("skills_blob").style.visibility = "";
                    document.getElementById("interests_blob").style.visibility = "";
                } else {
                    document.getElementById("education_blob").style.visibility = "";

                    if (this.isInView("technical")) {
                        document.getElementById("technical_blob").style.visibility = "visible";
                        document.getElementById("skills_blob").style.visibility = "";
                        document.getElementById("interests_blob").style.visibility = "";
                    } else {
                        document.getElementById("technical_blob").style.visibility = "";

                        if (this.isInView("skills")) {
                            document.getElementById("skills_blob").style.visibility = "visible";
                            document.getElementById("interests_blob").style.visibility = "";
                        } else {
                            document.getElementById("skills_blob").style.visibility = "";

                            if (this.isInView("interests")) {
                                document.getElementById("interests_blob").style.visibility = "visible";
                            } else {
                                document.getElementById("interests_blob").style.visibility = "";
                            }
                        }
                    }
                }
            }
        }
    }

    isInView(id) {
        let offset = document.getElementById(id).scrollHeight - 200;
        const top = document.getElementById(id).getBoundingClientRect().top;
        return (top + offset) >= 0 && (top) <= window.innerHeight;
    }

    nav(id) {
        scrollIntoView(document.getElementById(id), { align: { top: 0 } })
    }

    getY() {
        let y = document.getElementById("main").scrollTop;
        let height = document.getElementById("main").clientHeight;
        let whole = document.getElementById("main").scrollHeight - height;
        let percent = 100 / whole * y;

        this.setState({
            scroll: percent + "%"
        });
    }

    render() {
        let percent = this.state.scroll;
        let root = window.getComputedStyle(document.documentElement)
        let orange = root.getPropertyValue('--orange');
        let grey = root.getPropertyValue('--grey')
        return (
            <div className="nav">
                <div className="content">
                    <div className="scroll_monitor" style={{ backgroundImage: "linear-gradient(rgba(" + grey + ", 1) 0%, rgba(" + grey + ", 1) " + percent + ", rgba(" + orange + ", 1) " + percent + ", rgba(" + orange + ", 1) 100%)" }}></div>

                    <div className="item_point" onClick={() => this.nav("biography")}>
                        <div className="blob" id="biography_blob"></div>
                        <div className="item">
                            About me
                        </div>
                    </div>

                    <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("experience")}>
                        <div className="blob" id="experience_blob"></div>
                        <div className="item">
                            Experience
                        </div>
                    </div>

                    <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("education")}>
                        <div className="blob" id="education_blob"></div>
                        <div className="item">
                            Education
                        </div>
                    </div>

                    <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("technical")}>
                        <div className="blob" id="technical_blob"></div>
                        <div className="item">
                            Technical skills
                        </div>
                    </div>

                    <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("skills")}>
                        <div className="blob" id="skills_blob"></div>
                        <div className="item">
                            Other skills
                        </div>
                    </div>

                    <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("interests")}>
                        <div className="blob" id="interests_blob"></div>
                        <div className="item">
                            Interests
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // componentWillUnmount() {
    //     document.getElementById("main").removeEventListener("scroll", () => this.checkId());
    // }
}

export default NAV;