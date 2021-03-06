import React, { Component } from "react";
import { withRouter } from "react-router";

import Header from "../../components/header";
import Button from "../../components/button";
import AllergyInfo from "../../components/allergy";

import "./Allergies.css";

const API_ROOT = "/api";

class Allergies extends Component {
    state = {
        allergies: null,
    };

    onChange = (e) => {
        if (e.target && e.target.value) {
            const { target: { value: allergies } } = e;
            this.setState({
                allergies,
            });
        }
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

    onNext = async () => {
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

        const {
            allergies,
        } = this.state;

        const body = JSON.stringify(allergies);

        await fetch(`${API_ROOT}/guests/${key}/allergy`, {
            body,
            method: "POST",
        }).then((response) => {
            if (response.ok) {
                return push(`/songs/${key}`);
            }
        }).catch(err => console.warn({ err }));
    }

    render() {
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
                        onClick={this.onNext}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Allergies);
