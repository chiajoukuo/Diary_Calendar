import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { IoLogoGithub, IoMdPerson } from "react-icons/io";

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    // const authLinks = (
    //   <Fragment>
    //     <NavItem>
    //       <span className="navbar-text mr-3">
    //         <strong>{user ? `Welcome ${user.name}` : ''}</strong>
    //       </span>
    //     </NavItem>
    //     <NavItem>
    //       <Logout />
    //     </NavItem>
    //   </Fragment>
    // )

    // const guestLinks = (
    //   <UncontrolledDropdown nav inNavbar>
    //     <DropdownToggle nav caret>
    //       <IoMdPerson size={25} />
    //     </DropdownToggle>
    //     <DropdownMenu right>
    //       <DropdownItem>
    //         <RegisterModal />
    //       </DropdownItem>
    //       <DropdownItem divider />
    //       <DropdownItem>
    //         <LoginModal />
    //       </DropdownItem>
    //     </DropdownMenu>
    //   </UncontrolledDropdown>
    // )

    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href='/'>Diary Calendar</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/diary" style={{fontSize: "1.2rem"}}>Diary</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/app" style={{fontSize: "1.2rem"}}>Calendar</NavLink>
                </NavItem>
              </Nav>
              <Nav className='ml-auto' navbar>
                {/* {isAuthenticated ? authLinks : guestLinks} */}
                <NavItem>
                  <NavLink href="https://github.com/chiajoukuo/Diary_Calendar">
                    <IoLogoGithub size={25} />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   auth: state.auth
// })

// export default connect(mapStateToProps, null)(AppNavbar);
export default AppNavbar;