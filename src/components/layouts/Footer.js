import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container-fluid footer">
            
            <div className="row">
                <div className="col-4">

                    <div className="suggestion">
                        <div className="card-body">
                            <h5 className="card-title contact-title">Contact Us</h5>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="Email" placeholder="Email" name="Email"/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" id="Message" rows="3" placeholder="Message" type="text" name="Message"></textarea>
                            </div>
                            <button className="btn btn-primary" id="submitbtn">Submit</button>
                        </div>
                    </div>

                </div>
                <div className="col-4">


                </div>

            </div>


            <div className="row align-items-start" style={{margin: "1rem"}}>
                
                <div className="col">
                    FINNEWS/ LOGO
                    <br />
                    <br />
                    TAGLINE
                </div>

                <div className="col links">
                    <a href="/about">About</a>
                    <br />
                    <a href="/about">Terms and Conditions</a>
                    <br />
                    <a href="/about">Privacy Policy</a>
                </div>

                <div className="col">
                    <section id="lab_social_icon_footer" style={{padding: "0rem"}}>
                        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
                        <div className="container">
                            <div className="text-center center-block">
                                <Link to="/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></Link>
                                <Link to="/"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></Link>
                            </div>
                        </div>
                    </section>
                </div>

            </div>

            <div className="copyright">© Copyright 2021 All Rights Reserved by React Properties</div>
            
        </div>
    )
}

export default Footer
