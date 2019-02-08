import React, { PureComponent } from "react";

import "./Button.css";

class Button extends PureComponent {
    render() {
        const { title, onClick } = this.props;
        return (
            <button
                className="Button"
                onClick={onClick}
                type="button"
            >
                {title}
            </button>
        );
    }
}

export default Button;
