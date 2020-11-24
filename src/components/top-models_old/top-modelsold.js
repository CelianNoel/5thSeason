import React from 'react';
//import '../../style/top-models.css'
import '../../style/top-models_old2.scss'
import TopModelTemplate from './top-model-templateold'



class TopM extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            woman1: { name : "Anna", views : 1357, img : "https://ae01.alicdn.com/kf/HTB1KNVYX9r85uJjSZPiq6zOBFXae/2019-South-Korean-women-s-new-winter-coat-twist-long-cardigan-knitted-sweater-dresses-thickened-in.jpg_Q90.jpg_.webp"},
            woman2: { name : "Betty", views : 1023, img : "https://i.pinimg.com/originals/3f/5d/5b/3f5d5bdd73fbd879df480621ee5e23be.jpg"},
            woman3: { name : "Cristal", views : 978, img : "https://i.pinimg.com/originals/43/38/3b/43383bbe7049f170fc60a50068af16e4.jpg"},
            man1: { name : "Antony", views : 1143, img : "https://i.pinimg.com/originals/93/f3/40/93f340df9f64ffe87b179312b741000b.jpg"},
            man2: { name : "Borris", views : 986, img : "https://i.mdel.net/mdx/i/2014/06/4_Daniel_Liu_by_Idris_Tony.jpg"},
            man3: { name : "Cristopher", views : 891 ,img : "https://i.pinimg.com/originals/85/45/47/854547200cee4bc47fe482dd79d7e6d3.jpg"},
        }; //list 3 models
    }
    
    render() {
      return (
          <div class="top-models">
            <div class="top-models-img">
                <div class="top-models-title">
                    <div class="top-models-title-text">
                        Discover this week
                    </div>
                </div>
                <div class="top-women">
                    <TopModelTemplate model={this.state.woman1}/>
                    <TopModelTemplate model={this.state.woman2}/>
                    <TopModelTemplate model={this.state.woman3}/>
                </div>
                <div class="top-men">
                    <TopModelTemplate model={this.state.man1}/>
                    <TopModelTemplate model={this.state.man2}/>
                    <TopModelTemplate model={this.state.man3}/>
                </div>
            </div>
          </div>
      );
    }
}

export default TopM;