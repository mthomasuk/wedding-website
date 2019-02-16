import React, { Component } from "react";
import { withRouter } from "react-router";

import Header from "../../components/header";

import "./Dinner.css";

const API_ROOT = "http://localhost:7778";
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

class Dinner extends Component {
    state = {
        dinnerChoices: [],
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
                    const names = json.map(u => u.name.split(" ")[0]);
                    const dinnerChoices = json.map(u => u.food_choices).filter(Boolean);

                    return this.setState({
                        dinnerChoices,
                        names,
                    });
                });
        }
    }

    render() {
        const { dinnerChoices, names } = this.state;
        console.log({ dinnerChoices, names });
        return (
            <div className="Dinner">
                <Header
                    backgroundColour="rgb(243, 203, 126)"
                    showOurFaces={!isMobile}
                    title="Great! Now, the important bits"
                />
            </div>
        );
    }
}

export default withRouter(Dinner);
