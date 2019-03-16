import React, { PureComponent } from "react";

import Header from "../../components/header";

import "./Hotels.css";

class Hotels extends PureComponent {
  render() {
    return (
      <div className="Hotels">
        <Header
          backgroundColour="rgb(151, 128, 176)"
          showOurFaces
          title="Hotels nearby"
        />
        <div className="Hotels-contents">
          <p>
            Here are just a few recommended hotels, easily accessible from the
            venue
          </p>
          <h2>A short walk</h2>
          <p>
            Recommended if you’re looking for somewhere close by – this the best
            option for parking, too.
          </p>

          <h3>Premier Inn Tottenham Hale</h3>
          <p>
            <a
              href="https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-tottenham-hale.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-tottenham-hale.html
            </a>
          </p>
          <p>
            <em>
              0.7 miles away
              <br />
              13-minute walk
            </em>
          </p>
          <p>
            Lenny’s finest. Very handy – a short walk down the road from the
            wetlands!
          </p>
          <h2>A taxi ride</h2>
          <p>
            You can also get to these hotels on the Overground trains, which run
            from Tottenham Hale to Liverpool Street (but they’re not 24-hour).
          </p>
          <h3>The East London hotel</h3>
          <p>
            <a
              href="https://www.theeastlondonhotel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.theeastlondonhotel.com/
            </a>
          </p>
          <p>
            <em>
              6 miles away
              <br />
              25-minute cab ride
            </em>
          </p>
          <p>Smart, 3.5-star hotel in Bethnal Green.</p>
          <h3>The Ace Hotel</h3>
          <p>
            <a
              href="https://www.acehotel.com/london/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.acehotel.com/london/
            </a>
          </p>
          <p>
            <em>
              5.4 miles away
              <br />
              20-minute cab ride
            </em>
          </p>
          <p>
            Right in the heart of Shoreditch, if you plan on carrying on the
            party.
          </p>
          <h3>The Town Hall Hotel</h3>
          <p>
            <a
              href="https://www.townhallhotel.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.townhallhotel.com/
            </a>
          </p>
          <p>
            <em>
              6.1 miles away
              <br />
              27-minute cab ride
            </em>
          </p>
          <p>Fanciest address in town! We’re staying here too.</p>
          <h2>A tube ride</h2>
          <p>
            The Victoria line runs 24/7 on Saturdays, so you’ll be able to get
            back easily, whatever time you leave! These hotels are just a few
            stops from away from Tottenham Hale.
          </p>
          <h3>Z Hotel</h3>
          <p>
            <a
              href="https://www.thezhotels.com/hotels/shoreditch"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.thezhotels.com/hotels/shoreditch
            </a>
          </p>
          <p>
            <em>
              Old St station
              <br />
              25-minute tube ride
            </em>
          </p>
          <p>
            A great budget option – change to the Northern Line at King’s Cross.
          </p>
          <h3>St Pancras Renaissance Hotel</h3>
          <p>
            <a
              href="https://www.stpancraslondon.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.stpancraslondon.com/en/
            </a>
          </p>
          <p>
            <em>
              King’s Cross station
              <br />
              20-minute tube ride
            </em>
          </p>
          <p>
            Spectacularly refurbished, right next to King’s Cross. A proper
            treat.
          </p>
          <h3>Pullman London St Pancras Hotel</h3>
          <p>
            <a
              href="https://www.accorhotels.com/gb/hotel-5309-pullman-london-st-pancras/index.shtml"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.accorhotels.com/gb/hotel-5309-pullman-london-st-pancras/index.shtml
            </a>
          </p>
          <p>
            <em>
              King’s Cross station
              <br />
              20-minute tube ride
            </em>
          </p>
          <p>A big, comfortable hotel right next to King’s Cross.</p>
        </div>
      </div>
    );
  }
}

export default Hotels;