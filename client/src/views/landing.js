import React, { Component } from 'react';

import '../assets/css/bootstrap.min.css';
import '../assets/css/demo.css'
import '../assets/css/nucleo-icons.css'
import '../assets/css/paper-kit.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import Background from '../assets/img/darkbackground.png'
import Logo from '../assets/img/netCVlogo.png'
import SaarahPic from '../assets/img/saarah.jpeg'
import PrasadPic from '../assets/img/prasadcopy.jpg'

class Landing extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-expand-lg fixed-top" color-on-scroll="300">
              <div className="container">
                  <div className="navbar-translate">
                      <a className="navbar-brand"><img src={Logo} style={{height: 50,width: 250}}/></a>
                      <button className="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-bar"></span>
                          <span className="navbar-toggler-bar"></span>
                          <span className="navbar-toggler-bar"></span>
                      </button>
                  </div>
                  <div className="collapse navbar-collapse" id="navbarToggler">
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                              <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="" target="_blank">
                                  <FontAwesomeIcon icon={faTwitter} size="lg" color="white"/>
                                  <p className="d-lg-none">Twitter</p>
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="" target="_blank">
                                  <FontAwesomeIcon icon={faFacebook} size="lg" color="white"/>
                                  <p className="d-lg-none">Facebook</p>
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="" target="_blank">
                                  <FontAwesomeIcon icon={faInstagram} size="lg" color="white"/>
                                  <p className="d-lg-none">Instagram</p>
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" rel="tooltip" title="Star on GitHub" data-placement="bottom" href="" target="_blank">
                                  <FontAwesomeIcon icon={faGithub} size="lg" color="white"/>
                                  <p className="d-lg-none">GitHub</p>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>

          <div className="page-header" data-parallax="true" style={{backgroundImage: "url(" + Background + ")",}}>
              <div className="filter"></div>
              <div className="container">
                  <div className="motto text-center">
                      <br />
                      <br />
                      <h1>Redesign your CV</h1>
                      <h3>Connecting the Future</h3>
                      <br />
                  </div>
              </div>
          </div>
          <div className="main">
              <div className="section text-center">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-8 ml-auto mr-auto">
                              <h2 className="title">Job Seekers</h2>
                              <h5 className="description">At NetCVwork, job seekers are provided an easy to use environment for finding their future careers. If you're a job seeker, we provide you with a wide range of features which could potentially help you to find the right job.</h5>
                              <br/>
                          </div>
                      </div>
                      <br/><br/>
                      <div className="row">
                          <div className="col-md-3">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-layout-11"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">CV Building</h4>
                                      <p className="description">Build your own custom CVs using our builder interface.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-chart-bar-32"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">Proffesion-based CV</h4>
                                      <p className="description">We offer CV designs, templates, and suggestions based on your target profession, so that you may get that job you're striving for. </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-app"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">Templates</h4>
                                      <p className="description">We offer a library with a wide range of resume templates to choose from.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-paper"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">CV Conversion</h4>
                                      <p className="description">We help to convert your original CV files to an online CV which is readily available for employers to view.</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>

              <div className="section section-dark text-center">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-8 ml-auto mr-auto">
                              <h2 className="title">Employers</h2>
                              <h5 className="description">We aim to bring employers one step closer to finding the next perfect employee. To make this possible, we give you an easy to use environment with seamless navigation through a wide range of candidates and potential colleagues.</h5>
                              <br/>
                          </div>
                      </div>
                      <br/><br/>
                      <div className="row">
                          <div className="col-md-4">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-glasses-2"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">Profession-based Searches</h4>
                                      <p className="description">We simplify the process of finding your next employee by linking the required skills to the profession.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-tablet-2"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">Profession-based Assesments</h4>
                                      <p>Get candidates to take preconfigured tests for the position which they are being hired for.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-atom"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">Highlights</h4>
                                      <p>We highlight skills and achivements for each CV in order to simplify the hiring process.</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>


              <div className="section  landing-section">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-8 ml-auto mr-auto">
                              <h2 className="text-center">Keep in touch?</h2>
                              <form className="contact-form" method="POST" action='/'>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <label>Name</label>
                                          <div className="input-group">
	                                        <span className="input-group-addon">
	                                            <i className="nc-icon nc-single-02"></i>
	                                        </span>
                                              <input type="text" className="form-control" placeholder="Name" id="name" name="name"/>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <label>Email</label>
                                          <div className="input-group">
											<span className="input-group-addon">
												<i className="nc-icon nc-email-85"></i>
											</span>
                                              <input type="email" name="email" className="form-control" placeholder="Email" id="email"/>
                                          </div>
                                      </div>
                                  </div>
                                  <label>Message</label>
                                  <textarea className="form-control" rows="4" placeholder="Tell us your thoughts and feelings..." name="message" id="message"></textarea>
                                  <div className="row">
                                      <div className="col-md-4 ml-auto mr-auto">
                                          <button type="submit" className="btn btn-danger btn-lg btn-fill">Send Message</button>
                                      </div>
                                      { window.location.hash === '#success' &&
                                      <div className="container" style={{paddingTop: 20}}>
                                        <div id="success" className="alert alert-success mx-auto" role="alert">
                                          <strong>Message Sent!</strong>
                                        </div>
                                      </div>
                                      }
                                      { window.location.hash === '#error' &&
                                      <div className="container" style={{paddingTop: 20}}>
                                        <div id="error" className="alert alert-danger mx-auto" role="alert" style={{paddingTop: 20}}>
                                          <strong>Oops!</strong> An error occured while submitting the form. Please try again later.
                                        </div>
                                      </div>
                                      }
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Landing;
