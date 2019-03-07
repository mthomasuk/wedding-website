import React, { PureComponent, Fragment } from "react";

import Button from "../button";

import "./UnknownGuest.css";

class UnknownGuest extends PureComponent {
    onRedirect = () => {
        const { value } = this.node;
        return window.location = `/${value}`;
    }

    render() {
        return (
            <Fragment>
                <div className="UnknownGuest-content">
                    <h3>We&apos;d love to see you at our wedding</h3>
                    <p>
                        It&apos;s on <b>September 7th</b> at <b>Walthamstow Wetlands</b>.<br />
                        If you&apos;ve got the code from your invite, please enter it below.
                    </p>
                    <p>If you don&apos;t have a code, contact Mark or Rhiannon for one.</p>
                </div>
                <div className="Form-Container">
                    <input
                        className="Input"
                        ref={node => this.node = node}
                        type="text"
                    />
                    <Button
                        type="submit"
                        title="Let me in"
                        onClick={this.onRedirect}
                    />
                </div>
            </Fragment>
        );
    }
}

export default UnknownGuest;
