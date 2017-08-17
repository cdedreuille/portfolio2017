import React, { Component } from 'react';
import field1 from './images/field1.jpg';
import field2 from './images/field2.jpg';
import field3 from './images/field3.jpg';
import field4 from './images/field4.jpg';

import './Field.css';

class Field extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className="Field">
        <img src={field1} alt='Charles de Dreuille' />
        <div className='infos'>
          <div className='column1'>
            <span>Brief</span>
            <p>Field is a multi-disciplinary studio focus on digital art. They asked me to build find an innovative way to present their projects online.</p>
          </div>
          <div className='column2'>
            <span>Client</span>
            <p>Field.io</p>
          </div>
          <div className='column3'>
            <span>Year</span>
            <p>2016</p>
          </div>
          <div className='column4'>
            <span>Credit</span>
            <p>Charles de Dreuille - Creative Direction<br />
            Adrien Picard - Frontend Developement</p>
          </div>
        </div>
        <div className='imgMarginRight'>
          <img className='imgMargin' src={field2} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginLeft'>
          <img className='imgMargin' src={field3} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginCenter'>
          <img className='imgMargin' src={field4} alt='Charles de Dreuille' />
        </div>
      </div>
    );
  }
}

export default Field;
