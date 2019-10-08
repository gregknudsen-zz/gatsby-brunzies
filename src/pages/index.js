import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <section className="page-section about-section bg-primary" id="hours">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-white text-center about-hours">
                <h1 className="text-shadow mt-0">Hours</h1>
                <hr className="divider my-4"/>
                <h3 className="text-shadow mt-5">Sunday-Thursday</h3>
                <h3 className="text-right text-shadow">4pm - Midnight</h3>
                <h3 className="text-shadow mt-5">Friday-Saturday</h3>
                <h3 className="text-right text-shadow">4pm - 2am</h3>
                <hr className="divider my-4"/>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#menu"
                  onClick={Scroller.handleAnchorScroll}>See Our Menu!</a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section menu-section" id="menu">
          <div className="text-center container-fluid p-0">
          <a className="mb-5 btn btn-primary btn-xl js-scroll-trigger" href="#specials"
                  onClick={Scroller.handleAnchorScroll}>See Daily Specials!</a>
            <h1 className="text-center text-shadow text-white mt-0">Menu</h1>
            <hr className="divider my-4"/>
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="menus/menu-page-1.jpg" onClick={this.handlePortfolioClick.bind(this, 6)}>
                  <Img fluid={this.props.data.images.edges[6].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-name">
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="menus/menu-page-2.jpg" onClick={this.handlePortfolioClick.bind(this, 7)}>
                  <Img fluid={this.props.data.images.edges[7].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption p-3">
                    <div className="project-name">
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section text-white" id="specials">
          <div className="container text-center specials">
            <h1 className="text-center text-white text-shadow mt-0">Daily Drink Specials</h1>
            <hr className="divider my-4"/>
            <h3 className="text-shadow text-left mt-3">Monday-Saturday: 9-11pm</h3>
            <h3 className="text-shadow text-right mt-5">1/2 off all drafts!</h3>
            <h3 className="text-shadow text-right">1/2 off all well drinks!</h3>
            <hr className="divider my-4"/>
              <a className="btn btn-primary btn-xl mt-4 js-scroll-trigger" href="#contact"
                    onClick={Scroller.handleAnchorScroll}>Contact Us!</a>
          </div>
          <h1 className="text-center text-white text-shadow photo-header" id="photo-header">Photo Gallery</h1>
        </section>

        <section id="photos">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1-beer-overlay.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                    </div>
                    <div className="project-name">
                      {/* Beer */}
                      {/* Project Name */}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2-bottles2-overlay.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                    </div>
                    <div className="project-name">
                      {/* Booze */}
                      {/* Project Name */}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3-kris-ben-overlay.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                    </div>
                    <div className="project-name">
                      {/* Ben &amp; Kris */}
                      {/* Project Name */}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="images/portfolio/fullsize/4-stools-overlay.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                  <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                    </div>
                    <div className="project-name">
                      {/* Project Name */}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5-table-overlay.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      {/* Category */}
                    </div>
                    <div className="project-name">
                      {/* Project Name */}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6-bottles4-overlay.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      {/* Category */}
                    </div>
                    <div className="project-name">
                      {/* Project Name */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center text-shadow">
              <div className="text-white text-center contact-info">
                <h1 className="text-shadow mt-0">Contact Us!</h1>
                <hr className="divider my-4"/>
                <h3 className="mt-5 text-left">470 Philadelphia St</h3>
                <h3 className="text-left contact-info-city">Indiana, PA 15701</h3>
                <h4 className="text-right mt-3">(Right next to to Subs N' Suds!)</h4>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 text-white text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 mt-5"></i>
                <div className="text-white">+1 (724) 349-2770</div>
                <hr className="divider my-4"/>
                <p className="mt-5 row align-items-center justify-content-center social-links">
                  Follow us on <a href="https://www.facebook.com/brunzies.bar?fref=ts"><i className="fab fa-3x fa-facebook social-icons"></i></a>
                  or
                  <a href="https://twitter.com/KrisJBruns"><i className="fab fa-3x fa-twitter social-icons"></i></a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
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
