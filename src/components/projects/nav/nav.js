import React, { Component } from 'react';
var scrollIntoView = require('scroll-into-view');

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
        let arr = ["eldenring", "yeahsure", "hop", "talented", "this", "bubble", "maze"].reverse()
        for(let i = 0; i < arr.length; i++) {
            if(this.isInView(arr[i])) {
                document.getElementById(arr[i] + "_blob").style.visibility = "visible";
                arr.filter(e => e !== arr[i]).forEach(e => {
                    document.getElementById(e + "_blob").style.visibility = "";
                })
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
            <div className="project_nav nav">
                <div className="content">
                    <div className="scroll_monitor" style={{ backgroundImage: "linear-gradient(rgba(" + grey + ", 1) 0%, rgba(" + grey + ", 1) " + percent + ", rgba(" + orange + ", 1) " + percent + ", rgba(" + orange + ", 1) 100%)" }}></div>

                    <div className="item_point" onClick={() => this.nav("eldenring")}>
                        <div className="blob" id="eldenring_blob"></div>
                        <div className="item">
                            Elden Ring
                        </div>
                    </div>

                    <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("yeahsure")}>
                        <div className="blob" id="yeahsure_blob"></div>
                        <div className="item">
                            Yeah, sure!
                        </div>
                    </div>

                    <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("hop")}>
                        <div className="blob" id="hop_blob"></div>
                        <div className="item">
                            Hour of Power
                        </div>
                    </div>

                    <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("talented")}>
                        <div className="blob" id="talented_blob"></div>
                        <div className="item">
                            TalentEd
                        </div>
                    </div>

                    {/* <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("Strathdon.net")}>
                        <div className="blob" id="tennis_blob"></div>
                        <div className="item">
                            Strathdon.net
                        </div>
                    </div> */}

                    <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("this")}>
                        <div className="blob" id="this_blob"></div>
                        <div className="item">
                            This website
                        </div>
                    </div>

                    <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("bubble")}>
                        <div className="blob" id="bubble_blob"></div>
                        <div className="item">
                            Bubble
                        </div>
                    </div>

                    <div className="connect"></div>

                    <div className="item_point" onClick={() => this.nav("maze")}>
                        <div className="blob" id="maze_blob"></div>
                        <div className="item">
                            Maze
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

export default PROJECTS_NAV;