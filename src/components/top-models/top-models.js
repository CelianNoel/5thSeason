import React from 'react';
import AOS from 'aos';
import '../../style/top-models.scss'
import TopModelTemplate from '../top-models_old/top-model-templateold'


class TopModels extends React.Component {
    
    constructor(props) {
        super(props);
        AOS.init();
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
            <div class="top-infs">
                <div class="top-infs-title" data-aos="fade-up">DISCOVER THIS WEEK</div>
                <div class="top-infs-img">
                  <div class="top-inf-women">
                      <div class="top-inf-woman-right" data-aos="fade-right">
                        <div class="info" >
                            <div class="info-name">{this.state.woman1.name}</div>
                            <div class="info-sub">Age: {this.state.woman1.age}</div>
                            <div class="info-sub">Height: {this.state.woman1.height}cm</div>
                            <div class="info-sub">Weight: {this.state.woman1.weight}kg</div>
                            <div class="info-sub">Top: {this.state.woman1.top}</div>
                            <div class="info-sub">Bottom: {this.state.woman1.bottom}</div>
                            <div class="info-sub">Shoes: {this.state.woman1.shoes}</div>
                            <div class="info-sub">Eyes: {this.state.woman1.eyes}</div>
                            <div class="info-sub">Hair: {this.state.woman1.hair}</div>
                        </div> 
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
                      </div>
                      <div class="top-inf-woman-left" data-aos="fade-left">
                        <div class="img2">
                            <div style={{overflow: "hidden"}}>
                                <div class="img-hover2" 
                                    style={{
                                    backgroundImage: `url(${this.state.woman2.img})`
                                    }}>
                                    <div class="see-profile2">
                                        <button>Discover</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="info">
                            <div class="info-name">{this.state.woman2.name}</div>
                            <div class="info-sub">Age: {this.state.woman2.age}</div>
                            <div class="info-sub">Height: {this.state.woman2.height}cm</div>
                            <div class="info-sub">Weight: {this.state.woman2.weight}kg</div>
                            <div class="info-sub">Top: {this.state.woman2.top}</div>
                            <div class="info-sub">Bottom: {this.state.woman2.bottom}</div>
                            <div class="info-sub">Shoes: {this.state.woman2.shoes}</div>
                            <div class="info-sub">Eyes: {this.state.woman2.eyes}</div>
                            <div class="info-sub">Hair: {this.state.woman2.hair}</div>
                        </div>   
                      </div>
                      <div class="top-inf-woman-right" data-aos="fade-right">
                        <div class="info">
                            <div class="info-name">{this.state.woman3.name}</div>
                            <div class="info-sub">Age: {this.state.woman3.age}</div>
                            <div class="info-sub">Height: {this.state.woman3.height}cm</div>
                            <div class="info-sub">Weight: {this.state.woman3.weight}kg</div>
                            <div class="info-sub">Top: {this.state.woman3.top}</div>
                            <div class="info-sub">Bottom: {this.state.woman3.bottom}</div>
                            <div class="info-sub">Shoes: {this.state.woman3.shoes}</div>
                            <div class="info-sub">Eyes: {this.state.woman3.eyes}</div>
                            <div class="info-sub">Hair: {this.state.woman3.hair}</div>
                        </div> 
                        <div class="img2">
                            <div style={{overflow: "hidden"}}>
                                <div class="img-hover2" 
                                    style={{
                                    backgroundImage: `url(${this.state.woman3.img})`
                                    }}>
                                    <div class="see-profile2">
                                        <button>Discover</button>
                                    </div>
                                </div>
                            </div>
                        </div>   
                      </div>
                  </div>
                  <div class="inf-separator"></div>
                  <div class="top-inf-men">
                  <div class="top-inf-woman-left" data-aos="fade-left"> 
                        <div class="img2">
                            <div style={{overflow: "hidden"}}>
                                <div class="img-hover2" 
                                    style={{
                                    backgroundImage: `url(${this.state.man1.img})`
                                    }}>
                                    <div class="see-profile2">
                                        <button>Discover</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="info">
                            <div class="info-name">{this.state.man1.name}</div>
                            <div class="info-sub">Age: {this.state.man1.age}</div>
                            <div class="info-sub">Height: {this.state.man1.height}cm</div>
                            <div class="info-sub">Weight: {this.state.man1.weight}kg</div>
                            <div class="info-sub">Top: {this.state.man1.chest}</div>
                            <div class="info-sub">Bottom: {this.state.man1.waist}</div>
                            <div class="info-sub">Shoes: {this.state.man1.shoes}</div>
                            <div class="info-sub">Eyes: {this.state.man1.eyes}</div>
                            <div class="info-sub">Hair: {this.state.man1.hair}</div>
                        </div>       
                      </div>
                      <div class="top-inf-woman-right" data-aos="fade-right">
                        <div class="info">
                            <div class="info-name">{this.state.man2.name}</div>
                            <div class="info-sub">Age: {this.state.man2.age}</div>
                            <div class="info-sub">Height: {this.state.man2.height}cm</div>
                            <div class="info-sub">Weight: {this.state.man2.weight}kg</div>
                            <div class="info-sub">Top: {this.state.man2.chest}</div>
                            <div class="info-sub">Bottom: {this.state.man2.waist}</div>
                            <div class="info-sub">Shoes: {this.state.man2.shoes}</div>
                            <div class="info-sub">Eyes: {this.state.man2.eyes}</div>
                            <div class="info-sub">Hair: {this.state.man2.hair}</div>
                        </div> 
                        <div class="img2">
                            <div style={{overflow: "hidden"}}>
                                <div class="img-hover2" 
                                    style={{
                                    backgroundImage: `url(${this.state.man2.img})`
                                    }}>
                                    <div class="see-profile2">
                                        <button>Discover</button>
                                    </div>
                                </div>
                            </div>
                        </div>                         
                      </div>
                      <div class="top-inf-woman-left" data-aos="fade-left">
                        <div class="img2">
                            <div style={{overflow: "hidden"}}>
                                <div class="img-hover2" 
                                    style={{
                                    backgroundImage: `url(${this.state.man3.img})`
                                    }}>
                                    <div class="see-profile2">
                                        <button>Discover</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="info">
                            <div class="info-name">{this.state.man3.name}</div>
                            <div class="info-sub">Age: {this.state.man3.age}</div>
                            <div class="info-sub">Height: {this.state.man3.height}cm</div>
                            <div class="info-sub">Weight: {this.state.man3.weight}kg</div>
                            <div class="info-sub">Top: {this.state.man3.chest}</div>
                            <div class="info-sub">Bottom: {this.state.man3.waist}</div>
                            <div class="info-sub">Shoes: {this.state.man3.shoes}</div>
                            <div class="info-sub">Eyes: {this.state.man3.eyes}</div>
                            <div class="info-sub">Hair: {this.state.man3.hair}</div>
                        </div>    
                      </div>
                  </div>
              </div>
            </div>
        );
      }
}

export default TopModels;