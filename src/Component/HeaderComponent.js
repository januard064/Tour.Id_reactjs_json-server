import React, {Component} from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import logos from './komodo3.jpg';
import { NavLink } from 'react-router-dom';


class Header extends Component{


    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav =this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render(){
        return(
            <React.Fragment>
                <Navbar expand="md">   {/* expand md membuat agar navbar hanya muncul di screen yang medium ke xtra large */}
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} className="btn bg-white" />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Beranda
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/paket">
                                    <span className="fa fa-suitcase fa-lg"></span> Paket
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/custom">
                                    <span className="fa fa-list-alt fa-lg"></span> Custom
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/promo">
                                    <span className="fa fa-ticket fa-lg"></span> Promo
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/blog">
                                    <span className="fa fa-book fa-lg"></span> Blog
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to= "/transaksi">
                                    <span className="fa fa-user fa-lg"></span> Profile
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                    </Navbar>

                    <Jumbotron style={{backgroundImage : `url(${logos})`}}>
                        <div className="container" >
                            <div className="row row-header">
                                <div className="col-12 col-sm-6 square square-lg ">
                                    <h1 className="brand">Tour.Id</h1>
                                    <p>We lead you to the wonderful Indonesia</p>
                                    {/* <img src="assets/images/komodo.jpg" height="100" width="200"  alt="gambar" /> */}
                                </div>
                            </div>
                    </div>
                    </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;