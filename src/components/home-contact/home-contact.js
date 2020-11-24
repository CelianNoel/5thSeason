import React from 'react';
import AOS from 'aos';
import {FaFacebookSquare} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import '../../style/home-contact.scss'



class HomeContact extends React.Component {
    
    constructor(props) {
        super(props);   
    }
    

    render() {
        return (
            <div class="home-contact">
                <div class="home-contact-title" data-aos="fade-up">Contact</div>
                <div class="home-contact-content">
                    <div class="home-contact-left" data-aos="fade-right">
                        <div class="home-contact-side-title" >Social Media</div>
                        <div class="home-contact-icon">
                            <a href="/#"  class="icon"><FaFacebookSquare class="social-iconhover" size="4em" color="#4267B2"/></a>
                            <a href="/#"  class="icon"><FaTwitter class="social-iconhover" size="4em" color="#1DA1F2"/></a>
                            <a href="/#"  class="icon"><FaInstagram  class="social-iconhover" size="4em" color="#bc2a8d"/></a>
                            <a href="/#"  class="icon"><FaLinkedin class="social-iconhover" size="4em" color="#0072b1"/></a>
                        </div>
                    </div>
                    <div class="home-contact-right" data-aos="fade-left">
                        <div class="home-contact-side-title"> Send us a message</div>
                        <input type="text" placeholder="Email"></input>
                        <textarea placeholder="Write your message.."></textarea>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        );
      }
}

export default HomeContact;