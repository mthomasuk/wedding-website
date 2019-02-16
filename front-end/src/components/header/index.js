import React, { Fragment } from "react";

import Menu from "../menu";

import "./Header.css";

const Header = ({
    backgroundColour: backgroundColor,
    nameString,
}) => (
    <Fragment>
        <Menu />
        <div className="Slash-left" />
        <div className="Slash-right" />
        <header className="Header-header" style={{ backgroundColor }}>
            <h1 className="Header-title">
                {`Hi${nameString ? ` ${nameString}` : ""}!`}
            </h1>
        </header>
        <div className="Header-background" />
        <div className="Slash-bottom" />
    </Fragment>
);

export default Header;