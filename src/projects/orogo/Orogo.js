import React, { Component } from 'react';
import orogo1 from './images/orogo1.jpg';
import orogo2 from './images/orogo2.jpg';
import Arrow from '../arrow/Arrow';
import './Orogo.css';

class Orogo extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className="Orogo">
        <Arrow />
        <img src={orogo1} alt='Charles de Dreuille' />
        <div className='infos'>
          <div className='column1'>
            <span>Brief</span>
            <p>I built the entire new design for Orogo just before they got acquired by Just-Eat.</p>
          </div>
          <div className='column2'>
            <span>Client</span>
            <p>Orogo</p>
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
        <img className='imgMargin' src={orogo2} alt='Charles de Dreuille' />
      </div>
    );
  }
}

export default Orogo;
