import React from 'react';
import AOS from 'aos';
import '../../style/home-aboutus.scss'


class HomeAboutus extends React.Component {
    
    constructor(props) {
        super(props);   
    }
    

    render() {
        return (
            <div class="home-aboutus">
                <div class="home-aboutus-img" data-aos="fade-right">
                </div>
                <div class="home-aboutus-faq" data-aos="fade-left">
                    <div class="home-aboutus-title" >About Us</div>
                    <div class="home-aboutus-question">What is 5th season?</div>
                    <div class="home-aboutus-answer">5th season is a web platform that put in relation model and producer throught an intuitive interface</div>
                    <div class="home-aboutus-question">Why 5th season?</div>
                    <div class="home-aboutus-answer">We believe everyone has his/her own value to bring in model market. Therefore we want to help models and producer to find what ther need the easiest way</div>
                    <div class="home-aboutus-question">Need more information?</div>
                    <div class="home-aboutus-answer">Find more information about us by clicking on the button below</div>
                    <button class="home-aboutus-button">More informations</button>
                </div>
            </div>
        );
      }
}

export default HomeAboutus;