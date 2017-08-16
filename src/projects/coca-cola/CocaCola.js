import React, { Component } from 'react';
import cocacola1 from './images/cocacola1.jpg';
import cocacola2 from './images/cocacola2.jpg';
import cocacola3 from './images/cocacola3.jpg';
import cocacola4 from './images/cocacola4.jpg';
import cocacola5 from './images/cocacola5.jpg';
import cocacola6 from './images/cocacola6.jpg';
import './CocaCola.css';

class CocaCola extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className="CocaCola">
        <img src={cocacola1} alt='Charles de Dreuille' />
        <div className='infos'>
          <div className='column1'>
            <span>Brief</span>
            <p>Optimise content architecture for social. Improve sharing tools. Improve information architecture. Optimise analytics. Update Visual Design.</p>
          </div>
          <div className='column2'>
            <span>Client</span>
            <p>Coca-Cola Journey</p>
          </div>
          <div className='column3'>
            <span>Year</span>
            <p>2016</p>
          </div>
          <div className='column4'>
            <span>Credit</span>
            <p>Charles de Dreuille - Art Director<br />Bruno LaVersa - Design Support</p>
          </div>
        </div>
        <img className='imgMargin' src={cocacola2} alt='Charles de Dreuille' />
        <img className='imgMargin' src={cocacola3} alt='Charles de Dreuille' />
        <h2>Storytelling on Apple TV + Apple Watch</h2>
        <img className='imgMargin' src={cocacola5} alt='Charles de Dreuille' />
        <h2>Share the Love using your heartbeat<br />See it LIVE on smart TVs & Journey’s Website</h2>
        <img className='imgMargin' src={cocacola6} alt='Charles de Dreuille' />
        <div className='shapes'>
          <div className='column'>
            <span>Step 1</span>
            <p>Share the love of Coca-Cola from your watch to your TV or Coca-Cola Journey website</p>
          </div>
          <div className='column'>
            <span>Step 2</span>
            <p>Get a chance to win a free coke that you can redeem in any local store</p>
          </div>
          <div className='column'>
            <span>Step 3</span>
            <p>Get notifications on specific pieces of content from Coca-Cola Journey</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CocaCola;
