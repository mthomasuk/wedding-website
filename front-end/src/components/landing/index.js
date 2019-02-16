import React, { Component } from "react";
import { withRouter } from "react-router";

import Header from "../header";
import Button from "../button";

import "./Landing.css";

const API_ROOT = "http://localhost:7778";

class Landing extends Component {
    state = {
        hasConfirmed: false,
        hasDeclined: false,
        names: [],
    };

    componentDidMount() {
        const {
            match: {
                params: { key },
            },
        } = this.props;

        if (key) {
            fetch(`${API_ROOT}/guests/${key}`)
                .then(response => response.json())
                .then((json) => {
                    this.setState({
                        names: json.map(u => u.name.split(" ")[0]),
                    });
                });
        }
    }

    confirmAttendance = () => {
        const {
            match: {
                params: { key },
            },
        } = this.props;

        if (key) {
            fetch(`${API_ROOT}/guests/${key}/confirm`, { method: "POST" })
                .then((response) => {
                    if (response.ok) {
                        this.setState({
                            hasConfirmed: true,
                        });
                    }
                });
        }
    }

    declineToAttend = () => {
        const {
            match: {
                params: { key },
            },
        } = this.props;

        if (key) {
            fetch(`${API_ROOT}/guests/${key}/decline`, { method: "POST" })
                .then((response) => {
                    if (response.ok) {
                        this.setState({
                            hasDeclined: true,
                        });
                    }
                });
        }
    }

    render() {
        const { hasConfirmed, hasDeclined, names } = this.state;
        const haveNames = Boolean(names.length);
        const nameString = haveNames ? names.join(" & ") : "";

        const confirmed = hasConfirmed || hasDeclined;

        return (
            <div className="Landing">
                <Header
                    nameString={nameString}
                    backgroundColour="rgb(106, 140, 149)"
                />
                {haveNames && !confirmed && (
                    <div className="Landing-content">
                        <h3>We&apos;d love to see you at our wedding</h3>
                        <p>It&apos;s on <b>September 7th</b> at <b>Walthamstow Wetlands</b>.<br />
                    Can you make it?
                        </p>
                        <div className="Button-container">
                            <Button
                                title={"Yes - I'll be there"}
                                onClick={this.confirmAttendance}
                            />
                            <Button
                                title={"No - I can't make it"}
                                onClick={this.declineToAttend}
                            />
                        </div>
                    </div>
                )}
                {haveNames && confirmed && (
                    <div className="Landing-content">
                        <p>Sorry to hear that! If anything changes, send us an email at&nbsp;
                            <a href="mailto:rhiannon.f.jones@gmail.com">rhiannon.f.jones@gmail</a>
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(Landing);
