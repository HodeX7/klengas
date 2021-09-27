import React from "react";
import image from "../assets/images/banner1.JPG";
import "./About.css";
// import Card from "./Card";
function About() {
  return (
    <div className="about">
      <img className="banner__image" src={image} alt="" />
      <div className="content">
        <p>
          Klengas Tech LLP is an organisation led by techno-commercial personnel
          with technocrats leading from front having combined
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
          We are serving across the industries. Just to illustrate few examples:
        </p>
        <div className="list">
          <div className="sub__section">
            <div className="btn">
              <button>Oil And Gas Processing Plants</button>
            </div>
            <div className="btn">
              <button>Food & Beverage Industries</button>
            </div>
          </div>
          <div className="sub__section">
            <div className="btn">
              <button>Power Generation Plants</button>
            </div>
            <div className="btn">
              <button>Chemical Industries</button>
            </div>
          </div>
          <div className="sub__section">
          <div className="btn">
              <button>Water Processing</button>
            </div>
            <div className="btn">
              <button>Biopharmaceuticals Industries</button>
            </div>
          </div>
        </div>
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
        <div className="content__paras">
          <div className="paragraph">
            <h5>1. Process Consultancy in process plants</h5>
            <p>
              In various industries, many times it is important to understand
              the process issues from Operations and Maintenance point of view.
              Process issues are inter related at various stages of process.
            </p>
            <p>
              Many times, upstream filtration/ separation system is decided to
              protect downstream equipments or to control the purity of final
              products. Hence, it is important to understand design and
              operation and maintenance related issues of the downstream
              equipments like but not limited to process pumps, process/ recycle
              gas compressors, distillation columns, extraction columns, heat
              exchangers, reactors, etc.
            </p>
            <p>
              We also study problems and suggest remedies related to resolve
              them.
            </p>
          </div>
          <div className="paragraph">
            <h5>
              2. Solutions to Filtration & Separation System Related Issues
            </h5>
            <p>
              Customers across the industries are using various types of
              filtration and separation equipments for their various needs. On
              these existing filtration and separation equipments, customers are
              facing various problems such as non-functionality, under
              performance, high operation costs (Direct and indirect related to
              these equipments), frequent maintenance shut downs of the
              equipment or downstream equipments, etc.
            </p>
            <p>
              We help customers in identifying the issues for all these issues
              and help them cost effective and reliable solution for the same.
              Some of the customers are not using filtration and separation
              equipments and facing some process problems in the process plants
              which are directly or indirectly related to absence of filtration
              and separation equipments. We also help in identification of need
              of appropriate filtration and separation systems, suggest and
              provide appropriate and economical filtration equipments.
            </p>
          </div>
        </div>
        <div className="paragraph">
          <h5>3. Filtration Surveys and Health Check-ups</h5>
          <p>
            We also carry out the filtration surveys of existing equipments in
            the plants. In these surveys, we initially discuss with your
            operation people about the various filters locations, specifications
            and requirements (expectations of performance). Once, this is done,
            we carry out plant visit with customers’ people. Understand
            operational and maintenance issues related to these equipments. Once
            this is done, we prepare a detailed report and present/ submit it to
            the customers with our expert comments/ recommendations.
          </p>
          <p>
            Based on these surveys, many times we also suggest and on acceptance
            by customers carry out health check-ups of the filtration equipments
            as per necessity. In health check-ups, we carry out filtration
            equipments audit. With the help of analytical laboratories available
            at customers’ place, we check the actual performance of these
            equipments and compare those performances with expectations. Where
            ever we find the gaps, we give our recommendations to bridge the
            gaps.
          </p>
          <p>
            All these services help customers to improve their plant/ process
            performances in cost effective manner with lowering break-down/ shut
            down maintenance frequencies.
          </p>
          <p>
            By carrying out these services, it helps customer to run their
            processes smoothly which in turn helps to achieve breakdown free
            plant operation. Also, it helps to prolong schedule of shut down
            which means longer operation of the plant. Smooth operation of the
            plant is resulting in savings of maintenance costs and reduced
            operations costs.
          </p>
        </div>
        <h4>To summarize the benefits to customers:</h4>
        <ol className="list2">
          <li>Improved Product Quality</li>
          <li>Less rework or process time</li>
          <li>Reduced Maintenance costs</li>
          <li>Reduced Operational costs</li>
          <li>Low Break down maintenances</li>
          <li>
            Prolonged Operation of the plants / Long intervals between Planned
            Shut downs
          </li>
        </ol>
      </div>
    </div>
  );
}

export default About;
