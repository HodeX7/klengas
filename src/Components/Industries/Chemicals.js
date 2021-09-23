import React from 'react'
import mainImage from "./../../assets/images/oilAndGas.png";
import "./oilAndGas.css";
import Card from "../Card";
function Chemicals() {
    return (
        <div className='oil__and__gas'>
            <img src={mainImage} alt="" className="mainImage" />
            <div className="gray"></div>
            <div className='content'>
                <p>Chemical industry is a large expanse of variants which need purification at various stages in manufacturing. Not only in the liquids, but also in the gaseous stages for catalyst protection or prevention of poisoning of essentials. Filters have to handle extremely corrosive and abrasive liquids while maintaining their integrity and still delivering the performance on consistent basis.</p>
            </div>
            <h3 className="application">APPLICATIONS</h3>
            <h4 className="application ong">Chemicals</h4>
            <div className='applications'>
                <Card img={mainImage} title='Process & Waste Water' content='Process water and waste water requires clean up from solids as they lead to contamination in the process/reactions/units. The waste water treatment plant has reverse osmosis which needs protection from solids as per OEM guidelines in terms of SDI. This is achieved by designing optimal filtration systems having longer onstream life and lower clean pressure drops.' />
                <Card img={mainImage} title='Catalyst Filtration' content='During a chemical reaction devised for a certain product, unwanted contamination lead to off spec product and/or by-products which reduce % yield and increase the cost of production. To avoid, proper filtration of raw material like process water, solvents etc keep away solid contamination from entering the reactor and help reactor to produce at maximum possible yield. These are also used at point of use, just upstream of reactor inlet.' />
                <Card img={mainImage} title='Reactor Bed Protection' content='Dry gas can contain pipe scale, rust and associated solids which needs to be removed before that enter the gas pipeline for transportation/utilization. Klengas offers filters in both polypropylene, glass fibre or metallic filters depending on gas composition.' />
                <Card img={mainImage} title='Product' content='Steam being highly corrosive has high possibility of carrying corrosion products, rust fines from the piping which may contaminate the point of use. Since the steam is used in array of applications, metal filters best filter steam for critical utilities/reactions to avoid poisoning/contamination.' />
                <Card img={mainImage} title='Steam' content='Suspended solids in the final product lead to off-spec product quality during inspection/testing. To eliminate the solids from final product, Klengas offers various media depending on compatibility for clarification of final product prior to despatch. These are utilized in the tank farms/loading/filling stations/pumping stations/transfer stations.' />
                <Card img={mainImage} title='Air/ Gas' content='Reactor beds are usually constituted of precious metals like Platinum on carbon or palladium on carbon, and like wise. Any unwanted solid contamination tend to poison the reactor bed and reduce the reactivity/catalytic activity of the bed resulting in lower yield or unwanted by products. Klengas designs and caters to these applications with a range of media from polypropylene to polyester to glass fibre in high volume product configuration. ' />
                <Card img={mainImage} title='Raw Materials/ Feed' content='Precious metal catalyst used in dynamic reaction needs to be recovered post completion of reaction. This catalyst is either directly reused for next batch or is regenerated for re-use. Efficient metallic filters do help in recovering the catalyst. Absence of efficient filtration system results in passing the catalyst  downstream thus resulting in catalyst loss.' />
            </div>
        </div>
    )
}

export default Chemicals
