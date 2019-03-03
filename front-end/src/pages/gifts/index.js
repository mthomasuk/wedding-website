import React, { Component } from "react";
import { withRouter } from "react-router";

import Header from "../../components/header";
import GiftsList from "../../components/gift";
import GiftInfo from "../../components/gift/GiftInfo";

import "./Gifts.css";

class Gifts extends Component {
    render() {
        return (
            <div className="Gifts">
                <Header
                    backgroundColour="rgb(197, 38, 76)"
                    title="Gift List 🇯🇵"
                />
                <GiftInfo />
                <GiftsList />
            </div>
        );
    }
}

export default withRouter(Gifts);
