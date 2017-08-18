import React, { Component } from 'react';
import harbour1 from './images/harbour1.jpg';
import harbour2 from './images/harbour2.jpg';
import harbour3 from './images/harbour3.jpg';
import harbour4 from './images/harbour4.jpg';
import harbour5 from './images/harbour5.png';
import harbour6 from './images/harbour6.png';
import harbour7 from './images/harbour7.png';
import Arrow from '../arrow/Arrow';
import './Harbour.css';

class Harbour extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className="Harbour">
        <Arrow />
        <img src={harbour1} alt='Charles de Dreuille' />
        <div className='infos'>
          <div className='column1'>
            <span>Brief</span>
            <p>Harbour Litigation Funding asked us to revisit their brand. We built their identity as well as their entire digital platform.</p>
          </div>
          <div className='column2'>
            <span>Client</span>
            <p>Harbour</p>
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
        <img className='imgMargin' src={harbour2} alt='Charles de Dreuille' />
        <img className='imgMargin' src={harbour3} alt='Charles de Dreuille' />
        <div className='imgMarginLeft'>
          <img className='imgMargin' src={harbour4} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginRight'>
          <img className='imgMargin' src={harbour5} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginLeft'>
          <img className='imgMargin' src={harbour6} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginRight'>
          <img className='imgMargin' src={harbour7} alt='Charles de Dreuille' />
        </div>
      </div>
    );
  }
}

export default Harbour;
