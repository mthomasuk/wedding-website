import React, { PureComponent } from "react";
import L from "leaflet";

class LocationMap extends PureComponent {
  state = {
      lat: 51.5854718,
      long: -0.056371,
  }

  componentDidMount() {
      const { lat, long } = this.state;
      const mymap = L.map("mapid").setView([lat, long], 15);

      L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
          maxZoom: 18,
          id: "mapbox.streets",
      }).addTo(mymap);

      L.marker([lat, long]).addTo(mymap)
          .bindPopup(`
            <b>Walthamstow Wetlands</b><br/>
            2 Forest Road<br/>
            London<br/>
            N17 9NH
          `).openPopup();

      this.popup = L.popup();
      this.map = mymap;
  }

  render() {
      return (
          <div id="mapid" style={{ maxWidth: 800, width: "100%", height: 400 }} />
      );
  }
}

export default LocationMap;
