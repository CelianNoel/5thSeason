import React from 'react';
//import '../../style/top-models.css' //info hover
/*
class TopM extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <div class="top-model-template">
            <div class="img-hover" 
                style={{
                    backgroundImage: `url(${this.props.model.img})`
                }}>
                <div class="model-info">
                    <div class="name">
                        {this.props.model.name}
                    </div>
                    <div class="views">
                        {this.props.model.views}
                    </div>
                    <div class="views-text">Views</div>
                </div>
            </div>
        </div>
      );
    }
}*/


//import '../../style/top-models2.css' //info under

class TopM extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <div class="top-model-template">
            <div style={{overflow: "hidden"}}>
                <div class="img-hover" 
                    style={{
                        backgroundImage: `url(${this.props.model.img})`
                    }}>
                        <div class="see-profile">
                            See more
                        </div>
                </div>
            </div>
            <div class="model-info">
                <div class="name">
                    {this.props.model.name}
                </div>
                <div class="views">
                    {this.props.model.views}
                    <div class="views-text">Views</div>
                </div>
            </div>
        </div>
      );
    }
}


export default TopM;