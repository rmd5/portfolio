import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from './settings';

class PROJECT_SECTION extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: <Slider className="slideshow" {...settings} slidesToShow={this.find()}>
                {this.props.slides ? this.props.slides.map(e => {
                    return <div className="img_wrap"><img src={e} className="project_image" alt="Project Image" ></img></div>
                })
                    : null}
            </Slider>
        };
    }

    componentDidMount() {
        window.addEventListener("resize", () => {
            this.setState({
                show: <Slider className="slideshow" {...settings} slidesToShow={this.find()}>
                    {this.props.slides ? this.props.slides.map(e => {
                        return <div className="img_wrap"><img src={e} className="project_image" alt="Project Image" ></img></div>
                    })
                        : null}
                </Slider>
            });
        });
    }

    find() {
        let slides = 2;
        if(window.innerWidth < 760) {
            slides = 1;
        }
        return slides;
    }

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
                        <div style={{ marginBottom: "30px", marginTop: "20px", textAlign: "center" }}>
                            {this.state.show}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        window.removeEventListener("resize", () => {});
    }
}

export default PROJECT_SECTION;