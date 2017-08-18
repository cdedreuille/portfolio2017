import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import portrait from './images/portrait.jpg';
import portraitMobile from './images/portrait-mobile.jpg';
import thumbnail1 from './images/thumbnail1.jpg';
import thumbnail2 from './images/thumbnail2.jpg';
import thumbnail3 from './images/thumbnail3.jpg';
import thumbnail4 from './images/thumbnail4.jpg';
import thumbnail5 from './images/thumbnail5.jpg';
import thumbnail6 from './images/thumbnail6.jpg';
import thumbnail7 from './images/thumbnail7.jpg';
import thumbnail8 from './images/thumbnail8.jpg';
import thumbnail9 from './images/thumbnail9.jpg';
import thumbnail10 from './images/thumbnail10.jpg';
import thumbnail11 from './images/thumbnail11.jpg';
import thumbnail12 from './images/thumbnail12.jpg';
import thumbnail13 from './images/thumbnail13.jpg';
import thumbnail14 from './images/thumbnail14.jpg';
import './Home.css';


var items, bodyRect, debounceTimer;

class Home extends Component {
  constructor() {
      super();

      this.initAnimation = this.initAnimation.bind(this);
      this.revealAnimation = this.revealAnimation.bind(this);
  }

  componentDidMount() {
    //scroll top
    window.scrollTo(0, 0);

    setTimeout(function(){
      //init animation
      this.initAnimation();
      //listen for scroll
      window.addEventListener('scroll', this.revealAnimation, true);
    }.bind(this), 300);

    window.addEventListener('resize', this.initAnimation, true);
  }

  componentWillUnmount() {
    //cancel listen for scroll
    clearTimeout(debounceTimer);
    window.removeEventListener('resize', this.initAnimation, true);
    window.removeEventListener('scroll', this.revealAnimation, true);
  }

  initAnimation() {
      //select all the elements
      items = document.querySelectorAll('.item');
      //get the document size
      bodyRect = document.body.getBoundingClientRect();

      //get the coordinates of all the elements
      for(var i = 0; i < items.length; i++){
          var coords = items[i].getBoundingClientRect();
          items[i].reveal  = false;
          items[i].calcY   = coords.top - bodyRect.top;
          items[i].calcH   = coords.height;
      }

      this.revealAnimation();
  }

  revealAnimation() {
      for(var i = 0; i < items.length; i++){
          var item = items[i];
          var top = item.calcY; // top of our element
          var bottom = item.calcY + item.calcH; // bottom of our element
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; // scroll position
          var viewTop = scrollTop; // viewport top
          var viewBottom = viewTop + window.innerHeight - 40; // viewport bottom / we allow the image to overlap 80px before the animation kicks in

          //is our element in view?
          if( !item.reveal && (top <= viewBottom) && (bottom >= viewTop) ){
            // reveal!
              item.reveal = true;
              items[i].classList.add('reveal');

          }else if(item.reveal && (top > viewBottom)){  // reset when we scroll up so we can replay the animation
              item.reveal = false;
              items[i].classList.remove('reveal');
          }
      }

  }

  render() {
    return (
      <div className="Home">
        <div className='portrait'>
          <div className='intro'>
            <span>Charles de Dreuille</span>
            <span>I am a Senior Designer, Creative Director<br />
            & Front-End Developer based in London.<br />
            I specialize in interactive and human-centered experiences for clients and agencies worldwide.</span>
          </div>
          <img className='portrait-desktop' src={portrait} alt='Charles de Dreuille' />
          <img className='portrait-mobile' src={portraitMobile} alt='Charles de Dreuille' />
        </div>
        <div className="masonry">

          {/* List of items on Desktop */}
          <MediaQuery query='(min-width: 800px)'>
            <div className='column1'>
              <Link className="item" to='/christian-louboutin'>
                <img src={thumbnail1} alt='Project' />
                <div className='title'>Christian Louboutin</div>
                <div className='tags'>Digital Branding, Global Experience</div>
              </Link>
              <a className="item" href='https://getkapture.com' target="_blank" rel="noopener noreferrer">
                <img src={thumbnail3} alt='Project' />
                <div className='title'>Kapture</div>
                <div className='tags'>Experiment, Visual Boomarking</div>
              </a>
              <Link className="item" to='/field'>
                <img src={thumbnail5} alt='Project' />
                <div className='title'>Field.io</div>
                <div className='tags'>Website, Interactive</div>
              </Link>
              <Link className="item" to='/couturelab'>
                <img src={thumbnail7} alt='Project' />
                <div className='title'>CoutureLab</div>
                <div className='tags'>Website, E-Commerce</div>
              </Link>
              <Link className="item" to='/sporty-henri'>
                <img src={thumbnail9} alt='Project' />
                <div className='title'>Sporty Henri</div>
                <div className='tags'>Branding, E-Commerce</div>
              </Link>
              <Link className="item" to='/harbour'>
                <img src={thumbnail11} alt='Project' />
                <div className='title'>Harbour Litigation Funding</div>
                <div className='tags'>Branding, Website</div>
              </Link>
              <Link className="item" to='/edclub'>
                <img src={thumbnail13} alt='Project' />
                <div className='title'>EdClub</div>
                <div className='tags'>Web App, Animations, Education</div>
              </Link>
            </div>
            <div className='column2'>
              <Link className="item" to='/institut'>
                <img src={thumbnail2} alt='Project' />
                <div className='title'>Institut des Mutations</div>
                <div className='tags'>Generative Identity</div>
              </Link>
              <Link className="item" to='/coca-cola'>
                <img src={thumbnail4} alt='Project' />
                <div className='title'>Coca-Cola Journey</div>
                <div className='tags'>Concept</div>
              </Link>
              <Link className="item" to='/louboutin-spikes'>
                <img src={thumbnail6} alt='Project' />
                <div className='title'>Christian Louboutin</div>
                <div className='tags'>Video, Leather Goods</div>
              </Link>
              <a className="item" href='https://lasurprise.io' target="_blank" rel="noopener noreferrer">
                <img src={thumbnail8} alt='Project' />
                <div className='title'>La Surprise.io</div>
                <div className='tags'>Experiment, Chatbot</div>
              </a>
              <Link className="item" to='/floom'>
                <img src={thumbnail10} alt='Project' />
                <div className='title'>Floom</div>
                <div className='tags'>Website, Marketplace</div>
              </Link>
              <Link className="item" to='/orogo'>
                <img src={thumbnail12} alt='Project' />
                <div className='title'>Orogo</div>
                <div className='tags'>App, Food Delivery</div>
              </Link>
              <a className="item" href='https://juun.io' target="_blank" rel="noopener noreferrer">
                <img src={thumbnail14} alt='Project' />
                <div className='title'>Juun Project Planner</div>
                <div className='tags'>Experiment, Project Planning</div>
              </a>
            </div>
          </MediaQuery>

          {/* List of items on Mobile */}
          <MediaQuery query='(max-width: 800px)'>
            <Link className="item" to='/christian-louboutin'>
              <img src={thumbnail1} alt='Project' />
              <div className='title'>Christian Louboutin</div>
              <div className='tags'>Digital Branding, Global Experience</div>
            </Link>
            <Link className="item" to='/institut'>
              <img src={thumbnail2} alt='Project' />
              <div className='title'>Institut des Mutations</div>
              <div className='tags'>Generative Identity</div>
            </Link>
            <a className="item" href='https://getkapture.com' target="_blank" rel="noopener noreferrer">
              <img src={thumbnail3} alt='Project' />
              <div className='title'>Kapture</div>
              <div className='tags'>Experiment, Visual Boomarking</div>
            </a>
            <Link className="item" to='/coca-cola'>
              <img src={thumbnail4} alt='Project' />
              <div className='title'>Coca-Cola Journey</div>
              <div className='tags'>Concept</div>
            </Link>
            <Link className="item" to='/field'>
              <img src={thumbnail5} alt='Project' />
              <div className='title'>Field.io</div>
              <div className='tags'>Website, Interactive</div>
            </Link>
            <Link className="item" to='/louboutin-spikes'>
              <img src={thumbnail6} alt='Project' />
              <div className='title'>Christian Louboutin</div>
              <div className='tags'>Video, Leather Goods</div>
            </Link>
            <Link className="item" to='/couturelab'>
              <img src={thumbnail7} alt='Project' />
              <div className='title'>CoutureLab</div>
              <div className='tags'>Website, E-Commerce</div>
            </Link>
            <a className="item" href='https://lasurprise.io' target="_blank" rel="noopener noreferrer">
              <img src={thumbnail8} alt='Project' />
              <div className='title'>La Surprise.io</div>
              <div className='tags'>Experiment, Chatbot</div>
            </a>
            <Link className="item" to='/sporty-henri'>
              <img src={thumbnail9} alt='Project' />
              <div className='title'>Sporty Henri</div>
              <div className='tags'>Branding, E-Commerce</div>
            </Link>
            <Link className="item" to='/floom'>
              <img src={thumbnail10} alt='Project' />
              <div className='title'>Floom</div>
              <div className='tags'>Website, Marketplace</div>
            </Link>
            <Link className="item" to='/harbour'>
              <img src={thumbnail11} alt='Project' />
              <div className='title'>Harbour Litigation Funding</div>
              <div className='tags'>Branding, Website</div>
            </Link>
            <Link className="item" to='/orogo'>
              <img src={thumbnail12} alt='Project' />
              <div className='title'>Orogo</div>
              <div className='tags'>App, Food Delivery</div>
            </Link>
            <Link className="item" to='/edclub'>
              <img src={thumbnail13} alt='Project' />
              <div className='title'>EdClub</div>
              <div className='tags'>Web App, Animations, Education</div>
            </Link>
            <a className="item" href='https://juun.io' target="_blank" rel="noopener noreferrer">
              <img src={thumbnail14} alt='Project' />
              <div className='title'>Juun Project Planner</div>
              <div className='tags'>Experiment, Project Planning</div>
            </a>
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default Home;
