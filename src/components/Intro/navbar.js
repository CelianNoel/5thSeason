import React from 'react';
//import { Button } from 'rsuite';
import '../../style/navbar.scss'

//import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite-default.css'


class Navbar extends React.Component {
    render() {
      return (
        <div>
          <div class="h-1">
              <div class="nb-1">
                <a class="logo" href="/">
                    <img src=""></img>
                    <span>5th Season</span>
                </a>
                <a class="nav-item" href="/homme">Models</a>
                <a class="nav-item" href="/influencers">Influencers</a>
                <a class="nav-item" href="/castings">Castings</a>
                <a class="nav-item" href="/aboutus">About us</a>
                <a class="nav-item" href="/contact">Contact</a>
                <a class="nav-right language" href="/kr">한국어</a>
                <span class="nav-right language">/</span>
                <a class="nav-right language" href="/en">English</a>
                <a class="nav-right" href="/signin">Sign In</a>
              </div>
          </div>
        </div>
      );
    }
}

export default Navbar;