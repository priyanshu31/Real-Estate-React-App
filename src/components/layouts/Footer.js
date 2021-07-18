import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
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

                <div className="col-2" style={{margin: "1rem 5rem"}}>

                    <ul style={{color: "whitesmoke", fontSize: "1.25rem", padding: "0"}}>Real Estate in India</ul>
                    {
                        props.locations.map((item, index) => 
                            <Link key={index} to="/" className="dropdown-item list-item-footer" style={{textDecoration: "none"}}>Properties in { item }</Link>
                        )
                    }

                </div>

                <div className="col-2" style={{margin: "1rem 5rem"}}>

                    <ul style={{color: "whitesmoke", fontSize: "1.25rem", padding: "0"}}>Our Services</ul>
                    {
                        props.services.map((item, index) => 
                            <Link key={index} to="/" className="dropdown-item list-item-footer" style={{textDecoration: "none"}}>{ item }</Link>
                        )
                    }

                </div>

            </div>


            <div className="row align-items-start" style={{margin: "1rem"}}>
                

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
                                <h4 style={{ color: "#b6ffbf" }}>Follow us on: </h4>
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
