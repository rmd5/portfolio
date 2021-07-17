import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from './settings';

class PROJECT_SECTION extends Component {
    render() {
        return (
            <div className="section" id={this.props.heading}>
                <div className="heading">
                    {this.props.img ? <img className="logo" src={this.props.img} alt="Logo"></img> : null} {this.props.heading}
                </div>
                <div className="dropper_projects"></div>
                <div className="sub_section">
                    <div className="sub_content">
                        <div className="sub_heading">
                            Overview
                        </div>
                        <div className="date">
                            {this.props.date}
                        </div>
                        <div className="text">
                            {this.props.text}
                        </div>
                        <hr />
                        <div className="sub_heading">
                            Stack
                        </div>
                        <div className="date">
                        </div>
                        <div className="text">
                            <ul>
                                {this.props.stack.map(e => {
                                    return <li>{e}</li>;
                                })}
                            </ul>
                        </div>
                        <hr />
                        <div className="text">
                            {this.props.link ?
                                <span>
                                    <br />
                                    View the app <a href={this.props.link} target="_blank" rel="noreferrer">here</a>
                                </span>
                                : null}
                            {this.props.git ?
                                <span>
                                    <br />
                                    View the git <a href={this.props.git} target="_blank" rel="noreferrer">here</a>
                                </span>
                                : null}
                        </div>
                        {this.props.slides ? <div style={{ marginBottom: "30px", marginTop: "20px", textAlign: "center" }}>
                            <Slider className="slideshow" {...settings}>
                                {this.props.slides ? this.props.slides.map(e => {
                                    return <div className="img_wrap"><img src={e} className="project_image" alt="Project" ></img></div>
                                })
                                    : null}
                            </Slider>
                        </div>
                            : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default PROJECT_SECTION;