import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    }
    this.handlePictureClick = this.handlePictureClick.bind(this)
    this.setModal = this.setModal.bind(this)
  }

  popBalance() {
    // Replace with 315 if CAPTCHA is disabled.
    let width = 270
    let height = 395
    let left,
      top,
      menubar,
      toolbar,
      status,
      resizable = 0
    const merchantID = 3137988

    window.open(
      `https://wwws.givex.com/Merchant_pages/${merchantID}`,
      "balanceWindow",
      width,
      height,
      left,
      top,
      menubar,
      toolbar,
      status,
      resizable
    )
  }

  handlePictureClick(index, e) {
    e.preventDefault()
    this.setModal(true, index)
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <section className="page-section about-section bg-primary" id="hours">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-white text-center about-hours">
                <h1 className="text-shadow mt-0 hours-emphasis special-elite">
                  Hours
                </h1>
                {/* <hr className="divider my-4"/> */}
                {/* <h5 className="text-left my-4"><em>From the Brunzies <a className="text-shadow" href="https://www.facebook.com/brunzies.bar?fref=ts">facebook</a> page</em></h5> */}
                <div className="covid-container">
                  <div className="text-left text-shadow">
                    <hr />
                    <p className="about-hours">Hours for Brunzies</p>
                    <p className="text-right hours-text my-3">4pm-Midnight</p>
                    <p className="text-right hours-text my-3">Closed Monday</p>
                    <hr />
                    <p className="about-hours">Hours for SUBS 'n SUDS</p>
                    <p className="text-right hours-text my-3">11am-Midnight</p>
                    <p className="text-right hours-text my-3">Closed Monday</p>
                    <hr />
                    <p>
                      Takeout available! <br /> Please call ahead to place your
                      order!
                    </p>
                    <p className="text-center">
                      <a href="tel:724-349-2770">(724) 349-2770</a>
                    </p>
                    <p className="text-right">
                      We will continue to keep everyone posted on any changes.{" "}
                      <br />
                      <br />
                      Stay safe, friends!
                    </p>
                  </div>
                </div>
                {/* <h3 className="text-shadow mt-5">Sunday-Thursday</h3>
                  <h3 className="text-right text-shadow">4pm - Midnight</h3>
                  <h3 className="text-shadow mt-5">Friday-Saturday</h3>
                  <h3 className="text-right text-shadow">4pm - 2am</h3> */}
                <hr className="divider my-4" />
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger"
                  href="#menu"
                  onClick={Scroller.handleAnchorScroll}
                >
                  See Our Menu!
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section menu-section" id="menu">
          <div className="text-center container-fluid p-0">
            <a
              className="mb-5 btn btn-primary btn-xl js-scroll-trigger"
              href="#specials"
              onClick={Scroller.handleAnchorScroll}
            >
              See Daily Specials!
            </a>
            <h1 className="text-center text-shadow text-white mt-0 special-elite">
              Menu
            </h1>
            <hr className="divider my-4" />
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="menus/brunzies_dec_2021_p1.jpg"
                  onClick={this.handlePictureClick.bind(this, 6)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[6].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-name"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="menus/brunzies_dec_2021_p2.jpg"
                  onClick={this.handlePictureClick.bind(this, 7)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[7].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-name"></div>
                  </div>
                </a>
              </div>
            </div>
            <hr className="divider my-4" />
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="menus/subs_dec_2021_p1.jpg"
                  onClick={this.handlePictureClick.bind(this, 8)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[8].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-name"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="menus/subs_dec_2021_p2.jpg"
                  onClick={this.handlePictureClick.bind(this, 9)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[9].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-name"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section text-white text-center" id="specials">
          <div className="container text-center specials covid-container">
            <h1 className="text-center text-white text-shadow mt-0">
              Daily Drink Specials
            </h1>
            <hr className="divider my-4" />
            <h3 className="text-shadow text-left mt-3">
              Tuesday-Saturday: <br />
              9-11pm
            </h3>
            <h3 className="text-shadow text-right mt-5">1/2 off all drafts!</h3>
            <h3 className="text-shadow text-right">$2.50 well drinks!</h3>
            <hr className="divider my-4" />
          </div>
          <a
            className="btn btn-primary btn-xl mt-4 js-scroll-trigger"
            href="#contact"
            onClick={Scroller.handleAnchorScroll}
          >
            Contact Us!
          </a>
          <h1
            className="text-center text-white text-shadow photo-header"
            id="photo-header"
          >
            Photo Gallery
          </h1>
        </section>

        <section id="photos">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1-beer-overlay.jpg"
                  onClick={this.handlePictureClick.bind(this, 0)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[0].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50"></div>
                    <div className="project-name">
                      {/* Beer */}
                      {/* Project Name */}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/2-bottles2-overlay.jpg"
                  onClick={this.handlePictureClick.bind(this, 1)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[1].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50"></div>
                    <div className="project-name">
                      {/* Booze */}
                      {/* Project Name */}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/3-kris-ben-overlay.jpg"
                  onClick={this.handlePictureClick.bind(this, 2)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[2].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50"></div>
                    <div className="project-name">
                      {/* Ben &amp; Kris */}
                      {/* Project Name */}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="images/portfolio/fullsize/4-stools-overlay.jpg"
                  onClick={this.handlePictureClick.bind(this, 3)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[3].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50"></div>
                    <div className="project-name">{/* Project Name */}</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/5-table-overlay.jpg"
                  onClick={this.handlePictureClick.bind(this, 4)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[4].node.childImageSharp.fluid
                    }
                  />
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/6-bottles4-overlay.jpg"
                  onClick={this.handlePictureClick.bind(this, 5)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[5].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption p-3"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <h1 className="text-shadow text-white text-center mt-0 special-elite">
              Contact Us!
            </h1>
            <hr className="divider my-4" />
            <div className="row align-items-center justify-content-center text-shadow covid-container">
              <div className="text-white text-center contact-info">
                <i className="fas fa-phone fa-3x mb-4"></i>
                <h3 className="text-white mb-4">
                  <a href="tel:724-349-2770"> +1 (724) 349-2770</a>
                </h3>
                <hr className="divider my-4" />
                <h2 className="mt-5">470 Philadelphia St</h2>
                <h2 className="contact-info-city">Indiana, PA 15701</h2>
              </div>
              <div className="text-white">
                <Map />
                <h4 className="text-center mt-3">
                  <em>
                    On the corner of Philly &amp; 5th St <br />
                    Right next to to Subs N' Suds!
                  </em>
                </h4>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8 col-sm-12 col-lg-6 text-white text-center mb-5 mb-lg-0">
                <p
                  className="mt-5 row align-items-center justify-content-center social-links"
                  id="follow"
                >
                  Follow us on
                </p>
                <p className="mt-5 row align-items-center justify-content-center social-links">
                  <a href="https://www.facebook.com/brunzies.bar?fref=ts">
                    <i className="fab fa-3x fa-facebook social-icons"></i>
                  </a>
                  or
                  <a href="https://twitter.com/KrisJBruns">
                    <i className="fab fa-3x fa-twitter social-icons"></i>
                  </a>
                </p>
                {/* <hr className="divider my-4"/> */}
                <div className="giftcard mt-4 text-right text-white-75">
                  <p>
                    Have a giftcard?
                    <br />
                    Check your balance{" "}
                    <a href="#" onClick={this.popBalance}>
                      HERE
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal
          show={this.state.modalShow}
          onHide={() => this.setModal(false, 0)}
        >
          <PortfolioCarousel
            images={this.props.data.images.edges}
            current={this.state.modalCurrent}
          />
        </PortfolioModal>
      </Layout>
    )
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "portfolio/fullsize/*.jpg" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
