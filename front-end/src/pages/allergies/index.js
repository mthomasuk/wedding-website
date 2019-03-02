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
            ids,
        } = this.state;

        const body = JSON.stringify(encodeURIComponent(allergies));

        await Promise.all(ids.map(id => fetch(`${API_ROOT}/guests/${id}/allergy`, {
            body,
            method: "POST",
        }).then((response) => {
            if (response.ok) {
                return push(`/songs/${key}`);
            }
        }))).catch(err => console.warn({ err }));
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
