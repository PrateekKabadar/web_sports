import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram, FaSnapchat} from 'react-icons/fa';

const Footer = () => {
    
    return (
        <footer className="footer">
            <div className="footer-container">
                <strong className="footer-subheading">JOIN US NOW</strong>
                <div className="footer-icons">
                    <FaFacebook className="footer-icon"/>
                    <FaInstagram className="footer-icon"/>
                    <FaTwitter className="footer-icon"/>
                    <FaSnapchat className="footer-icon"/>
                </div>
                <div className="footer-sub location">
                <strong className="footer-subheading">Location</strong>
                    <strong className="footer-desc">Vidya Nagar,Hubballi,Karnataka,580031</strong>
                    <strong className="footer-desc">Monday to Saturday (6AM to 8PM)</strong>
                    <strong className="footer-desc">Sunday (6AM to 5PM)</strong>
                </div>
                <div className="alt-location">
                    <strong className="footer-subheading">Location</strong>
                    <span className="footer-desc">
                    Vidya Nagar,Hubballi,Karnataka,580031
                        <br/>
                        Monday to Saturday (6AM to 8PM). Sunday (6AM to 5PM)
                    </span>
                </div>

            <div className="wrapper">
              <div className="footer-sub">
                    <strong className="footer-subheading">Community</strong>
                    <small>Health Awareness</small>
                    <small>Yoga Camps</small>
                    <small>Blood Donation Camps</small>
                </div>
                
                <div className="footer-sub">
                    <strong className="footer-subheading">Services</strong>
                    <small>Personal Coach</small>
                    <small> Training</small>
                    
                </div>
                <div className="footer-sub">
                    <strong className="footer-subheading">Privacy Policy</strong>
                    <strong className="footer-subheading">Terms of Service</strong>
                </div>
              </div>
              
                <span className="footer-subheading footer-copy">&copy;&nbsp;Gold Sports Club&nbsp;</span>
            </div>
        </footer>
    )
}

export default Footer
