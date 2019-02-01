import React, { PureComponent } from "react";
import Form from "./components/form/Form";
import Overlay from "./components/overlay/Overlay";
import Particles from "./components/particles/Particles";

import "./App.css";

class App extends PureComponent {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">
                        Mark<span className="span-small-amp">&</span>Rhiannon
                    </h1>
                    <h3>Are Getting</h3>
                    <h1>Married</h1>
                </header>
                <div className="App-intro">
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

export default App;
