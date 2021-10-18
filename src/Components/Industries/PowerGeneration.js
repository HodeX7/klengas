import React from 'react'
import mainImage from "./../../assets/New Website Images HD/powerGenerationBanner.jpg";
import './oilAndGas.css'
import Card from '../Card'
function PowerGeneration() {
    return (
        <div className='oil__and__gas'>
        <img src={mainImage} alt="" className="mainImage" />
        <div className='gray'>
            <div className='content'>
                <p>Power Generation is done through Thermal, Hydro, Solar, Nuclear resources. In every and all modes of power generation, water is a critical resource.  Water is required to be purified in various forms. Steam condensate filtration of the right efficiency and removal rating, not only improves the heat recovery, but also reduces corrosion, wear and tear of internal components. Lube oil is another resource for the power generation industry. We keep the lube oil clean and away from dirt, water and gases if any by our lube oil purification system.</p>
            </div>
            <h3 className="application">APPLICATIONS</h3>
            <h4 className="application ong">Power Generation</h4>
            <div className='applications'>
                <Card img={mainImage} title='Hydraulic Oil' content = 'Off-line filters/ Kidney Loop filters are utilised to maintain cleanliness in the tank and system to avoid break-down maintenance in the plant. Depending on the cleanliness requirements of the system, 1micron to 12 micron filters are recommended' />
                <Card img={mainImage} title='Pressure line filters, Off-line filters (Kidney Loop Filters)' content = 'Servo Valves dynamic clearances are  1- 4 microns (Usually 3microns) and particles above these sizes can cause wear and sluggish performance of servo valves. Hence, in Pressure line, 1- 3 micron filters absolute rated are recommended to maintain cleanliness of ISO 14/11' />
                <Card img={mainImage} title='Turbine Lube Oil ' content = 'To maintain cleanliness level of iso 15/12 or 14/11, usually 3 micron filters in pressure line and 5 - 12 micron in off line filtration are recommended ' />
                <Card img={mainImage} title='Bearing Lube Oil' content = 'To maintain cleanliness level of ISO16/13, 6 - 12 micron filters are used in off-line ' />
                <Card img={mainImage} title='Gear Box oil & Auxillary circuits' content = 'To maintain cleanliness level of ISO16/13, 6 - 12 micron filters are used in off-line ' />
                <Card img={mainImage} title='EHC fluid (Turbine control fluid)' content = 'To maintain cleanliness level of iso 15/12 or 14/11, usually 3 micron filters in pressure line and 5 - 12 micron in off line filtration are recommended ' />
                <Card img={mainImage} title='Moisture control using Vacuum Dehydration' content = 'It is advisable to maintain water content at 50% of saturation levels which is possible using vacuum dehydration units' />
                <Card img={mainImage} title='Acid Control Unit' content = 'It is recommended to maintain acidity (TAN) value below 0.15mg of KOH/ gm of oil for which KGT Acid Control units are very effective' />
                <Card img={mainImage} title='Varnish Control Unit' content = 'Varnish formation which generally happens due to thermal stresses in the system, causes sluggish response of control systems. KGT Varnish Control unit can prevent or solve varnish problem in the turbine lube oil system.' />
                <Card img={mainImage} title='High Flow Filtration products (Polymeric/ Metal)' content = 'To remove and maintain Fe content in condensate, KGT recommends using High Flow filtration products either polymerci or metallic depending on the temperature and other compatibility' />
                <Card img={mainImage} title='PP/ GF/ Metal filters' content = 'To avoid erosion of the turbine blades it is recommended to use fine filter for fuel to arrest the contaminants' />
                <Card img={mainImage} title='Polymeric/ Metal filters' content = 'For water filtration, high flow or conventional polymeric filters are recommended to maintain clean water.' />
            </div>
        </div>
        </div>
    )
}

export default PowerGeneration
