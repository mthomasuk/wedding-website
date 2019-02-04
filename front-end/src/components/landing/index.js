import React, { Component } from "react";
import { withRouter } from "react-router";

import Form from "../form";
import Overlay from "../overlay";
import Particles from "../particles";

import "./Landing.css";

const API_ROOT = "http://localhost:7778";

class Landing extends Component {
    state = {
        hideForm: false,
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
                        hideForm: true,
                    });
                });
        }
    }

    render() {
        const { hideForm, names } = this.state;
        const nameString = names.join(" & ");

        return (
            <div className="Landing">
                <header className="Landing-header">
                    <h1 className="Landing-title">
                        Mark
                        <span className="span-small-amp">&</span>
                        Rhiannon
                    </h1>
                    <h3>Are Getting</h3>
                    <h1>Married</h1>
                </header>
                <div className="Landing-intro">
                    <p className="p-date">
                        7th September
                        <br />
                        2019
                    </p>
                    <p>
                        We&#8217;d love to have you there
                        {`${nameString ? ` ${nameString}` : ""}`}
                        !
                    </p>
                    {!hideForm && (
                        <p>
                            Just enter your postal address below and we&#8217;ll
                            send you an invitation...
                        </p>
                    )}
                </div>
                {!hideForm && <Form />}
                <Overlay hideForm={hideForm} />
                <Particles />
            </div>
        );
    }
}

export default withRouter(Landing);
