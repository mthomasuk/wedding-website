import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Header from "../../components/header";

import "./Complete.css";

class Complete extends PureComponent {
    render() {
        const {
            match: {
                params: { key },
            },
        } = this.props;

        return (
            <div className="Complete">
                <Header
                    backgroundColour="rgb(151, 128, 176)"
                    showOurFaces
                    title="That's it!"
                />
                <div className="Complete-contents">
                    <Link to="/directions">Get directions to the venue</Link>
                    <Link to="/hotels">See local hotels</Link>
                    <Link to={`/gifts/${key}`}>Browse the gift list</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Complete);
