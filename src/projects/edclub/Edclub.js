import React, { Component } from 'react';
import edclub1 from './images/edclub1.jpg';
import edclub2 from './images/edclub2.png';
import edclub3 from './images/edclub3.png';
import edclub4 from './images/edclub4.png';
import edclub5 from './images/edclub5.png';
import Arrow from '../arrow/Arrow';
import './Edclub.css';

class Edclub extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className="Edclub">
        <Arrow />
        <img src={edclub1} alt='Charles de Dreuille' />
        <div className='infos'>
          <div className='column1'>
            <span>Brief</span>
            <p>Floom is a marketplace for local florist. I was in charge of the platofrm design.</p>
          </div>
          <div className='column2'>
            <span>Client</span>
            <p>Edclub</p>
          </div>
          <div className='column3'>
            <span>Year</span>
            <p>2016</p>
          </div>
          <div className='column4'>
            <span>Credit</span>
            <p>Charles de Dreuille - Creative Direction</p>
          </div>
        </div>
        <div className='imgMarginRight'>
          <img className='imgMargin' src={edclub2} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginLeft'>
          <img className='imgMargin' src={edclub3} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginCenter'>
          <img className='imgMargin' src={edclub4} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginRight'>
          <img className='imgMargin' src={edclub5} alt='Charles de Dreuille' />
        </div>
      </div>
    );
  }
}

export default Edclub;
