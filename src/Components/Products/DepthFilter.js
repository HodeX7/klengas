import React from "react";
import "./BagFilter.css";
import mainImage from "../../assets/images/pleatedFiltersBanner.jpg";
import image1 from "../../assets/Product images/skid/SKIDS_1.jpg"
import image2 from "../../assets/Product images/skid/SKIDS_2.jpg"
import image3 from "../../assets/Product images/skid/SKIDS_3.jpg"
import image4 from "../../assets/Product images/skid/SKIDS_4.jpg"
import image5 from "../../assets/Product images/skid/SKIDS_5.jpg"
import image6 from "../../assets/Product images/skid/SKIDS_6.jpg"
import image7 from "../../assets/Product images/skid/SKIDS_7.jpg"
import image8 from "../../assets/Product images/skid/SKIDS_8.jpg"
import image2a from '../../assets/images/banner3.jpg';
import image3a from '../../assets/images/banner4.png';
import CarouselContainer from '../../Components/carouselContainer'
// import KGTBagfilter from "../../assets/Catalogue/01 KGT_Bag_Filter_Catalogue_R1.pdf"
function BagFilter() {
  return (
    <div className="products__page">
      <CarouselContainer image4={image3a} image2={mainImage} image3={image2a}/>
      <div className="product__details">
        <div className='product__title'>
          <h3>KGT Filtration Skids and Packages</h3>
        </div>
        <div className="image__section">
          <img src={image1} alt="" className="product__image__skid" />
          <img src={image2} alt="" className="product__image__skid" />
          <img src={image6} alt="" className="product__image__skid" />
          <img src={image3} alt="" className="product__image__skid" />
        </div>
        <div className="image__section">
          <img src={image4} alt="" className="product__image__skid" />
          <img src={image5} alt="" className="product__image__skid" />
          <img src={image7} alt="" className="product__image__skid" />
          <img src={image8} alt="" className="product__image__skid" />
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
