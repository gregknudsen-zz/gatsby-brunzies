import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" expand="lg" collapseOnSelect={true}>
          <div className="container">
            <a className={"navbar-brand js-scroll-trigger " + (this.props.hideLogo ? '' : 'hidden')} onClick={Scroller.handleAnchorScroll}>
              <h1 className="main-logo" href="#page-top"></h1>
            </a>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                          items={["hours", "menu", "photos", "contact"]}
                          currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#hours" onClick={Scroller.handleAnchorScroll}>Hours</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#menu" onClick={Scroller.handleAnchorScroll}>Menu</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#photo-header" onClick={Scroller.handleAnchorScroll}>Photos</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>Contact</Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white">Brunzies</h1>
                <hr className="divider my-4"/>
              </div>
              <div className="col-lg-8 align-self-baseline">
                {/* <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites
                  using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p> */}
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#hours" onClick={Scroller.handleAnchorScroll}>View Hours!</a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
