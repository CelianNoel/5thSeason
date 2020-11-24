import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import '../../style/model-carousel-item.scss'

class ModelCarouselItem extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <div style={{overflow: "hidden"}}>
                    <div class="model-carousel-image" 
                        style={{
                        backgroundImage: `url(${this.props.img})`
                        }}>
                        <div class="model-carousel-button">
                            <button>Discover</button>
                        </div>
                    </div>
                </div>
            </div>   
        );
      }
  }
  
  export default ModelCarouselItem;