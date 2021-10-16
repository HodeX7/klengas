import React from "react";
import "./BagFilter.css";
import mainImage from "../../assets/images/pleatedFiltersBanner.jpg";
import image1 from "../../assets/Product images/bag filter/Bag filter.jpg"
import image2 from "../../assets/Product images/bag filter/Bag_Filter_1.png"
import image3 from "../../assets/Product images/bag filter/Bag_Filter_2.png"
import image4 from "../../assets/Product images/bag filter/Bag_Filter_3.png"

import KGTBagfilter from "../../assets/Catalogue/01 KGT_Bag_Filter_Catalogue_R1.pdf"
function BagFilter() {
  return (
    <div className="products__page">
      <img src={mainImage} alt="" className="mainImage" />
      <div className="product__details">
        <div style={{display:'flex', alignItems:'center', justifyContent:"center"}}>
          <h3>KGT Filtration Skids and Packages</h3>
        </div>
        <div className="image__section">
          <img src={image1} alt="" className="product__image" />
          <img src={image2} alt="" className="product__image" />
          <img src={image3} alt="" className="product__image" />
          <img src={image4} alt="" className="product__image" />
        </div>
        <div className="product__content">
          <p>
          Klengas Tech LLP has been managed by team of highly experienced professionals in the field of design, engineering, and project execution of process equipment, skidding and packaging. The company has engaged skilled engineers to do engineering work, project monitoring, project execution, production planning. We are supported by our dedicated sub-contractors who are fully equipped with modern tools and tackles. Engineering design is supported by software like AutoCAD, solid works, PVelite and Primavera.
          </p>
          <p>
          We are committed to quality work, timely delivery and customer satisfaction. Our expertise is in field of:
          </p>
          <ul>
            <li>Sizing and Selection of Filter elements along with filter vessels.</li>
            <li>Design, engineering, procurement, manufacturing, testing and supply of filter vessel & filtration systems, packages & skids</li>
            <li>Filter housing with filter elements for general and aggressive application in polypropylene, polyester, glass fibre, PTFE and PES in standard and large diameters.</li>
            <li> Lube Oil Conditioning Packages for removal of dissolved moisture and gases from lube and hydraulic fluids.</li>
            <li>Complete skid based filtration package having inlet strainer, pump, filter vessels with interconnecting piping, valves and associated instrumentation having an option of cover with canopy.</li>
          </ul>
          <p>Klengas team has designed and delivered packages to esteemed clientele like HPCL-Mittal Refinery Limited, Oriental Aromatics Limited, Meghmani Finechem Limited, Petronas Lubricants (India) Private Limited, Indorama Eleme Fertilizers and Petrochemicals Limited, Oil & Natural Gas Corporation Limited to name a few. Our team constantly upgrades and keeps abreast of the latest advances in industrial technology. As a result, we are able to develop and provide the state-of the art systems and solutions with optimum energy consumption and better life cycle. Klengas Tech LLP is committed to use highly energy efficient equipment to conserve energy, save environment and reduce carbon emission for a better living.</p>
        </div>
      </div>
      <hr></hr>
      <div className="product__details"></div>
    </div>
  );
}

export default BagFilter;
