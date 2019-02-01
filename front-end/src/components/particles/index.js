import React, { PureComponent } from "react";

import "./Particles.css";

const ARR_OF_PARTICLES = new Array(30).fill(0);

class Particles extends PureComponent {
    renderParticles = () => <div className="particle" />;

    render() {
        return (
            <div className="Particles">
                {ARR_OF_PARTICLES.map(this.renderParticles)}
            </div>
        );
    }
}

export default Particles;
