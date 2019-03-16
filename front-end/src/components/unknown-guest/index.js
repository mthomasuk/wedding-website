import React, { PureComponent, Fragment } from "react";

import Button from "../button";

import "./UnknownGuest.css";

class UnknownGuest extends PureComponent {
    onKeyDown = (e) => {
        if ((e && e.key && e.key === "Enter") || !e) {
            return this.onRedirect();
        }
    }

    onRedirect = () => {
        const { value } = this.node;
        return value ? window.location = `/${value}` : null;
    }

    render() {
        return (
            <Fragment>
                <div className="UnknownGuest-content">
                    <p>Thanks so much for visiting our wedding website.</p>
                    <p><b>Ready to RSVP?</b></p>
                    <p>
                        You can also choose your menu options, let us know about allergies
                        and pick a song to be played on the day.
                    </p>
                    <p><b>Enter the code on your invite in the box below</b></p>
                    <p>(it&apos;s case sensitive)</p>
                </div>
                <div className="Form-Container">
                    <input
                        className="Input"
                        placeholder="e.g. XiWhNyilIJF="
                        ref={node => this.node = node}
                        type="text"
                        onKeyDown={this.onKeyDown}
                    />
                    <Button
                        type="submit"
                        title="Let's go"
                        onClick={this.onRedirect}
                    />
                </div>
            </Fragment>
        );
    }
}

export default UnknownGuest;
