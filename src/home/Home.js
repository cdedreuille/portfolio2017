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
import './Home.css';


var raf, items, bodyRect;

class Home extends Component {

  componentDidMount() {
    //scroll top
    window.scrollTo(0, 0);

    setTimeout(function(){
      //init animation
      this.initAnimation();
      //listen for scroll
      this.revealAnimation();
    }.bind(this), 300);

    setInterval(function(){
      this.revealAnimation();
    }.bind(this), 2000)
    window.addEventListener('resize', this.initAnimation, true);
  }

  componentWillUnmount() {
    //cancel listen for scroll
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', this.initAnimation);
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
          //apply default style
          items[i].style.opacity = 0;
          items[i].style.transform = 'translateY(60px)';
          items[i].style.filter = 'grayscale()';
          items[i].style.transition = 'all 800ms ease-out';
      }
  }

  revealAnimation() {
    var self = this;
    raf = requestAnimationFrame(function(){self.revealAnimation()});

    //looping all our elements
    for(var i = 0; i < items.length; i++){
        var item = items[i];
        var top = item.calcY; // top of our element
        var bottom = item.calcY + item.calcH; // bottom of our element
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; // scroll position
        var viewTop = scrollTop; // viewport top
        var viewBottom = viewTop + window.innerHeight - 100; // viewport bottom / we allow the image to overlap 80px before the animation kicks in

        //is our element in view?
        if( !item.reveal && (top <= viewBottom) && (bottom >= viewTop) ){
          // reveal!
            item.reveal = true;
            items[i].style.opacity = 1;
            items[i].style.filter = 'grayscale(0)';
            items[i].style.transform = 'translateY(0)';

        }else if(item.reveal && (top > viewBottom)){  // reset when we scroll up so we can replay the animation
            items[i].style.opacity = 0;
            item.reveal = false;
            items[i].style.transform = 'translateY(20px)';
            items[i].style.filter = 'grayscale(1)';
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
            <Link className="item" to='/sporty-henri'>
              <img src={thumbnail7} alt='Project' />
              <div className='title'>Sporty Henri</div>
              <div className='tags'>Branding, E-Commerce</div>
            </Link>
            <Link className="item" to='/harbour'>
              <img src={thumbnail9} alt='Project' />
              <div className='title'>Harbour Litigation Funding</div>
              <div className='tags'>Branding, Website</div>
            </Link>
            <Link className="item" to='/edclub'>
              <img src={thumbnail11} alt='Project' />
              <div className='title'>EdClub</div>
              <div className='tags'>Web App, Animations, Education</div>
            </Link>
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
            <a className="item" href='https://juun.io' target="_blank" rel="noopener noreferrer">
              <img src={thumbnail12} alt='Project' />
              <div className='title'>Juun Project Planner</div>
              <div className='tags'>Experiment, Project Planning</div>
            </a>
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
            <Link className="item" to='/sporty-henri'>
              <img src={thumbnail7} alt='Project' />
              <div className='title'>Sporty Henri</div>
              <div className='tags'>Branding, E-Commerce</div>
            </Link>
            <a className="item" href='https://lasurprise.io' target="_blank" rel="noopener noreferrer">
              <img src={thumbnail8} alt='Project' />
              <div className='title'>La Surprise.io</div>
              <div className='tags'>Experiment, Chatbot</div>
            </a>
            <Link className="item" to='/harbour'>
              <img src={thumbnail9} alt='Project' />
              <div className='title'>Harbour Litigation Funding</div>
              <div className='tags'>Branding, Website</div>
            </Link>
            <Link className="item" to='/floom'>
              <img src={thumbnail10} alt='Project' />
              <div className='title'>Floom</div>
              <div className='tags'>Website, Marketplace</div>
            </Link>
            <Link className="item" to='/edclub'>
              <img src={thumbnail11} alt='Project' />
              <div className='title'>EdClub</div>
              <div className='tags'>Web App, Animations, Education</div>
            </Link>
            <a className="item" href='https://juun.io' target="_blank" rel="noopener noreferrer">
              <img src={thumbnail12} alt='Project' />
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
