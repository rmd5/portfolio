import React, { Component } from 'react';

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
                        <br />
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
                    </div>
                </div>
            </div>
        );
    }
}

export default PROJECT_SECTION;