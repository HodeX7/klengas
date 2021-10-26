import React, { useState } from "react";
import "./Navbar.css";
// import StoreIcon from "@material-ui/icons/Store";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
// import Menu from './Menu'
import KlengasLogo from '../assets/images/KlengasLogo.png'

//test karan
import {
  Menu,
  MenuItem,
  MenuButton,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css'

//
function Navbar() {
  const [showlinks, setShowlinks] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__leftside">
        {/* <StoreIcon className="store__logo" />
        <h3>KLENGAS</h3> */}
        <Link to="/">
          <img src={KlengasLogo} alt="" className="store__logo"  width="275
          " height="275"/>
        </Link>
      </div>

      <div className="navbar__rightside">
        <div className="links" id={showlinks ? "hidden" : ""}>
          <Link to="/">
            <a onClick={() => setShowlinks(!showlinks)}>Home</a>
            
          </Link>
          <Link to="/aboutus">
            <a onClick={() => setShowlinks(!showlinks)}>About Us</a>
            
          </Link>
          <Link >
              {/* <Menu name = 'Industries' option1="Industries" option2="Oil And Gas" option3="Pharma" option4="Food and Beverages"/> */}
              
              <Menu menuButton={<MenuButton className="menu__button">Industries</MenuButton>}>
                  <MenuItem> 
                    <Link onClick={() => setShowlinks(!showlinks)} to="/oilandgas">Oil and Gas</Link>
                  </MenuItem>
                  <MenuItem> 
                    <Link onClick={() => setShowlinks(!showlinks)} to="/pharmaceuticals">Pharmaceuticals</Link>
                  </MenuItem>
                  <MenuItem> 
                    <Link onClick={() => setShowlinks(!showlinks)} to="/foodandbeverages">Food and Beverages</Link>
                  </MenuItem>
                  <MenuItem> 
                    <Link onClick={() => setShowlinks(!showlinks)} to="/chemicals">Chemicals and Petrochemicals</Link>
                  </MenuItem>
                  <MenuItem> 
                    <Link onClick={() => setShowlinks(!showlinks)} to="/waterprocessing">Water Processing</Link>
                  </MenuItem>
                  <MenuItem> 
                    <Link onClick={() => setShowlinks(!showlinks)} to="/powergeneration">Power Generation</Link>
                  </MenuItem>
              </Menu>
          </Link>
          <Link >
          
            {/* <Menu name = 'Products' option1="Oil And Gas" option2="Pharma" option3="Food and Beverages"/> */}
            <Menu menuButton={<MenuButton className="menu__button">Products</MenuButton>}>
                  <MenuItem>
                    <Link onClick={() => setShowlinks(!showlinks)} to="/bagfilters">Bag Filters</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link onClick={() => setShowlinks(!showlinks)} to="/largediameterfilters">Large Diameter Filters</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link onClick={() => setShowlinks(!showlinks)} to="/metalfilters">Metal Filters</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link onClick={() => setShowlinks(!showlinks)} to="/pleatedfilters">Pleated Filters</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link onClick={() => setShowlinks(!showlinks)} to="/skidsandpackages">Filtration Skids and Packages</Link>
                  </MenuItem>
              </Menu>
          </Link>
          <Link to="/clients">
            <a onClick={() => setShowlinks(!showlinks)}>Clients</a>

          </Link>
          <Link to="/contact">
            <a onClick={() => setShowlinks(!showlinks)}>Contact Us</a>

          </Link>
        </div>
        <button className="btn" onClick={() => setShowlinks(!showlinks)}>
          <MenuIcon />
        </button>
      </div>
      {/* switch and routing */}
    </div>
  );
}

export default Navbar;
