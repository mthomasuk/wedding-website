import React, { Component } from "react";
import { withRouter } from "react-router";

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
            </div>
        );
    }
}

export default withRouter(Landing);
