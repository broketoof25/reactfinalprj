import {Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem,} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import LogoImg from '../../src/app/assets/img/Logo.png'

const Header = () => {


    return (
        <div>
            <Navbar>
                <NavbarBrand>
                    <img src={LogoImg}/>
                </NavbarBrand>

            </Navbar>

        </div>
 
    );
};

export default Header;