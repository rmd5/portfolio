import React, { Component } from 'react';
import RATING from './rating';

class TECHNICAL_SECTION extends Component {
    render() {
        return (
            <div>
                <div className="skill">
                    {this.props.skill}
                </div>
                <RATING rating={this.props.rating} />
            </div>
        );
    }
}

export default TECHNICAL_SECTION;