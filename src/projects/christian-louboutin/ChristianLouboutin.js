import React, { Component } from 'react';
import christianlouboutin1 from './images/christianlouboutin1.jpg';
import christianlouboutin2 from './images/christianlouboutin2.jpg';
import christianlouboutin3 from './images/christianlouboutin3.jpg';
import christianlouboutin4 from './images/christianlouboutin4.jpg';
import './ChristianLouboutin.css';

class ChristianLouboutin extends Component {
  render() {
    return (
      <div className="ChristianLouboutin">
        <img src={christianlouboutin1} alt='Christian Louboutin' />
        <div className='infos'>
          <div className='column1'>
            <span>Brief</span>
            <p>Since rebuilding Christian Louboutin's website over two years ago we have been working in partnership with their global team to iterate and improve the site every month.</p>
          </div>
          <div className='column2'>
            <span>Client</span>
            <p>Christian Louboutin</p>
          </div>
          <div className='column3'>
            <span>Year</span>
            <p>2013-2016</p>
          </div>
          <div className='column4'>
            <span>Credit</span>
            <p>Charles de Dreuille - Creative Director<br />
            Project part of La Moulade</p>
          </div>
        </div>
        <img className='imgMargin' src={christianlouboutin2} alt='Christian Louboutin' />
        <img className='imgMargin' src={christianlouboutin3} alt='Christian Louboutin' />
        <img className='imgMargin' src={christianlouboutin4} alt='Christian Louboutin' />
      </div>
    );
  }
}

export default ChristianLouboutin;
