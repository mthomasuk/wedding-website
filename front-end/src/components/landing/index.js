import React, { PureComponent } from "react";
import Form from "../form";
import Overlay from "../overlay";
import Particles from "../particles";

import "./Landing.css";

class Landing extends PureComponent {
    render() {
        return (
            <div className="Landing">
                <header className="Landing-header">
                    <h1 className="Landing-title">
                        Mark<span className="span-small-amp">&</span>Rhiannon
                    </h1>
                    <h3>Are Getting</h3>
                    <h1>Married</h1>
                </header>
                <div className="Landing-intro">
                    <p className="p-date">
                        7th September<br />2019
                    </p>
                    <p>We'd love to have you there!</p>
                    <p>
                        Just enter your postal address below and we'll send you
                        an invitation...
                    </p>
                </div>
                <Form />
                <Overlay />
                <Particles />
            </div>
        );
    }
}

export default Landing;
