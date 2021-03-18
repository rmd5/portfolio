import React, { Component } from 'react';
import HEADER from '../../header/header';
import * as Icon from "react-bootstrap-icons";
import history from '../../../history';

class PROJECTS extends Component {
    render() {
        return (
            <div className="main" id="main">
                <div className="content">
                    <div style={{ position: "relative" }}>
                        <HEADER />
                        <div className="link_to_other">
                            Check out my <a onClick={() => history.push("/cv")}>CV<div className="arrow"><Icon.ArrowRightShort /></div></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PROJECTS;