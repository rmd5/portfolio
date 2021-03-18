import React, { Component } from 'react';

class PROJECTS_NAV extends Component {
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
        if (this.isInView("TalentEd")) {
            document.getElementById("talented_blob").style.visibility = "visible";
            document.getElementById("bubble_blob").style.visibility = "";
            document.getElementById("maze_blob").style.visibility = "";
        } else {
            document.getElementById("talented_blob").style.visibility = "";

            if (this.isInView("Bubble")) {
                document.getElementById("bubble_blob").style.visibility = "visible";
                document.getElementById("maze_blob").style.visibility = "";
            } else {
                document.getElementById("bubble_blob").style.visibility = "";

                if (this.isInView("Maze")) {
                    document.getElementById("maze_blob").style.visibility = "visible";
                } else {
                    document.getElementById("maze_blob").style.visibility = "";
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
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
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
        return (
            <div className="project_nav nav">
                <div className="content">
                    <div className="scroll_monitor" style={{backgroundImage: "linear-gradient(#464646 0%, #464646 "+percent+", #ECA420 "+percent+", #ECA420 100%)"}}></div>

                    <div className="item_point" onClick={() => this.nav("biography")}>
                        <div className="blob" id="talented_blob"></div>
                        <div className="item">
                            TalentEd
                        </div>
                    </div>

                    <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("experience")}>
                        <div className="blob" id="bubble_blob"></div>
                        <div className="item">
                            Bubble
                        </div>
                    </div>

                    <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("education")}>
                        <div className="blob" id="maze_blob"></div>
                        <div className="item">
                            Maze
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById("main").removeEventListener("scroll", () => this.checkId());
    }
}

export default PROJECTS_NAV;