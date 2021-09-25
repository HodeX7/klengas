import React from "react";
import "./BagFilter.css";
import image from "../../assets/images/logo.png";
import mainImage from "../../assets/images/oilAndGas.png";

import KGTWireMeshMetalFilter from "../../assets/Catalogue/03 KGT_Metal_Filter_Catalogue_R0.pdf"
import KGTPowderedSinteredStainlessSteelFilter from "../../assets/Catalogue/04 KGT_Sintered_Powder_Metal_Filter_Catalogue.pdf"

import image1 from "../../assets/Product images/metal mesh/metal mesh filter 1.jpg"
import image2 from "../../assets/Product images/metal mesh/metal mesh filter 2.jpg"
import image3 from "../../assets/Product images/metal mesh/metal mesh filter 3.jpg"
import image4 from "../../assets/Product images/metal mesh/metal mesh filter 4.png"


import image5 from "../../assets/Product images/sintered/sintered powder metal filter 1.jpg"
import image6 from "../../assets/Product images/sintered/sintered powder metal filter 2.jpg"
import image7 from "../../assets/Product images/sintered/sintered powder metal filter 3.jpg"
import image8 from "../../assets/Product images/sintered/sintered powder metal filter.png"

function MetalFilter() {
  return (
    <div className="products__page">
      <img src={mainImage} alt="" className="mainImage" />
      <div className="product__details">
        <div className="image__section">
          <img src={image1} alt="" className="product__image" style={{ height : "20vh" , width : "20vw"}}/>
          <img src={image2} alt="" className="product__image" style={{ height : "20vh" , width : "20vw", marginLeft : "3px"}}/>
          <img src={image3} alt="" className="product__image" style={{ height : "20vh" , width : "20vw", marginLeft : "3px"}}/>
          <img src={image4} alt="" className="product__image" style={{ height : "20vh" , width : "20vw", marginLeft : "3px"}}/>
        </div>
        <div className="product__catalogue">
          {" "}
          <a href={KGTWireMeshMetalFilter} target="_blank">Download Catalogue</a>
        </div>
        <h4>About</h4>
        <div className="product__content">
          <p>
            The KGT Wire Mesh Metal Filter cartridge has a rigid pore structure
            enabling removal of particles at higher differential pressures with
            consistent efficiency.
          </p>
          <p>
            Apart from the wide chemical compatibility, the filters are suitable
            for either gas or liquid having a high dirt holding capacity.
          </p>
          <p>
            The KGT Wire Mesh Metal Filter cartridge is available in SS304/SS316
            and SS316L.
          </p>
        </div>
        <h4>Advantages</h4>
        <div className="product__content">
          <ul>
            <li>
              Due to wide range to media selection, a variety of liquids from
              acids to alkalis; from seawater to process water; and in gases
              from air to fuel gas to hot exhaust gases.
            </li>
            <li>
              Standard dimensions of 2.5” outer diameter and 1” internal
              diameter ensures fitment in most standard housings with varied
              length availability. (other dimensions are available on request)
            </li>
            <li>
              Available in 10 / 20 / 30 / 40 / 60 inches length. (Other lengths
              available on request.)
            </li>
            <li>
              Solid internal core ensures optimal strength and withstanding of
              differential pressure.
            </li>
          </ul>
        </div>
        <h4>DIFFERENTIAL PRESSURE DATA</h4>
        <div className="product__content">
          <p>
            For Normal Flow from Outside to Inside for liquids compatible with
            the filter media, the maximum differential pressure is 1.5 bard (22
            psid) @ 75⁰C.
          </p>
        </div>
        <h4>APPLICATIONS</h4>
        <div className="product__content" style={{ display: "flex" }}>
          <ul style={{ paddingRight: "10%" }}>
            <li>Corrosive Fluids</li>
            <li>Steam</li>
          </ul>
          <ul>
            <li>Thermic Fluids</li>
            <li>Amine, Glycol</li>
            <li>High Temperature applications in liquids and gases</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="product__details">
        <div className="image__section">
          <img src={image5} alt="" className="product__image" style={{ height : "20vh" , width : "20vw"}}/>
          <img src={image6} alt="" className="product__image" style={{ height : "20vh" , width : "20vw", marginLeft : "3px"}}/>
          <img src={image7} alt="" className="product__image" style={{ height : "20vh" , width : "20vw", marginLeft : "3px"}}/>
          <img src={image8} alt="" className="product__image" style={{ height : "20vh" , width : "20vw", marginLeft : "3px"}}/>
        </div>
        <div className="product__catalogue">
          {" "}
          <a href={KGTPowderedSinteredStainlessSteelFilter} target="_blank">Download Catalogue</a>
        </div>
        <h4>About</h4>
        <div className="product__content">
          <p>
            The KGT Powdered Sintered Stainless Steel Filter cartridge has a
            constant pore structure achieved with controlled sintering of SS
            metal powder imparting it mechanical strength and wide range of
            chemical compatibility with consistent efficiency.
          </p>
          <p>
            Apart from the wide chemical compatibility, the filters are suitable
            for either gas or liquid having a high dP holding capacity.
          </p>
          <p>
            The KGT Powdered Sintered Stainless Steel Metal Filter cartridge is
            available in SS304/SS316 and SS316L.
          </p>
        </div>
        <h4>Advantages</h4>
        <div className="product__content">
          <ul>
            <li>
              Due to wide range to media selection, a variety of liquids from
              acids to alkalis; from seawater to process water; and in gases
              from air to fuel gas to hot exhaust gases.
            </li>
            <li>
              Standard dimensions of 2.5” outer diameter and 1” internal
              diameter ensures fitment in most standard housings with varied
              length availability. (other dimensions are available on request)
            </li>
            <li>
              Available in 10 / 20 / 30 / 40 / 60 inches length. (Other lengths
              available on request.)
            </li>
            <li>
              A depth ranging between 2-3.5 mm os sintered stainless steel
              ensures optimal strength to withstand differential pressure.
            </li>
            <li>Available in both absolute and nominal ratings</li>
          </ul>
        </div>
        <h4>DIFFERENTIAL PRESSURE DATA</h4>
        <div className="product__content">
          <p>
            For Normal Flow from Outside to Inside for liquids compatible with
            the filter media, the maximum differential pressure is 1.5 bard (22
            psid) @ 75⁰C.
          </p>
        </div>
        <h4>APPLICATIONS</h4>
        <div className="product__content" style={{ display: "flex" }}>
          <ul style={{ paddingRight: "10%" }}>
            <li>Corrosive Fluids</li>
            <li>Steam</li>
          </ul>
          <ul>
            <li>Thermic Fluids</li>
            <li>Amine, Glycol</li>
            <li>High Temperature applications in liquids and gases</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="product__details"></div>
    </div>
  );
}

export default MetalFilter;
