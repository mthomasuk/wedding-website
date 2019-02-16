import React, { Component } from "react";
import { withRouter } from "react-router";

import Header from "../../components/header";
import RSVP from "../../components/rsvp";

import "./Landing.css";

const API_ROOT = "http://localhost:7778";

class Landing extends Component {
    state = {
        names: [],
        hasDeclined: false,
    };

    componentDidMount() {
        const {
            history: {
                push,
            },
            match: {
                params: { key },
            },
        } = this.props;

        if (key) {
            fetch(`${API_ROOT}/guests/${key}`)
                .then(response => response.json())
                .then((json) => {
                    const willBeAttending = json.reduce(u => u.confirmed_attendance);
                    const names = json.map(u => u.name.split(" ")[0]);

                    if (willBeAttending === true) {
                        return push(`/dinner/${key}`);
                    }

                    if (willBeAttending === false) {
                        return this.setState({
                            hasDeclined: true,
                            names,
                        });
                    }

                    return this.setState({
                        names,
                    });
                });
        }
    }

    confirmAttendance = () => {
        const {
            history: {
                push,
            },
            match: {
                params: { key },
            },
        } = this.props;

        if (key) {
            fetch(`${API_ROOT}/guests/${key}/confirm`, { method: "POST" })
                .then((response) => {
                    if (response.ok) {
                        return push(`/dinner/${key}`);
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
        const { hasDeclined, names } = this.state;
        const haveNames = Boolean(names.length);
        const nameString = haveNames ? names.join(" & ") : "";

        return (
            <div className="Landing">
                <Header
                    backgroundColour="rgb(106, 140, 149)"
                    showOurFaces
                    title={`Hi${nameString ? ` ${nameString}` : ""}!`}
                />
                <RSVP
                    haveNames={haveNames}
                    hasDeclined={hasDeclined}
                    confirmAttendance={this.confirmAttendance}
                    declineToAttend={this.declineToAttend}
                />
            </div>
        );
    }
}

export default withRouter(Landing);
