import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';


/*
<Collapse isOpen={this.state.isNavOpen} navbar>
                            
                          <Nav className="ml-auto" navbar>
                          <Nav navbar>
                               <NavItem>
                                  <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                       <span className="fa fa-list fa-lg"></span> Menu
                                   </NavLink>
                                   </NavItem>
                                   <NavItem>
                                     <NavLink className="nav-link" to="/contactus">
                                         <span className="fa fa-address-card fa-lg"></span> Contact Us
                                      </NavLink>
                               </NavItem>
                            </Nav>
                          </Nav> 
                        </Collapse>
*/
class Header extends Component {

    constructor(props) {
        super(props);
        this.state={
            isNavOpen: false,
           
        };
        this.toggleNav = this.toggleNav.bind(this);
       
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <React.Fragment>
                <Navbar expand="md" className="navbar-light">
                    <div className="container-fluid">
                        <NavbarToggler className="m-2" onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto brand" href="/">
                            Ryan Kennedy
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            
                          <Nav className="ml-auto" navbar>
                            <Nav navbar>
                               <NavItem>
                                  <NavLink className="nav-link" to="/portfolio">
                                        <span className="fa fa-folder-open fa-lg"></span> Portfolio
                                    </NavLink>
                                </NavItem>
                            </Nav>
                          </Nav> 
                        </Collapse>
                        
                        
                    </div>
                </Navbar>
                
            </React.Fragment>
        );
    }



}

export default Header;