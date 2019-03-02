/* eslint-disable react/no-danger */
import React, { Fragment } from "react";

import Menu from "../menu";

import "./Header.css";

const Header = ({
    backgroundColour: backgroundColor,
    showOurFaces,
    title,
}) => {
    const dangerousHTMLWhooSpooky = () => ({ __html: title });
    return (
        <Fragment>
            <Menu />
            <div className="Slash-left" />
            <div className="Slash-right" />
            <header className="Header-header" style={{ backgroundColor }}>
                <h1
                    className="Header-title"
                    dangerouslySetInnerHTML={dangerousHTMLWhooSpooky()}
                />
            </header>
            {showOurFaces && <div className="Header-background" />}
            <div className="Slash-bottom" />
        </Fragment>
    );
};

export default Header;
