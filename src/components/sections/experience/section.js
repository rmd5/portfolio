import React, { Component } from 'react';

class EXPERIENCE_SECTION extends Component {
    render() {
        return (
            <div className="sub_section">
                {this.props.img ? <img className="logo" src={this.props.img} alt="Logo"></img> : null}
                <div className="sub_content">
                    <div className="sub_heading">
                        {this.props.title}
                    </div>
                    <div className="date">
                        {this.props.date}
                    </div>
                    <div className="text">
                        {this.props.text}
                        {this.props.link ? 
                            <span>
                                <br/><br/>
                                Find out more about it <a href={this.props.link} target="_blank">here</a>
                            </span>
                        : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default EXPERIENCE_SECTION;