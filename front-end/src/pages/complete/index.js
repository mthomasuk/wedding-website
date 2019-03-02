import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";

import "./Complete.css";

class Complete extends PureComponent {
    render() {
        return (
            <div className="Complete">
                <Header
                    backgroundColour="rgb(151, 128, 176)"
                    showOurFaces
                    title="That's it!"
                />
                <div className="Complete-contents">
                    <Link to="">Get directions to the venue</Link>
                    <Link to="">See local hotels</Link>
                    <Link to="">Browse the gift list</Link>
                </div>
            </div>
        );
    }
}

export default Complete;
