import React from "react";
import HeroCard from "./HeroCard";
import "./HeroSection.css";
import YoutubeVideo from "./YoutubeVideo";
import oilAndGas from '../assets/New Website Images HD/oilAndGasBanner.jpg'
import pharmaceuticals from '../assets/New Website Images HD/pharmaceuticalsBanner.jpg'
import foodAndBeverages from '../assets/New Website Images HD/foodAndBeveragesBanner.jpg'
import chemicals from '../assets/New Website Images HD/chemicalsBanner.jpg'
import waterProcessing from '../assets/New Website Images HD/waterProcessingBanner.jpg'
import powerGeneration from '../assets/New Website Images HD/powerGenerationBanner.jpg'
function HeroSection() {
  return (
    <div className="main__section">
      <div className="hero">
        <div className="hero__text">
          <p>
            Klengas Tech LLP is an organisation led by techno-commercial
            personnel with technocrats leading from front having combined
            <span style={{ fontWeight: "800" }}>
              {" "}
              professional experience of over 55 years
            </span>{" "}
            in the filtration and separation, processes and equipments across
            industries. Adept in application engineering, project engineering,
            execution, installation and commissioning and applications
            development. Lead and guide teams to support across geographies by
            providing innovative solutions in various industries segments.
          </p>
          <p>
            We are serving across the industries. Just to illustrate few
            examples:
          </p>
          <p>We are engaged in following services:</p>
          <ol className="list2">
            <li>
              Suggesting solutions to Existing Filtration and Separation related
              problems
            </li>
            <li>
              Suggesting New and appropriate Filtration and Separation Solutions
            </li>
            <li>
              Carrying out Filtration related Surveys and Health Check-ups of
              Filtration Systems
            </li>
          </ol>
        </div>
        <div className="hero__images">
          <HeroCard
            className="hero__card"
            img={oilAndGas}
            title="Oil And Gas"
            content="Oil & Gas Processing stations separate crude oil, produced water and associated gas from well fluid. The crude oil is further purified and made transportable to nearest refinery."
            page="/oilandgas"
          />
          <HeroCard
            className="hero__card"
            img={pharmaceuticals}
            title="Pharmaceuticals"
            content="Pharmaceutical industry served by Klengas encompasses API, bulk drugs, formulation & biotech, Large Volume Parentrals / Small Volume Parentrals and Water for injection."
            page="/pharmaceuticals"
          />
          <HeroCard
            className="hero__card"
            img={foodAndBeverages}
            title="Food and Beverages"
            content="Filters play an important role in purification of various food & beverage industry segments like Carbonated Soft drinks, drinking water, edible gums, fruit juices, beer. "
            page="/foodandbeverages"
          />
        </div>
        <div className="hero__images">
          <HeroCard
            className="hero__card"
            img={chemicals}
            title="Chemicals"
            content="Chemical industry is a large expanse of variants which need purification at various stages in manufacturing. Not only in the liquids, but also in the gaseous stages for catalyst protection or prevention of poisoning of essentials."
            page="/chemicals"
          />
          <HeroCard
            className="hero__card"
            img={waterProcessing}
            title="Water Processing"
            content="Water Processing industry bifurcates itself into raw water treatment, sewage water treatment, effluent water treatment plants. All of the types of water processing need filtration at various stages. Reverse osmosis protection is a major application for filters in water processing industry."
            page="/waterprocessing"
          />
          <HeroCard
            className="hero__card"
            img={powerGeneration}
            title="Power Generation"
            content="Power Generation is done through Thermal, Hydro, Solar, Nuclear resources. In every and all modes of power generation, water is a critical resource.  Water is required to be purified in various forms."
            page="/powergeneration"
          />
        </div>
      </div>

      {/* RESPONSIVENESS PENDING */}

      <>
        <h5 className="featured__heading">FEATURED SECTION</h5>
        <div className="featured__section">
          {/* https://www.youtube.com/watch?v=1KmS9DqIBbw */}
          <YoutubeVideo videoId="1KmS9DqIBbw" />
          {/* https://www.youtube.com/watch?v=AL2Nll6B9JU&t=3s */}
          <YoutubeVideo videoId="AL2Nll6B9JU" />
          {/* https://www.youtube.com/watch?v=QAznxTjy0PA */}
          <YoutubeVideo videoId="QAznxTjy0PA" />
        </div>
      </>
    </div>
  );
}

export default HeroSection;
