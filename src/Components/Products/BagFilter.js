import React from "react";
import "./BagFilter.css";
import image from "../../assets/images/logo.png";
import mainImage from "../../assets/images/oilAndGas.png";
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
        <div className="image__section">
          <img src={image1} alt="" className="product__image" />
          <img src={image2} alt="" className="product__image" />
          <img src={image3} alt="" className="product__image" />
          <img src={image4} alt="" className="product__image" />
        </div>
        <div className="product__catalogue">
          {" "}
          <a href={KGTBagfilter} target="_blank">Download Catalogue</a>
        </div>
        <h4>About</h4>
        <div className="product__content">
          <p>
            The KGT Bag filter element has a fixed pore structure making then
            absolute rated which enables removal of contamination at consistent
            efficiency.
          </p>
          <p>
            Apart from the wide chemical compatibility, the filters are suitable
            for either high flow rate or high viscous liquid, having a high dirt
            holding capacity as they are available in polypropylene and
            polyester media.
          </p>
          <p>
            The KGT Bag filter element is available in various media enabling it
            to handle a wide range of fluids.
          </p>
        </div>
        <h4>Advantages</h4>
        <div className="product__content">
          <ul>
            <li>
              Due to wide range to media selection, a variety of liquids from
              acids to alkalis; from seawater to process water; and lube oils to
              light petroleum fluid.
            </li>
            <li>
              Standard dimensions of 4” and 7” outer diameter ensures fitment in
              most standard housings with varied length availability. (other
              dimensions available on request)
            </li>
            <li>
              Available in 16 and 32 inches length. (Other lengths available on
              request.)
            </li>
            <li>Sealing collars available in polypropylene and Steel rings.</li>
          </ul>
        </div>
        <h4>DIFFERENTIAL PRESSURE DATA</h4>
        <div className="product__content">
          <p>
            For Normal Flow from Inside to Outside for liquids compatible with
            the filter media, the maximum differential pressure is
          </p>
          <p>Polypropylene Medium: 15psid (1.0 bard)@75⁰C</p>
          <p>Polyester Medium: 15psid (1.0 bard)@135⁰C</p>
          <p style={{ fontSize: "12px" }}>
            (This dp data is compiled for Water Service)
          </p>
        </div>
        <h4>APPLICATIONS</h4>
        <div className="product__content" style={{ display: "flex" }}>
          <ul style={{ paddingRight: "10%" }}>
            <li>Process Water</li>
            <li>Lube Oils</li>
          </ul>
          <ul>
            <li>Amine, Glycol</li>
            <li>Brine, Seawater</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="product__details"></div>
    </div>
  );
}

export default BagFilter;
