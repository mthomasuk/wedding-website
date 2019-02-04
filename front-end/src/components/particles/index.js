import React, { PureComponent } from "react";

import "./Particles.css";

const NO_OF_PARTICLES = 30;
const ARR_OF_PARTICLES = new Array(NO_OF_PARTICLES).fill(0);

class Particles extends PureComponent {
    renderParticles = (_, i) => <div key={i} className="particle" />;

    render() {
        return (
            <div className="Particles">
                {ARR_OF_PARTICLES.map(this.renderParticles)}
            </div>
        );
    }
}

export default Particles;
