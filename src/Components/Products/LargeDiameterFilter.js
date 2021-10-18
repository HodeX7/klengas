import React from "react";
import image from "../../assets/images/logo.png";
import mainImage from "../../assets/images/pleatedFiltersBanner.jpg";

import image1 from "../../assets/Product images/largeflow/large flow filter 1.png"
import image2 from "../../assets/Product images/largeflow/large flow filter.png"
import image3 from "../../assets/Product images/largeflow/Large_Flow_Filter.png"
import image4 from "../../assets/Product images/largeflow/Large_Flow_Filter_3.png"


import image5 from "../../assets/Product images/smitmann/Picture1.jpg"
import image6 from "../../assets/Product images/smitmann/Picture2.jpg"
import image7 from "../../assets/Product images/smitmann/Picture3.png"
import image8 from "../../assets/Product images/smitmann/Picture4.png"


import KGTLargeFlowfilter from "../../assets/Catalogue/02 KGT_Large_flow_Catalogue_R4.pdf"
import  KGTSMITMANNCartridgefilter from "../../assets/Catalogue/07 KGT_Smitmann_Cartridge_Filter_Catalogue_R0.pdf"
function LargeDiameterFilter() {
  return (
    <div className="products__page">
      <img src={mainImage} alt="" className="mainImage" />
      <div className="product__details">
        <div className='product__title'>
          <h3>KGT Large Flow filter</h3>
        </div>
        <div className="image__section">
          <img src={image1} alt="" className="product__image" style={{ height : "20vh" , width : "20vw"}}/>
          <img src={image2} alt="" className="product__image" style={{ height : "20vh" , width : "20vw", marginLeft : "3px"}}/>
          <img src={image3} alt="" className="product__image" style={{ height : "20vh" , width : "20vw", marginLeft : "3px"}}/>
          <img src={image4} alt="" className="product__image" style={{ height : "20vh" , width : "20vw", marginLeft : "3px"}}/>
        </div>
        <div className="product__catalogue">
          {" "}
          <a href={KGTLargeFlowfilter} target="_blank">Download Catalogue</a>
        </div>
        <h4>About</h4>
        <div className="product__content">
          <p>
            The KGT Large Flow filter is a large diameter filter having single
            open ended design with option of pleated and depth media.
          </p>
          <p>
            The flow pattern is from the inside to the outside of the filter
            element. Special pleated structure with large diameter of 6 inches;
            with lengths from 20 inches up to 60 inches, the filter boasts of a
            capacity of up to 1500 lpm per cartridge.
          </p>
          <p>
            The KGT Highflow filter is available in polypropylene and glass
            fibre to handle a wide range of liquids.
          </p>
        </div>
        <h4>Advantages</h4>
        <div className="product__content">
          <ul>
            <li>
              Due to large flow capacity, filter system can be designed up to
              50% smaller footprint when compared to standard filter of 2.5”
              diameter and 40” length.
            </li>
            <li>
              Each KGT Large Flow filter replaces upto 20 small diameter
              elements for the same flow.
            </li>
            <li>
              Reproducible performance by virtue of absolute removal rating
            </li>
            <li>Available in 10/20/30/40/60 inches length</li>
            <li>All polymeric construction ensures minimal disposal costs.</li>
            <li>
              The contamination is trapped within the filter due to inside to
              outside flow pattern, benefitting clean filter changeover.
            </li>
          </ul>
        </div>
        <h4>DIFFERENTIAL PRESSURE DATA</h4>
        <div className="product__content">
          <p>
            For Normal Flow from Inside to Outside for liquids compatible with
            the filter media, the maximum differential pressure is
          </p>
          <p>Polypropylene Medium: 36psid (2.5 bard) @750°C</p>
          <p>Glass Fibre Medium: 36psid (2.5 bard) @1100°C</p>
          <p style={{ fontSize: "12px" }}>
            (This data is compiled for Water Service)
          </p>
        </div>
        <h4>APPLICATIONS</h4>
        <div className="product__content" style={{ display: "flex", maxWidth:'200vw' }}>
          <ul>
            <li>Amine, Glycol</li>
            <li>RO Pre-filtration</li>
            <li>Process Water</li>
            <li>White Fuels</li>
            <li>Brine, Seawater</li>
            <li>Naphtha, HC Condensate</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="product__details">
        <div className='product__title'>
          <h3>KGT SMITMANN Cartridge filter</h3>
        </div>
        <div className="image__section">
          <img src={image5} alt="" className="product__image" style={{ height : "20vh" , width : "20vw"}}/>
          <img src={image6} alt="" className="product__image" style={{ height : "20vh" , width : "20vw", marginLeft : "3px"}}/>
          <img src={image7} alt="" className="product__image" style={{ height : "20vh" , width : "20vw", marginLeft : "3px"}}/>
          <img src={image8} alt="" className="product__image" style={{ height : "20vh" , width : "20vw", marginLeft : "3px"}}/>
        </div>
        <div className="product__catalogue">
          {" "}
          <a href={KGTSMITMANNCartridgefilter} target="_blank">Download Catalogue</a>
        </div>
        <h4>About</h4>
        <div className="product__content">
          <p>
            The KGT SMITMANN Cartridge filter has a controlled pore structure
            enabling removal of large range of particle sizes with consistent
            efficiency.
          </p>
          <p>
            Apart from the wide chemical compatibility, the filters are suitable
            for either high flow rate or high viscous liquid, having a high dirt
            holding capacity.
          </p>
          <p>
            The KGT SMITMANN cartridge filter is available in various removal
            ratings enabling it to handle a wide range of fluids.
          </p>
        </div>
        <h4>Advantages</h4>
        <div className="product__content">
          <ul>
            <li>
              Due to wide range of media and pore size selection, a variety of
              liquids from acids to alkalis; from seawater to process water; and
              lube oils to petroleum fluid.
            </li>
            <li>
              Standard dimensions of 7” outer diameter ensures fitment in most
              standard housings with varied length availability. (other
              dimensions available on request)
            </li>
            <li>
              Available in 16 and 32 inches length. (Other lengths available on
              request.)
            </li>
            <li>Sealing collars available in polypropylene.</li>
          </ul>
        </div>
        <h4>DIFFERENTIAL PRESSURE DATA</h4>
        <div className="product__content">
          <p>
            For Normal Flow from Inside to Outside for liquids compatible with
            the filter media, the maximum differential pressure is
          </p>
          <p>Polypropylene Medium: 15psid (1.0 bard)@75°C</p>
          <p>Glass Fibre Medium: 15psid (1.0 bard)@120⁰C</p>
          <p style={{ fontSize: "12px" }}>
            (This dp data is compiled for Water Service)
          </p>
        </div>
        <h4>APPLICATIONS</h4>
        <div className="product__content" style={{ display: "flex",maxWidth:"200vw" }}>
          <ul>
            <li>Lube Oils</li>
            <li>Process Water</li>
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

export default LargeDiameterFilter;
