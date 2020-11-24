import React from 'react';
import AOS from 'aos';
import '../../style/home-casting.scss'


class HomeCastings extends React.Component {
    
    constructor(props) {
        super(props);   
    }
    

    render() {
        return (
            <div class="home-casting">
                <div class="home-casting-filter">
                    <div class="home-casting-title" data-aos="fade-up">Castings</div>
                    <div class="home-casting-description" data-aos="fade-up">With our casting system producer can just post an offer with a description and let models apply to it. It allow companies to gain time on research and find the most motivated models</div>
                    <div class="home-casting-buttons">
                        <button class="home-casting-button-create" data-aos="fade-right">Open a Casting</button>
                        <button class="home-casting-button-find" data-aos="fade-left">Find a Casting</button>
                    </div>
                </div>
            </div>
        );
      }
}

export default HomeCastings;