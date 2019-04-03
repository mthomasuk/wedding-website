import React from "react";

import Header from "../../components/header";
import Map from "../../components/map";

import "./Directions.css";

const Directions = () => (
    <div className="Directions">
        <Header
            backgroundColour="rgb(151, 128, 176)"
            showOurFaces
            title="Directions to the Venue"
        />
        <div className="Directions-contents">
            <p>Walthamstow Wetlands is Europe’s largest urban nature reserve!</p>
            <Map />
            <p>
                <b><a
                    href="https://www.google.com/maps/place/Walthamstow+Wetlands/@51.5854718,-0.056371,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x48761c31724e4b81:0x145c34872ccd8fe9!2sWalthamstow+Wetlands!8m2!3d51.5854718!4d-0.0541823!3m4!1s0x48761c31724e4b81:0x145c34872ccd8fe9!8m2!3d51.5854718!4d-0.0541823"
                    target="_blank"
                    rel="noopener noreferrer"
                >
              Walthamstow Wetlands
                   </a>
                </b><br />
            2 Forest Road<br />
            London<br />
            N17 9NH
            </p>

            <h2>By public transport</h2>
            <h3>Tube</h3>
            <p>Tottenham Hale is the nearest tube stop, on the Victoria line. It’s a 7-minute walk away.</p>
            <h3>Train</h3>
            <p>National Rail services from Liverpool Street station also stop at Tottenham Hale.</p>
            <h3>Bus</h3>
            <p>Regular bus services 123 and 230 stop outside Walthamstow Wetlands, at the Ferry Boat Inn bus stop.</p>

            <h2>By car</h2>
            <p>
            Just off the A503 – Junction 25 from the M25, then drive south on the A10.
            There’s limited parking at the venue. If you plan on coming by car,
            let us know on <a
                href="mailto:markandrheezy@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >markandrheezy@gmail.com
                           </a> and we’ll make sure there’s a space for you.
            </p>

            <h2>By bike</h2>
            <p>
            If your wedding outfit allows (!), you can easily cycle. There are lots of cycle routes to
            Walthamstow Wetlands, including the A503 that goes straight to the main entrance, and
            plenty of bike parking outside.
            </p>
        </div>
    </div>
);

export default Directions;
