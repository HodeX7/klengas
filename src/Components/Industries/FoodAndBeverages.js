import React from "react";
import mainImage from "./../../assets/images/oilAndGas.png";
import "./oilAndGas.css";
import Card from "../Card";

function FoodAndBeverages() {
  return (
    <div className="oil__and__gas">
      <img src={mainImage} alt="" className="mainImage" />
      <div className="gray">
        <div className="content">
          <p>
            Filters play an important role in purification of various food &
            beverage industry segments like Carbonated Soft drinks, drinking
            water, edible gums, fruit juices, beer. In almost all the industry
            segments, final clarification and polishing is done by optimal
            filters which give purity of the required level. Right purification
            of process water in all the F&B industries is needed to keep the
            unwanted contamination away from entering the manufacturing process
          </p>
        </div>
        <h3 className="application">APPLICATIONS</h3>
        <h4 className="application ong">Food and Beverages</h4>
        <div className="applications">
          <Card
            img={mainImage}
            title="Process Water"
            content="Incoming water - 5- 20micron absolute rated filters, Polishing Filters - 1 - 5 micron filters"
          />
          <Card
            img={mainImage}
            title="Syrup Filtration"
            content="Carbon is used to decolourize the sugar syrup and 20 micron filters are used to remove other suspended contaminations such as flocs"
          />
          <Card
            img={mainImage}
            title="Concentrate final filtration"
            content="70 - 100 micron pleated wiremesh filters are good to arrest coarser suspended particles"
          />
          <Card
            img={mainImage}
            title="Post Mixing Filtration"
            content="1- 5 micron filters are effective for removing contaminants"
          />
          <Card
            img={mainImage}
            title="Final Products"
            content="Polishing Final products and giving sparkling effects is achieved by using these filters"
          />
          <Card
            img={mainImage}
            title="Air / Nitrogen"
            content="To arrest pipe line contamination and other foreign particles"
          />
          <Card
            img={mainImage}
            title="Steam "
            content="To remove metal and other contaminations and to arrest any foreign particles entering in the product "
          />
          <Card
            img={mainImage}
            title="Raw Materials & intermediate Products"
            content="These filters will avoid any contamination entering in the product at initial stage itself"
          />
          <Card
            img={mainImage}
            title="Waste Water Treatment"
            content="RO Guard filters to protect RO membrane. Filters are installed to maintain uniform SDI levels at Pre- RO"
          />
        </div>
      </div>
    </div>
  );
}

export default FoodAndBeverages;
