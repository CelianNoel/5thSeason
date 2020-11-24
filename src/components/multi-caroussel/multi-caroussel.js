import React from 'react';
import '../../style/caroussel.scss'
import Carou from './carousel'
import AOS from 'aos';
import "aos/dist/aos.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

class MultiCaroussel extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <div class="full-carousel" >
                    <div class="full-text" data-aos="fade-up">Discover our weekly model Selection</div>
                    <Carou />
                    <button class="button" data-aos="fade-up">learn more</button>
                </div> 
            </div>     
        );
      }
}

export default MultiCaroussel;


/*<Carousel 
                        centerMode={true}
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        
                        infinite={true}
                        keyBoardControl={true}
                        transitionDuration={1000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-10-px"
                    >
                        <div class="img2" >
                            <div style={{overflow: "hidden"}}>
                                <div class="img-hover2" 
                                    style={{
                                    backgroundImage: `url(${this.state.woman1.img})`
                                    }}>
                                    <div class="see-profile2">
                                        <button class="see-profile-button">Discover</button>
                                    </div>
                                </div>
                            </div>
                        </div>       
                        <div class="img2" >
                            <div style={{overflow: "hidden"}}>
                                <div class="img-hover2" 
                                    style={{
                                    backgroundImage: `url(${this.state.woman2.img})`
                                    }}>
                                    <div class="see-profile2">
                                        <button class="see-profile-button">Discover</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="img2" >
                            <div style={{overflow: "hidden"}}>
                                <div class="img-hover2" 
                                    style={{
                                    backgroundImage: `url(${this.state.woman3.img})`
                                    }}>
                                    <div class="see-profile2">
                                        <button class="see-profile-button">Discover</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>*/