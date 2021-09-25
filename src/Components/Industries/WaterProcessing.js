import React from "react";
import mainImage from "./../../assets/New Website Images HD/waterProcessingBanner.jpg";
import "./oilAndGas.css";
import Card from "../Card";

function WaterProcessing() {
  return (
    <div className="oil__and__gas">
      <img src={mainImage} alt="" className="mainImage" />
      <div className="gray">
        <div className="content">
          <p>Water Processing industry bifurcates itself into raw water treatment, sewage water treatment, effluent water treatment plants. All of the types of water processing need filtration at various stages. Reverse osmosis protection is a major application for filters in water processing industry. For drinking water, post RO, fine filters in stages are used to purity water before bottling right down upto 1.2 microns in few installations.</p>
        </div>
        <h3 className="application">APPLICATIONS</h3>
        <h4 className="application ong">Water Processing</h4>
        <div className="applications">
          <Card
            img={mainImage}
            title="Process Water"
            content="Incoming water - 5- 20micron absolute rated filters, Polishing Filters - 1 - 5 micron filters"
          />
          <Card
            img={mainImage}
            title="Process Water"
            content="To remove organic contamination, odour, colour, etc. Activated carbon filter is useful."
          />
          <Card
            img={mainImage}
            title="RO Guard Filter"
            content="To achieve consistent SDI at the downstream and enhance RO membrane on-stream life before change-out, we recommend using our 5micron Absolute rated filters."
          />
          <Card
            img={mainImage}
            title="Waste Water Treatment"
            content="RO Guard filters to protect RO membrane. Filters are installed to maintain uniform SDI levels at Pre- RO"
          />
          <Card
            img={mainImage}
            title="Waste Water Treatment"
            content="To absorb free oil from waste water before further treatment, KGT Oil absorption filters are recommended"
          />
        </div>
      </div>
    </div>
  );
}

export default WaterProcessing;
