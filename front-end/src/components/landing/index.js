import React, { Component } from "react";
import { withRouter } from "react-router";

import Button from "../button";

import "./Landing.css";

const API_ROOT = "http://localhost:7778";

class Landing extends Component {
    state = {
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

    render() {
        const { names } = this.state;
        const nameString = names.length ? names.join(" & ") : "";

        return (
            <div className="Landing">
                <div className="Slash-left" />
                <div className="Slash-right" />
                <header className="Landing-header">
                    <h1 className="Landing-title">
                        {`Hi${nameString ? ` ${nameString}` : ""}!`}
                    </h1>
                </header>
                <div className="Landing-background" />
                <div className="Slash-bottom" />
                <div className="Landing-content">
                    <h3>We&apos;d love to see you at our wedding</h3>
                    <p>It&apos;s on <b>September 7th</b> at <b>Walthamstow Wetlands</b>.<br />
                    Can you make it?
                    </p>
                    <div className="Button-container">
                        <Button title={"Yes - I'll be there"} />
                        <Button title={"No - I can't make it"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Landing);
