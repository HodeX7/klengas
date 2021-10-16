import React from 'react'
import Navbar from './Navbar'
import CarouselContainer from './carouselContainer'
import Contact from './Contact'
import HeroSection from './HeroSection'
import OilAndGas  from './Industries/oilAndGas'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './About'
import Footer from './Footer'
import Pharmaceuticals from './Industries/Pharmaceuticals'
import FoodAndBeverages from './Industries/FoodAndBeverages'
import Chemicals from "./Industries/Chemicals"
import PowerGeneration from './Industries/PowerGeneration'
import WaterProcessing from './Industries/WaterProcessing'
import BagFilter from './Products/BagFilter'
import Coalescers from './Products/Coalescers'
import DepthFilter from './Products/DepthFilter'
import LargeDiameterFilter from './Products/LargeDiameterFilter'
import MetalFilter from './Products/MetalFilter'
import PleatedFilters from './Products/PleatedFilters'
import Industries from './Industries/Industries'
import Clients from '../Clients/Clients'

function MainPage() {
    return (
        <Router>
        <div>
            <Navbar />
            <Switch>
                    <Route path="/" exact component={merged} />
                    <Route path="/contact"  component ={Contact} />
                    <Route path="/services"  component ={Contact} />
                    <Route path="/industries"  component={Industries} />
                    <Route path="/aboutus"  component={About} />
                    <Route path="/clients"  component={Clients} />

                    {/* industries */}
                    <Route path="/pharmaceuticals"  component={Pharmaceuticals} />
                    <Route path="/oilAndGas"  component={OilAndGas} />
                    <Route path="/foodandbeverages"  component={FoodAndBeverages} />
                    <Route path="/chemicals"  component={Chemicals} />
                    <Route path="/powergeneration"  component={PowerGeneration} />
                    <Route path="/waterprocessing"  component={WaterProcessing} />

                    {/* products */}
                    <Route path="/bagfilters"  component={BagFilter} />
                    <Route path="/skidsandpackages"  component={DepthFilter} />
                    <Route path="/largediameterfilters"  component={LargeDiameterFilter} />
                    <Route path="/metalfilters"  component={MetalFilter} />
                    <Route path="/pleatedfilters"  component={PleatedFilters} />
                    <Route path="/coalescers"  component={Coalescers} />

            </Switch>
            <Footer />
        </div>
        </Router>
    )
}

function merged(){
    return(
        <>
            <CarouselContainer/>
            <HeroSection />
        </>
    )
}

export default MainPage