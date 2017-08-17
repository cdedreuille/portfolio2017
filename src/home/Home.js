import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

class Home extends Component {

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
          <Link className="item" to='/christian-louboutin'>
            <img src={thumbnail1} alt='Project' />
            <div className='title'>Christian Louboutin</div><br />
            <div className='tags'>Digital Branding, Global Experience</div>
          </Link>
          <a className="item" href='https://getkapture.com' target="_blank" rel="noopener noreferrer">
            <img src={thumbnail3} alt='Project' />
            <div className='title'>Kapture</div><br />
            <div className='tags'>Experiment, Visual Boomarking</div>
          </a>
          <Link className="item" to='/field'>
            <img src={thumbnail5} alt='Project' />
            <div className='title'>Field.io</div><br />
            <div className='tags'>Website, Interactive</div>
          </Link>
          <Link className="item" to='/sporty-henri'>
            <img src={thumbnail7} alt='Project' />
            <div className='title'>Sporty Henri</div><br />
            <div className='tags'>Branding, E-Commerce</div>
          </Link>
          <Link className="item" to='/harbour'>
            <img src={thumbnail9} alt='Project' />
            <div className='title'>Harbour Litigation Funding</div><br />
            <div className='tags'>Branding, Website</div>
          </Link>
          <Link className="item" to='/edclub'>
            <img src={thumbnail11} alt='Project' />
            <div className='title'>EdClub</div><br />
            <div className='tags'>Web App, Animations, Education</div>
          </Link>
          <Link className="item" to='/institut'>
            <img src={thumbnail2} alt='Project' />
            <div className='title'>Institut des Mutations</div><br />
            <div className='tags'>Generative Identity</div>
          </Link>
          <Link className="item" to='/coca-cola'>
            <img src={thumbnail4} alt='Project' />
            <div className='title'>Coca-Cola Journey</div><br />
            <div className='tags'>Concept</div>
          </Link>
          <Link className="item" to='/louboutin-spikes'>
            <img src={thumbnail6} alt='Project' />
            <div className='title'>Christian Louboutin</div><br />
            <div className='tags'>Video, Leather Goods</div>
          </Link>
          <a className="item" href='https://lasurprise.io' target="_blank" rel="noopener noreferrer">
            <img src={thumbnail8} alt='Project' />
            <div className='title'>La Surprise.io</div><br />
            <div className='tags'>Experiment, Chatbot</div>
          </a>
          <Link className="item" to='/floom'>
            <img src={thumbnail10} alt='Project' />
            <div className='title'>Floom</div><br />
            <div className='tags'>Website, Marketplace</div>
          </Link>
          <a className="item" href='https://juun.io' target="_blank" rel="noopener noreferrer">
            <img src={thumbnail12} alt='Project' />
            <div className='title'>Juun Project Planner</div><br />
            <div className='tags'>Experiment, Project Planning</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
