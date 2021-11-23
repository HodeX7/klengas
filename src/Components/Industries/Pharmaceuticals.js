import React from "react";
import Card from "../Card";
import mainImage from "./../../assets/New Website Images HD/pharmaceuticalsBanner.jpg";
import "./oilAndGas.css";
function Pharmaceuticals() {
  return (
    <div className="oil__and__gas">
      <img src={mainImage} alt="" className="mainImage" />
      <div className="gray">
        <div className="content">
          <p>
            Pharmaceutical industry served by Klengas encompasses API, bulk
            drugs, formulation & biotech, Large Volume Parentrals / Small Volume
            Parentrals and Water for injection.{" "}
          </p>
        </div>
        <h3 className="application">APPLICATIONS</h3>
        <h4 className="application ong">Pharmaceuticals</h4>
        <div className="applications">
        <hr></hr>
            <h3 style={{display:'flex', justifyContent:"center"}}>LVP</h3>
          
            <Card
              img={mainImage}
              title="Pre filtration"
              content="10micron Polypropylene filters are used to arrest the suspended contaminations"
            />
            <Card
              img={mainImage}
              title="Final Filtration"
              content="To maintain sterility of parenteral, it is important to use validated sterile filter with 0.2micron rating"
            />
            <Card
              img={mainImage}
              title="Redundant Final Filtration"
              content="To maintain sterility of parenteral, it is important to use validated sterile filter with 0.2micron rating"
            />
            <Card
              img={mainImage}
              title="Sheet Filtration"
              content="To remove bulk solid contamination in most economical way, sheet filters are used in the form of lenticular disc filter. This avoids lot of labour work, wastage of product and reduces downtime"
            />
            <Card
              img={mainImage}
              title="Air/Nitrogen Pre-Filtration"
              content="5 - 10 micron polypropylene or metal filters are recommended for pre-filtration"
            />
            <Card
              img={mainImage}
              title="Air/Nitrogen Fine-Filtration"
              content="To ensure sterile air/ nitrogen is used, it is important to use validated sterile filter usually PTFE (Hydrophobic media)."
            />
            <span></span>
            <hr></hr>
            <h3 style={{display:'flex', justifyContent:"center"}}>SVP</h3>
            <Card
              img={mainImage}
              title="Pre-filtration"
              content="Removal of solids from water/ solvent and other chemicals polymeric media and metal filters if polymeric media is not compatible. Usually these filter are utilized to reduce bioburden load on final filters and thus achieving economy in filtration"
            />
            <Card
              img={mainImage}
              title="Final Filtration"
              content="This is very important sterile filter and to ensure sterility of the Small Volume Parenterals, it is important to use validated sterile filters"
            />
            <Card
              img={mainImage}
              title="Air/Nitrogen Pre-Filtration"
              content="Filters with 1 -10micron absolute rating are recommended "
            />
            <Card
              img={mainImage}
              title="Air/Nitrogen Final-Filtration"
              content="To maintain sterility of the system in which parenterals are produced, it is important to use validated sterile filters usually PTFE filters."
            />
            <span></span>
            <hr></hr>
            <h3 style={{display:'flex', justifyContent:"center"}}>WATER</h3>
            
            <Card
              img={mainImage}
              title="Removal of silica fines"
              content="20 - 40 micron filters are used to remove bulk silica loads. As necessary finer micron ratings can be evaluated"
            />
            <Card
              img={mainImage}
              title="Protection of ion exchange bed"
              content="10- 20 micron polypropylene filters are best suited for this application which provides good protection to resin bed"
            />
            <Card
              img={mainImage}
              title="Resin fines trap filter"
              content="Usually 5micron polypropylene pleated filters are used"
            />
            <Card
              img={mainImage}
              title="Removal of bacteria & Endotoxin"
              content="PES validated sterile filters are used"
            />
            <Card
              img={mainImage}
              title="Microbial & Particulate control in Tank Venting"
              content="PTFE validated sterile filters are recommended to ensure sterile product with no contamination"
            />
            <Card
              img={mainImage}
              title="Microbial & Particulate control in sterilization of water"
              content="PES validated sterile filters are used"
            />
            <Card
              img={mainImage}
              title="Process & Waste Water treatment"
              content="Usually for protecting RO membranes and enhancing the life of RO membrane is the objective. Good Absolute rated filters ensure consistent quality of feed water to RO"
            />
            <span></span>
            <hr></hr>
            <h3 style={{display:'flex', justifyContent:"center"}}>API</h3>
            
            <Card
              img={mainImage}
              title="Colour/Impurities removal"
              content="These are economical solutions which ensures no contamination of system components such as reactor, agitator, pumps, pipings, etc. Also, in single pass, colour/ impurities are removed from the product. Reduces downtime and labour"
            />
            <Card
              img={mainImage}
              title="Powdered Carbon removal"
              content="Easy to dispose and safe to handle, non contact filters are really helpful in keeping the plant clean and maintain hygiene while achieving the objective of removing carbon fines."
            />
            <Card
              img={mainImage}
              title="Catalyst recovery"
              content="Very useful for catalyst recovery without spillage of high value catalyst and safe to handle in cleane environment"
            />
            <Card
              img={mainImage}
              title="Solvent Coarse Filtration"
              content="Based on the compatibility with fluid, Polypropylene or metal filters are suitable for removal of suspended particles. Generally 5 - 40 micron rating used based on the cleanliness requirements"
            />
            <Card
              img={mainImage}
              title="Solvent Fine Filtration"
              content="Based on the compatibility with fluid, Polypropylene or metal filters are suitable for removal of suspended particles. Generally 1 - 5 micron rating used based on the cleanliness requirements "
            />
            <Card
              img={mainImage}
              title="Product Pre filtration"
              content="Based on the compatibility with fluid, Polypropylene or metal filters are suitable for removal of suspended particles. Generally 5 - 40 micron rating used based on the cleanliness requirements"
            />
            <Card
              img={mainImage}
              title="Product Final Filtration"
              content="Based on the compatibility with fluid, Polypropylene or metal filters are suitable for removal of suspended particles. Generally 1 - 5 micron rating used based on the cleanliness requirements "
            />
            <Card
              img={mainImage}
              title="Air/Nitrogen Filtration"
              content="As per particle sizes and contamination loading, Polymeric or metal filters can be used from 1 - 40 micron as per required cleanliness"
            />
            <hr></hr>
            <h3 style={{display:'flex', justifyContent:"center"}}>STERILE API</h3>
            
            <span></span>
            <Card
              img={mainImage}
              title="Product Final Filtration"
              content="Based on chemical compatibility with product, Poly Ether Sulfone or  PTFE filter media is used with validated sterile filter to obtain and maintain sterile end product"
            />
            <Card
              img={mainImage}
              title="Vent filtration"
              content="PTFE validated sterile filters are recommended to ensure sterile product with no contamination"
            />
            <Card
              img={mainImage}
              title="Purified water Filtration"
              content="Based on the contamination loading, polymeric or metal filters are used with 1 - 20 micron absolute ratings to maintain cleanliness and remove external contamination"
            />
            <Card
              img={mainImage}
              title="Water For Injection (WFI)"
              content="PES or Nylon Sterile validated 0.2micron rated filters are used to maintain sterile water"
            />
            <span></span>
            <hr></hr>
            <h3 style={{display:'flex', justifyContent:"center"}}>FORMULATION AND BIOTECH</h3>
            
            <Card
              img={mainImage}
              title="Coarse particulate filtration for chemicals, products & solvents"
              content="Based on the contamination loading, polymeric or metal filters are used with 5 - 40 micron absolute ratings to maintain cleanliness and remove external contamination"
            />
            <Card
              img={mainImage}
              title="Fine filtration prior to holding tank"
              content="Based on the contamination loading, polymeric or metal filters are used with 1 - 5 micron absolute ratings to maintain cleanliness and remove external contamination"
            />
            <Card
              img={mainImage}
              title="Sterile product/ Air/ Vent filtration"
              content="PES/ Nylon/ PTFE validated sterile filters are recommended to ensure sterile product with no contamination. For Air/ Vent filtration, hydrophobic PTFE filters validated sterile filters"
            />
          </div>
      </div>
    </div>
  );
}

export default Pharmaceuticals;
