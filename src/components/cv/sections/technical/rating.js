import React, { Component } from 'react';

class RATING extends Component {
    render() {
        return (
            <div className="rating">
                <div className="filler" style={{width: 100 / 5 * this.props.rating + "%"}}></div>
                <div className="rating_text">{this.props.rating} / 5</div>
            </div>
        );
    }
}

export default RATING;