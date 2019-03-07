/* eslint-disable react/button-has-type */
import React, { PureComponent } from "react";

import "./Button.css";

class Button extends PureComponent {
    render() {
        const { title, onClick, type = "button" } = this.props;
        return (
            <button
                className="Button"
                onClick={onClick}
                type={type}
            >
                {title}
            </button>
        );
    }
}

export default Button;
