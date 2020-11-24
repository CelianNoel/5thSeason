import React from 'react';
import AOS from 'aos';
import '../../style/home-influencers.scss'
import {FaInstagram} from "react-icons/fa"


class HomeInfluencers extends React.Component {
    
    constructor(props) {
        super(props);
        AOS.init();
        this.state = { 
            woman1: { name : "Dorothee", 
                    age : 25,
                    height : 169,
                    weight : 48,
                    top : 44,
                    bottom : 26,
                    shoes : 240,
                    eyes : "Brown",
                    hair : "Black",  
                    followers : "263,874",
                    img : "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2018%2F07%2Fbest-beauty-influencers-instagram-pony-effect-iamkareno-jackie-aina-makeup-skincare-1.jpg?q=75&w=1000&cbr=1&fit=max"},
           
            man1: { 
                    name : "David", 
                    age : 24,
                    height : 183,
                    weight : 68,
                    chest : 100,
                    waist : 79,
                    shoes : 260,
                    eyes : "Black",
                    hair : "Black",
                    followers : "185,712",
                    img : "https://lh3.googleusercontent.com/proxy/P2TUj_2zWQACK4jkLU3UpkOrD8Q5yBUlJLykuEyf79D2wRAgP2pOdVjwGwNgQNqegUMHcF1tJ2v8QQNKocpBzk7z4d0UvEEBtanYsX2jM8yfQji2w_1lP_L5miEGWAwGevWcZQ"},
        }; 
    }
    

    render() {
        return (
            <div class="home-influencer">
                <div class="home-influencer-container">
                    <div class="home-influencer-female" style={{overflow: "hidden"}} data-aos="fade-right">
                        <div class="home-influencer-img" 
                            style={{
                            backgroundImage: `url(${this.state.woman1.img})`
                            }}>
                            <div class="insta-follows">
                                    <div class="home-influencer-name">{this.state.woman1.name}</div>
                                    <div class="home-influencer-insta">
                                        <a href="/#"  class="icon"><FaInstagram  class="iconhover" size="1em" color="white"/></a>
                                        <div class="home-influencer-followers">{this.state.woman1.followers} Followers</div>
                                    </div>
                                    <button>See profile</button>
                            </div>
                        </div>
                    </div>
                    <div class="home-influencer-text" data-aos="fade-up">
                        <div class="home-influencer-text-title"> Top Influencers</div>
                        <div class="home-influencer-text-description">Discover our list of top influencers</div>
                        <button class="home-influencer-text-button">Learn more</button>
                    </div>
                    <div class="home-influencer-female" style={{overflow: "hidden"}} data-aos="fade-left"> 
                        <div class="home-influencer-img" 
                            style={{
                            backgroundImage: `url(${this.state.man1.img})`
                            }}>
                            <div class="insta-follows">
                                <div class="home-influencer-name">{this.state.man1.name}</div>
                                <div class="home-influencer-insta">
                                    <a href="/#"  class="icon"><FaInstagram  class="iconhover" size="1em" color="white"/></a>
                                    <div class="home-influencer-followers">{this.state.man1.followers} Followers</div>
                                </div>
                                <button>See profile</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
}

export default HomeInfluencers;