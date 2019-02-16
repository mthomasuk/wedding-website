import React, { Component } from "react";
import { withRouter } from "react-router";

import Header from "../../components/header";
import Button from "../../components/button";
import AllergyInfo from "../../components/allergy";

import "./Allergies.css";

const API_ROOT = "http://localhost:7778";

class Allergies extends Component {
    state = {
        allergies: null,
        ids: [],
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
                .then(json => this.setState({
                    ids: json.map(u => u.id),
                }));
        }
    }

    onChange = (e) => {
        console.log(e.target.value);
    }

    onBack = () => {
        const {
            history: {
                push,
            },
            match: {
                params: {
                    key,
                },
            },
        } = this.props;

        return push(`/dinner/${key}`);
    }

    render() {
        const { ids } = this.state;
        console.log({ ids });

        return (
            <div className="Allergies">
                <Header
                    backgroundColour="rgb(242, 120, 121)"
                    showOurFaces
                    title="Thanks, we're hungry now"
                />
                <AllergyInfo onChange={this.onChange} />
                <div className="Button-container">
                    <Button
                        title="← Back"
                        onClick={this.onBack}
                    />
                    <Button
                        title="Next →"
                        onClick={() => {}}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Allergies);
