import React, { Component } from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/demo.css'
import './assets/css/nucleo-icons.css'
import './assets/css/paper-kit.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import Background from './assets/img/darkbackground.png'
import Logo from './assets/img/netCVlogo.png'
import SaarahPic from './assets/img/saarah.jpeg'
import PrasadPic from './assets/img/prasadcopy.jpg'
import axios from 'axios';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         contact: { name: '',
    //             email: '',
    //             message: ''
    //             }
    //     };
    //
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // handleChange (propertyName, event) {
    //     const contact = this.state.contact;
    //     contact[propertyName] = event.target.value;
    //     this.setState({ contact: contact });
    // }
    //
    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.contact.name + 'email : ' + this.state.contact.email + 'message : ' + this.state.contact.message);
    //     event.preventDefault();
    // }
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url:"http://localhost:8881/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }
    resetForm(){
        document.getElementById('contact-form').reset();
    }
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
                              <h5 className="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>
                              <br/>
                                  <a href="#paper-kit" className="btn btn-danger btn-round">See Details</a>
                          </div>
                      </div>
                      <br/><br/>
                      <div className="row">
                          <div className="col-md-3">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-album-2"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">Beautiful Gallery</h4>
                                      <p className="description">Spend your time generating new ideas. You don't have to think of implementing.</p>
                                      <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-bulb-63"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">New Ideas</h4>
                                      <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>
                                      <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-chart-bar-32"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">Statistics</h4>
                                      <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>
                                      <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-sun-fog-29"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">Delightful design</h4>
                                      <p>Find unique and handmade delightful designs related items directly from our sellers.</p>
                                      <a href="#pkp" className="btn btn-link btn-danger">See more</a>
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
                              <h5 className="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>
                              <br/>
                                  <a href="#paper-kit" className="btn btn-danger btn-round">See Details</a>
                          </div>
                      </div>
                      <br/><br/>
                      <div className="row">
                          <div className="col-md-3">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-album-2"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">Beautiful Gallery</h4>
                                      <p className="description">Spend your time generating new ideas. You don't have to think of implementing.</p>
                                      <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-bulb-63"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">New Ideas</h4>
                                      <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>
                                      <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-chart-bar-32"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">Statistics</h4>
                                      <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>
                                      <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="info">
                                  <div className="icon icon-danger">
                                      <i className="nc-icon nc-sun-fog-29"></i>
                                  </div>
                                  <div className="description">
                                      <h4 className="info-title">Delightful design</h4>
                                      <p>Find unique and handmade delightful designs related items directly from our sellers.</p>
                                      <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>

              <div className="section text-center">
                  <div className="container">
                      <h2 className="title">Let's talk about us</h2>
                      <div className="row">
                          <div className="col-md-4">
                              <div className="card card-profile card-plain">
                                  <div className="card-avatar">
                                      <a href="#avatar"><img src={ PrasadPic } alt="..."/></a>
                                  </div>
                                  <div className="card-body">
                                      <a href="#paper-kit">
                                          <div className="author">
                                              <h4 className="card-title">Prasad Acharya</h4>
                                              <h6 className="card-category">Developer</h6>
                                          </div>
                                      </a>
                                      <p className="card-description text-center">
                                          Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.
                                      </p>
                                  </div>
                                  <div className="card-footer text-center">
                                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-twitter"></i></a>
                                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-google-plus"></i></a>
                                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-linkedin"></i></a>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-4">
                              <div className="card card-profile card-plain">
                                  <div className="card-avatar">
                                      <a href="#avatar"><img src={ SaarahPic } alt="..."/></a>
                                  </div>
                                  <div className="card-body">
                                      <a href="#paper-kit">
                                          <div className="author">
                                              <h4 className="card-title">Saarah Huda</h4>
                                              <h6 className="card-category">Senior Developer</h6>
                                          </div>
                                      </a>
                                      <p className="card-description text-center">
                                          A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.
                                      </p>
                                  </div>
                                  <div className="card-footer text-center">
                                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-twitter"></i></a>
                                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-google-plus"></i></a>
                                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-linkedin"></i></a>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-4">
                              <div className="card card-profile card-plain">
                                  <div className="card-avatar">
                                      <a href="#avatar"><img src="../assets/img/faces/erik-lucatero-2.jpg" alt="..."/></a>
                                  </div>
                                  <div className="card-body">
                                      <a href="#paper-kit">
                                          <div className="author">
                                              <h4 className="card-title">Abdullah Dindi</h4>
                                              <h6 className="card-category">Developer</h6>
                                          </div>
                                      </a>
                                      <p className="card-description text-center">
                                          The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.
                                      </p>
                                  </div>
                                  <div className="card-footer text-center">
                                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-twitter"></i></a>
                                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-google-plus"></i></a>
                                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-linkedin"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="section section-dark landing-section">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-8 ml-auto mr-auto">
                              <h2 className="text-center">Keep in touch?</h2>
                              <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <label>Name</label>
                                          <div className="input-group">
	                                        <span className="input-group-addon">
	                                            <i className="nc-icon nc-single-02"></i>
	                                        </span>
                                              <input type="text" className="form-control" placeholder="Name" id="name"/>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <label>Email</label>
                                          <div className="input-group">
											<span className="input-group-addon">
												<i className="nc-icon nc-email-85"></i>
											</span>
                                              <input type="text" className="form-control" placeholder="Email" id="email"/>
                                          </div>
                                      </div>
                                  </div>
                                  <label>Message</label>
                                  <textarea className="form-control" rows="4" placeholder="Tell us your thoughts and feelings..." id="message"></textarea>
                                  <div className="row">
                                      <div className="col-md-4 ml-auto mr-auto">
                                          <button type="submit" className="btn btn-danger btn-lg btn-fill">Send Message</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <footer className="footer section-dark">
              <div className="container">
                  <div className="row">
                      <nav className="footer-nav">
                          <ul>
                              <li><a href=""></a></li>
                              <li><a href=""></a></li>
                              <li><a href=""></a></li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </footer>
      </div>
    );
  }
}

export default App;
