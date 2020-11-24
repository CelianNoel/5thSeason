import React from 'react';
import '../../style/intro.scss'


class Intro extends React.Component {

    render() {
      return (
        <div class="intro">
            <div class="intro-text">
                NOW IS
                <span class="highlight"> YOUR </span> 
                SEASON
            </div>
            <div class="intro-button">
                <button data-aos="zoom-in">Find a Model</button>
                <button data-aos="zoom-in">Become a Model</button>
            </div>
        </div>
      );
    }
}

export default Intro;