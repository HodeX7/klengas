import React from "react";
import mainImage from "./../../assets/New Website Images HD/oilAndGasBanner.jpg";
import "./oilAndGas.css";
import Card from "../Card";

function oilAndGas() {
  return (
    <div className="oil__and__gas">
      <img src={mainImage} alt="" className="mainImage" />
      <div className="gray">
        <div className="content">
          <p>
            The hydrocarbon industry constitutes of Upstream, Midstream and
            Downstream sectors. Klengas caters to all three sectors for
            filtration and separation needs from Exploration & Production to Oil
            & Gas processing stations to refineries to petrochemicals to
            fertilizers.{" "}
          </p>
          <p>
            Exploration & Production industry's primary applications are brine
            filtration and lube oil filtration. The brine is used for well
            completion and well work over. For formation protection, filtered
            brine down to 2 micron is a necessity. Along with fresh brine,
            re-circulated brine/produced water treatment is also a major
            application where filtration is pressed in to service. For all lube
            oil / hydraulic oil systems used in the rigs, a robust lube oil
            filtration systems, keeps the hydraulics running for longer times.{" "}
          </p>
          <p>
            Oil & Gas Processing stations separate crude oil, produced water and
            associated gas from well fluid. The crude oil is further purified
            and made transportable to nearest refinery, the natural gas is
            dried, compressed and transported to either consumers or gas
            injection wells for tertiary EOR or Gas Turbine Power Generation
            plants. These stations use filtration for produced water, natural
            gas filtration, glycol filtration, amine filtration, process water
            and compressed air.{" "}
          </p>
          <p>
            Crude Oil Petroleum Refinery is the largest midstream industry. They
            focus on value generation from crude oil by utilizing the latest
            technologies of hydrocarbon separation. Klengas serves the refining
            applications such as amine sweetening unit, glycol dehydration unit,
            Water treatment plants, sour water treatment unit, diesel hydro
            desulphurization unit, hydro-treating unit etc.{" "}
          </p>
        </div>
          <h3 className="application">APPLICATIONS</h3>
          <h4 className="application ong">Refineries</h4>
          <div className="applications">
            <Card
              title="AMINE SWEETENING (RICH AMINE & LEAN AMINE)"
              img={mainImage}
              content=" Amine systems tend to foam due to presence of solids and liquid
          hydrocarbons in the circulating stream. Liquid hydrocarbons are
          removed using activated carbon beds, however, solids need constant
          removal to avoid build-up. Solids lead to foaming in the contactor,
          which in turn leads to carryover of amine and/or reduction in
          processing capacity of contactor. High efficiency and high volume
          filtration products from Klengas can help reduce/eliminate foaming
          from amine systems due to solids."
            />
            <Card
              img={mainImage}
              title="SOUR WATER CARBON/ COKE FINES"
              content=" Sour water stripper columns have packings which tend to get plugged due to solids and corrosion products from the hydrotreater/DHDS stream. High volume high efficiency filters from Klengas help reduce drastically the solid content in the stripper column thereby allowing to utilize its processing capacity to the maximum."
            />
            <Card
              img={mainImage}
              title="FINE PARTICULATES IN PRODUCT / WHITE FUELS FILTRATION / TANK FARM
              PRODUCT FILTER"
              content="Suspended solids in the final refinery product/white fuels lead to
              off-spec product quality during inspection/testing. To eliminate
              the solids from white fuels, Klengas offers various media
              depending on compatibility for clarification of white fuels/final
              products of the refinery prior to despatch. These are utilized in
              the tank farms/refinery battery limit discharge pumping systems."
            />
            <Card
              img={mainImage}
              title="CATALYST BED PROTECTION (DHDS/NHT/DHDT/MERCURY GUARD BED ETC.)"
              content="
              Diesel/Naphtha/Kerosene stream prior to
              hydrotreating/desulphurization have to be cleaned up to avoid
              solids from plugging the catalyst bed. Klengas designs and caters
              to these applications with a range of media from polypropylene to
              polyester to glass fibre in high volume product configuration."
            />
            <Card
              img={mainImage}
              title="FUEL GAS FILTRATION"
              content="
              Refinery fuel gas contains pipe scale, rust and associated solids
              which needs to be removed before that enter the burner system. Due
              to the need of the hour to reduce SOx and NOx emissions, the
              burners apertures have reduced, thus requiring higher protection
              from solids to avoid burner tip erosion/flame distortion. Klengas
              offers filters in both polypropylene and glass fibre depending on
              RFG composition."
            />
            <Card
              img={mainImage}
              title="REVERSE OSMOSIS GUARD FILTER"
              content="
              Reverse Osmosis (RO) membranes manufacturers specify a certain
              range of inlet SDI levels which need to be maintained to have
              minimal reject and maximum onstream time before chemical cleaning.
              The inlet SDI can be maintained using polypropylene depth/pleated
              filters depending on inlet water quality to be treated. Klengas
              offers them in both small volume and high volume filtration
              products for techno-economic optimization."
            />

            <Card
              img={mainImage}
              title="COMPRESSED AIR"
              content="Compressed air used in plants for process sensitive instruments
              like control valve should be devoid of solids to avoid aperture
              plugging and improper response to signals resulting on improper
              opening / closing of valve than needed value. Klengas offers
              economically designed compressed air filtration solutions having
              minimal pressure drop and maximum onstream service life."
            />
            <Card
              img={mainImage}
              title="RECYCLE GUARD FILTER / COMPRESSOR PROTECTION"
              content="
              In hydrotreaters/desulphurization units, the unreacted hydrogen is
              recycled through a makeup reciprocating compressor, the unreacted
              hydrogen usually contains solids which end up fouling the inlet
              and outlet compressor valves. Klengas offers solution for removal
              of solids from recycle streams using polypropylene pleated
              filters."
            />
            <Card
              img={mainImage}
              title="PLATE HE GUARD FILTER"
              content="Plate heat exchangers are sensitive to solid contamination.
              Klengas offers optimal filtration solutions utilizing glass
              fibre/polypropylene filters sized for the application."
            />
            <Card
              img={mainImage}
              title="THERMIC FLUID FILTER"
              content="
              Thermic fluid plants are susceptible of solids built up, mostly
              carbonized products of thermic fluids during the process cycle.
              Klengas offers high temperature resistance glass fibre filtration
              solution to remove/reduce the solids from the circulating thermic
              fluid system."
            />
          </div>
          <h4 className="application ong">Oil And Gas</h4>
          <div className="applications">
            <Card
              img={mainImage}
              title="GLYCOL DEHYDRATION UNIT FILTER"
              content="Glycol systems tend to foam due to presence of solids and liquid hydrocarbons in the circulating stream. Liquid hydrocarbons are removed using activated carbon beds, however, solids need constant removal to avoid build-up. Solids lead to foaming in the contactor, which in turn leads to carryover of glycol and/or reduction in processing capacity of contactor. High efficiency and high volume filtration products from Klengas can help reduce/eliminate foaming from glycol systems due to solids."
            />
            <Card
              img={mainImage}
              title="INJECTION WATER UNIT"
              content="Water for injection in the secondary recovery is pumped in the formation. The formation pore size is studied prior to deciding the filtration needs. Generally a formation opening of 20-50 micron needs 2-5 micron filtration protection. Klengas sizes the system optimally for enhanced reservoir protection for maximizing crude oil production and operational life."
            />
            <Card
              img={mainImage}
              title="PRODUCED WATER UNIT"
              content="Produced water contains crude oil, solids, cement cuttings and other loads of impurities. Due to water conservation need of the industry, the produced water needs to be filtered using high volume filtration products down to 2 micron before they can be re-injected in the reservoirs."
            />
            <Card
              img={mainImage}
              title="COMPRESSOR PROTECTION"
              content="The reciprocating compressor inlet and outlet valves are sensitive to solids and liquids carried over. They lead to valve cover erosion and thus leading to leakage resulting in lower discharge pressure or incomplete compression/bypass/reduction in compression volume. Klengas offers solution for removal of solids from recycle streams using polypropylene/glass fibre pleated/depth filters."
            />
            <Card
              img={mainImage}
              title="GAS TURBINE PROTECTION"
              content="Gas turbines used for power generation/drivers for gas compressors, burn natural gas/naphtha at high temperatures and have high rotating speeds in thousands of RPM. Any ingress of solids during this operation, results in denting/scarring of blades of the gas turbine. Over a period of time, these blades tend to imbalance and result in premature/unscheduled shut down. Klengas offers right sized filters for this application with minimal clean pressure drop for optimal operation of gas turbine."
            />
            <Card
              img={mainImage}
              title="DRY GAS FILTRATION"
              content="Dry gas can contain pipe scale, rust and associated solids which needs to be removed before that enter the gas pipeline for transportation/utilization. Klengas offers filters in both polypropylene, glass fibre or metallic filters depending on gas composition."
            />
            <Card
              img={mainImage}
              title="PROCESS & WASTE WATER"
              content="Process water and waste water requires clean up from solids as they lead to contamination in the process/reactions/units. The waste water treatment plant has reverse osmosis which needs protection from solids as per OEM guidelines in terms of SDI. This is achieved by designing optimal filtration systems having longer onstream life and lower clean pressure drops."
            />
            <Card
              img={mainImage}
              title="LUBE OIL OFFLINE PURIFICATION"
              content="Lubricating and hydraulic oils are used in various equipment from compressors to gas turbines to blowers to pumps to transformers. These oils are supposed to work for more than 10+ years provided they are kept clean using solid, water, gas removal systems termed as lube oil conditioning purifiers. You can see detailed information in our product details which specifically cater to this application."
            />
          </div>
        </div>
    </div>
  );
}

export default oilAndGas;
