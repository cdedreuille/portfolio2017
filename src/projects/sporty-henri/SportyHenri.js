import React, { Component } from 'react';
import sportyhenri1 from './images/sportyhenri1.jpg';
import sportyhenri2 from './images/sportyhenri2.jpg';
import sportyhenri3 from './images/sportyhenri3.png';
import sportyhenri4 from './images/sportyhenri4.jpg';
import Arrow from '../arrow/Arrow';
import './SportyHenri.css';

class SportyHenri extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className="SportyHenri">
        <Arrow />
        <img src={sportyhenri1} alt='Charles de Dreuille' />
        <div className='infos'>
          <div className='column1'>
            <span>Brief</span>
            <p>I built the entire new design for Orogo just before they got acquired by Just-Eat.</p>
          </div>
          <div className='column2'>
            <span>Client</span>
            <p>Sporty Henri</p>
          </div>
          <div className='column3'>
            <span>Year</span>
            <p>2015</p>
          </div>
          <div className='column4'>
            <span>Credit</span>
            <p>Charles de Dreuille - Art Direction</p>
          </div>
        </div>
        <img className='imgMargin' src={sportyhenri2} alt='Charles de Dreuille' />
        <div className='imgMarginCenter'>
          <img className='imgMargin' src={sportyhenri3} alt='Charles de Dreuille' />
        </div>
        <img className='imgMargin' src={sportyhenri4} alt='Charles de Dreuille' />
      </div>
    );
  }
}

export default SportyHenri;
