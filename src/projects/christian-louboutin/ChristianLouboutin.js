import React, { Component } from 'react';
import christianlouboutin1 from './images/christianlouboutin1.jpg';
import christianlouboutin2 from './images/christianlouboutin2.jpg';
import christianlouboutin3 from './images/christianlouboutin3.jpg';
import christianlouboutin4 from './images/christianlouboutin4.jpg';
import './ChristianLouboutin.css';

class ChristianLouboutin extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
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
        <div className='logo'>
          <video width="200" autoPlay loop>
            <source src="https://s3.eu-west-2.amazonaws.com/cdedreuille-portfolio/louboutin-logo.mp4" type="video/mp4" />
          </video>
        </div>
        <img className='imgMargin' src={christianlouboutin2} alt='Christian Louboutin' />
        <h2>Restructure of the entire site<br />as mobile-first</h2>
        <video className='vidMargin' width="100%" controls controlsList="nodownload">
          <source src="https://s3.eu-west-2.amazonaws.com/cdedreuille-portfolio/Louboutin+Birds+3.mp4" type="video/mp4" />
        </video>
        <img className='imgMargin' src={christianlouboutin3} alt='Christian Louboutin' />
        <video className='vidMargin' width="100%" controls controlsList="nodownload">
          <source src="https://s3.eu-west-2.amazonaws.com/cdedreuille-portfolio/Nails+1.mp4" type="video/mp4" />
        </video>
        <video className='vidMargin' width="100%" controls controlsList="nodownload">
          <source src="https://s3.eu-west-2.amazonaws.com/cdedreuille-portfolio/Fragrance+3.mp4" type="video/mp4" />
        </video>
        <h2>Digital Guideline<br /><br />For the latest version of the website I merged our digital branding guideline as a modular tool to build all the different pieces of the site.</h2>
        <video className='vidMargin' width="100%" controls controlsList="nodownload">
          <source src="https://s3.eu-west-2.amazonaws.com/cdedreuille-portfolio/louboutin-guideline-2.mp4" type="video/mp4" />
        </video>
        <h2>Monthly homepages</h2>
        <img className='imgMargin' src={christianlouboutin4} alt='Christian Louboutin' />
      </div>
    );
  }
}

export default ChristianLouboutin;