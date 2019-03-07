import React, { Component } from "react";
import { withRouter } from "react-router";

import Header from "../../components/header";
import GiftsList from "../../components/gift";
import GiftInfo from "../../components/gift/GiftInfo";

import "./Gifts.css";

const API_ROOT = "/api";

class Gifts extends Component {
    state = {
        gifts: [],
    }

    componentDidMount() {
        fetch(`${API_ROOT}/gifts`)
            .then(response => response.json())
            .then(gifts => this.setState({
                gifts,
            }));
    }

    render() {
        const { gifts } = this.state;
        return (
            <div className="Gifts">
                <Header
                    backgroundColour="rgb(197, 38, 76)"
                    title="Gift List 🇯🇵"
                />
                <GiftInfo />
                {gifts.length ? <GiftsList gifts={gifts} /> : null}
            </div>
        );
    }
}

export default withRouter(Gifts);
