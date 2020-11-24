import React from 'react';
import '../../style/footer.scss';

import {FaFacebookSquare} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"

class Footer extends React.Component {
    render() {
      return (
        <div class="footer">
            <div class="footer-main">
                <div class="social">
                    <div class="social-icons">
                        <a href="/#"  class="icon"><FaFacebookSquare class="iconhover" size="3em" color="white"/></a>
                        <a href="/#"  class="icon"><FaTwitter class="iconhover" size="3em" color="white"/></a>
                        <a href="/#"  class="icon"><FaInstagram  class="iconhover" size="3em" color="white"/></a>
                        <a href="/#"  class="icon"><FaLinkedin class="iconhover" size="3em" color="white"/></a>    
                    </div> 
                </div>
                <div class="footer-nav">
                    <a href="/#"  class="footer-nav-item">Home</a>
                    <a href="/#"  class="footer-nav-item">Models</a>
                    <a href="/#"  class="footer-nav-item">Influencers</a>
                    <a href="/#"  class="footer-nav-item">Castings</a>
                    <a href="/#"  class="footer-nav-item">About us</a>
                    <a href="/#"  class="footer-nav-item">Contact</a>
                </div>
            </div>
            <div class="policy">
                <a href="/#"  class="policy-item">Privacy Policy</a>
                <a href="/#"  class="policy-item">Terms of Use</a>
            </div>
        </div>
      );
    }
}

export default Footer;