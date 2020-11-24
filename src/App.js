import React, { useEffect } from 'react';

import AOS from 'aos';
import "aos/dist/aos.css";


//Components
import Home from './components/Intro/homepage'
import TopM from './components/top-models_old/top-modelsold'
import TopModels from './components/top-models/top-models'
import Footer from './components/footer/footer'
import MultiCaroussel from './components/multi-caroussel/multi-caroussel'
import HomeInfluencers from './components/home-influencer/home-influencer'
import HomeCastings from './components/home-castings/home-castings'
import HomeAboutus from './components/home-aboutus/home-aboutus'
import HomeContact from './components/home-contact/home-contact'


class App extends React.Component {
  
  constructor(props) {
    super(props);
    AOS.init({});
  }

  render() {
    return (
      <div>
          <Home/>
          <MultiCaroussel/>
          <HomeInfluencers/>
          <HomeCastings/>
          <HomeAboutus/>
          <HomeContact/>
          <Footer/>
      </div>
    );
  }
}

export default App;
