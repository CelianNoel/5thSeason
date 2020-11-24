import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ModelCarouselItem from './model-carousel-items'
import '../../style/carou.scss'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
};

class Carou extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            woman1: { name : "Anna", 
                    age : 25,
                    height : 169,
                    weight : 48,
                    top : 44,
                    bottom : 26,
                    shoes : 240,
                    eyes : "Brown",
                    hair : "Black",  
                    img : "https://ae01.alicdn.com/kf/HTB1KNVYX9r85uJjSZPiq6zOBFXae/2019-South-Korean-women-s-new-winter-coat-twist-long-cardigan-knitted-sweater-dresses-thickened-in.jpg_Q90.jpg_.webp"},
            woman2: {
                    name : "Betty", 
                    age : 26,
                    height : 173,
                    weight : 51,
                    top : 44,
                    bottom : 25,
                    shoes : 245,
                    eyes : "Brown",
                    hair : "Black", 
                    img : "https://i.pinimg.com/originals/3f/5d/5b/3f5d5bdd73fbd879df480621ee5e23be.jpg"},
            woman3: { 
                    name : "Cristal",
                    age : 24,
                    height : 164,
                    weight : 45,
                    top : 44,
                    bottom : 26,
                    shoes : 235,
                    eyes : "Brown",
                    hair : "Black", 
                    img : "https://i.pinimg.com/originals/43/38/3b/43383bbe7049f170fc60a50068af16e4.jpg"},
            man1: { 
                    name : "Antony", 
                    age : 24,
                    height : 183,
                    weight : 68,
                    chest : 100,
                    waist : 79,
                    shoes : 260,
                    eyes : "Black",
                    hair : "Black", 
                    img : "https://i.pinimg.com/originals/93/f3/40/93f340df9f64ffe87b179312b741000b.jpg"},
            man2: { name : "Borris", 
                    age : 27,
                    height : 179,
                    weight : 75,
                    chest : 105,
                    waist : 82,
                    shoes : 265,
                    eyes : "Black",
                    hair : "Black", 
                    img : "https://i.mdel.net/mdx/i/2014/06/4_Daniel_Liu_by_Idris_Tony.jpg"},
            man3: { name : "Cristopher", 
                    age : 20,
                    height : 188,
                    weight : 70,
                    chest : 100,
                    waist : 78,
                    shoes : 255,
                    eyes : "Brown",
                    hair : "Black",
                    img : "https://i.pinimg.com/originals/85/45/47/854547200cee4bc47fe482dd79d7e6d3.jpg"},
        }; //list 3 models
    }
    
    render() {
      return ( 
         <div class="carou-container" data-aos="fade-up">
             <Carousel 
            data-aos="fade-up"
            responsive={responsive}
            containerClass="carousel-container"
            ssr={true}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            centerMode={true}
            renderButtonGroupOutside={true}
            >
            <ModelCarouselItem img={this.state.woman1.img}/>
            <ModelCarouselItem img={this.state.man1.img}/>
            <ModelCarouselItem img={this.state.woman2.img}/>
            <ModelCarouselItem img={this.state.man2.img}/>
            <ModelCarouselItem img={this.state.woman3.img}/>
            <ModelCarouselItem img={this.state.man3.img}/>
        </Carousel>
         </div> 
        
      );
    }
}

export default Carou;

/*<Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={true}
        className=""
        containerClass="carousel-container"
        dotListClass="react-multi-carousel-dot-list"
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        renderDotsOutside={true}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
            >
            <ModelCarouselItem img={this.state.woman1.img}/>
            <ModelCarouselItem img={this.state.woman2.img}/>
            <ModelCarouselItem img={this.state.woman3.img}/>
        </Carousel>*/