import React, { Component } from "react";
import { withRouter } from "react-router";
import { withCookies } from "react-cookie";

import Header from "../../components/header";
import ErrorIndicator from "../../components/error";

import RSVP from "../../components/rsvp";
import UnknownGuest from "../../components/unknown-guest";

import "./Landing.css";

const API_ROOT = "/api";

class Landing extends Component {
    state = {
        errorMessage: null,
        names: [],
        hasDeclined: false,
    };

    componentDidMount() {
        const {
            cookies,
            history: {
                push,
            },
            match: {
                params: { key: pathKey },
            },
        } = this.props;

        const cookieKey = cookies.get("key");

        if (cookieKey && !pathKey) {
            return window.location = (`/${cookieKey}`);
        }

        const key = pathKey || cookieKey;

        if (key) {
            if (!cookieKey) {
                cookies.set("key", key, {
                    path: "/",
                    sameSite: true,
                    secure: true,
                });
            }

            fetch(`${API_ROOT}/guests/${key}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw Error("That code didn't work - try another!");
                })
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
                })
                .catch(err => this.setState({ errorMessage: err.message }));
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
        const { errorMessage, hasDeclined, names } = this.state;
        const haveNames = Boolean(names.length);
        const nameString = haveNames ? names.join(" & ") : "";

        return (
            <div className="Landing">
                <Header
                    backgroundColour="rgb(106, 140, 149)"
                    showOurFaces
                    title={nameString ? `Hi ${nameString}!` : "Hello!"}
                />
                {haveNames ? (
                    <RSVP
                        haveNames={haveNames}
                        hasDeclined={hasDeclined}
                        confirmAttendance={this.confirmAttendance}
                        declineToAttend={this.declineToAttend}
                    />
                ) : (
                    <UnknownGuest />
                )}
                {errorMessage && <ErrorIndicator error={errorMessage} />}
            </div>
        );
    }
}

export default withRouter(withCookies(Landing));
