import React, { Component } from 'react';
import floom1 from './images/floom1.jpg';
import floom2 from './images/floom2.jpg';
import floom3 from './images/floom3.jpg';
import floom4 from './images/floom4.jpg';
import Arrow from '../arrow/Arrow';
import './Floom.css';

class Floom extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className="Floom">
        <Arrow />
        <img src={floom1} alt='Charles de Dreuille' />
        <div className='infos'>
          <div className='column1'>
            <span>Brief</span>
            <p>Floom is a marketplace for local florist. I was in charge of the platofrm design.</p>
          </div>
          <div className='column2'>
            <span>Client</span>
            <p>Floom.com</p>
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
        <div className='imgMarginLeft'>
          <img className='imgMargin' src={floom2} alt='Charles de Dreuille' />
        </div>
        <img className='imgMargin' src={floom3} alt='Charles de Dreuille' />
        <div className='imgMarginRight'>
          <img className='imgMargin' src={floom4} alt='Charles de Dreuille' />
        </div>
      </div>
    );
  }
}

export default Floom;
