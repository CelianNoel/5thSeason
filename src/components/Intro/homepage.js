import React from 'react';
import '../../style/home.scss'
import Navbar from './navbar'
import Intro from './intro'
import banner from './video1.mp4'
import silk from '../../img/black-silk.webm'
import homeVideo from '../../img/video2.mp4'
import {IoIosArrowDown} from "react-icons/io"

class Gradiant extends React.Component {
    render() {
      return (
        <div class="gradiant">
            <Navbar/>
            <Intro/> 
        </div>
      );
    }
}

class Home extends React.Component {
    render() {
      return (
        <div>
          <div id="videoDiv2">
            <video autoPlay loop muted id="home-video">
                  <source src={banner} type="video/mp4"/>
                  Sorry. Your browser does not support HTML5 video.
            </video>
            <div id="videoMessage2" class="styling">
              <Navbar/>
              <Intro/> 
              <div class="scroll-down">Scroll Down</div>
              <IoIosArrowDown class="scroll-icon" size="2em" color="white"/>
            </div>
          </div>
          <div class="transition">
              <div class="transition-text" data-aos="fade-up">Find the <span class="important-text">Unicity</span> in the <span class="important-text">Diversity</span></div>
              <div class="key-metrics" data-aos="fade-up">
                  <div class="key-metrics-slot">
                    <div class="key-metrics-value">12,845</div>
                    <div class="key-metrics-text">Models</div>
                  </div>
                  <div class="key-metrics-slot">
                    <div class="key-metrics-value">249,623</div>
                    <div class="key-metrics-text">Contracts</div>
                  </div>
                  <div class="key-metrics-slot">
                    <div class="key-metrics-value">524</div>
                    <div class="key-metrics-text">Companies</div>
                  </div>
              </div>
          </div>
        </div>
      );
    }
}

export default Home;


/* dark silk video bg

<div id="videoDiv3">
            <video autoPlay loop muted id="home-video">
                  <source src={silk} type="video/webm"/>
                  Sorry. Your browser does not support HTML5 video.
            </video>
            <div id="videoMessage2" class="styling">
              <div class="transition-text" data-aos="fade-up">Find the Pixel Perfect model</div>
              <button data-aos="fade-up">Select your model</button>
            </div>
          </div>
*/