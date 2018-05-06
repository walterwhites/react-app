import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Navbar color="indigo" dark expand="md" scrolling>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.5/css/mdb.min.css" />
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.5/js/mdb.min.js"> </script>
            <NavbarBrand href="/">
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                            <NavItem active>
                                <NavLink to="/">React Beatles app</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/songs">Songs</NavLink>
                            </NavItem>
                            <NavItem>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle nav caret>Singer</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href="#">Paul Mc cartney</DropdownItem>
                                        <DropdownItem href="#">John lennon</DropdownItem>
                                        <DropdownItem href="#">George Harrisson</DropdownItem>
                                        <DropdownItem href="#">Ringo Starr</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                        <NavItem>
                        <form className="form-inline md-form mt-0">
                            <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                        </form>
                        </NavItem>
                </NavbarNav>
                </Collapse>
        </Navbar>
        );
    }
}

export default Navigation;