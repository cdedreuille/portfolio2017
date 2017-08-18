import React, { Component } from 'react';
import couturelab1 from './images/couturelab1.jpg';
import couturelab2 from './images/couturelab2.jpg';
import couturelab3 from './images/couturelab3.png';
import couturelab4 from './images/couturelab4.png';
import Arrow from '../arrow/Arrow';
import './Couturelab.css';

class Couturelab extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className="Couturelab">
        <Arrow />
        <img src={couturelab1} alt='Charles de Dreuille' />
        <div className='infos'>
          <div className='column1'>
            <span>Brief</span>
            <p>I worked directly with Carmen Bousquets to develop the design of their new e-commerce platform.</p>
          </div>
          <div className='column2'>
            <span>Client</span>
            <p>Couturelab</p>
          </div>
          <div className='column3'>
            <span>Year</span>
            <p>2013</p>
          </div>
          <div className='column4'>
            <span>Credit</span>
            <p>Charles de Dreuille - Design & Frontend</p>
          </div>
        </div>
        <img className='imgMargin' src={couturelab2} alt='Charles de Dreuille' />
        <div className='imgMarginLeft'>
          <img className='imgMargin' src={couturelab3} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginRight'>
          <img className='imgMargin' src={couturelab4} alt='Charles de Dreuille' />
        </div>
      </div>
    );
  }
}

export default Couturelab;
