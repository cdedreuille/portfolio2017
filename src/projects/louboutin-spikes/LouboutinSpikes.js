import React from 'react';
import Project from '../../projects/Project';
import louboutinspikes1 from './images/louboutinspikes1.jpg';
import louboutinspikes2 from './images/louboutinspikes2.jpg';
import louboutinspikes3 from './images/louboutinspikes3.jpg';
import louboutinspikes4 from './images/louboutinspikes4.jpg';
import louboutinspikes5 from './images/louboutinspikes5.jpg';
import louboutinspikes6 from './images/louboutinspikes6.jpg';
import louboutinspikes7 from './images/louboutinspikes7.jpg';
import louboutinspikes8 from './images/louboutinspikes8.jpg';
import louboutinspikes9 from './images/louboutinspikes9.png';
import louboutinspikes10 from './images/louboutinspikes10.png';
import Arrow from '../arrow/Arrow';
import './LouboutinSpikes.css';

class LouboutinSpikes extends Project {

  render() {
    return (
      <div className="LouboutinSpikes">
        <Arrow />
        <img src={louboutinspikes1} alt='Charles de Dreuille' />
        <div className='infos'>
          <div className='column1'>
            <span>Brief</span>
            <p>Christian Louboutin asked us to create small videos to introduce the new bag section on their site and in social media.</p>
          </div>
          <div className='column2'>
            <span>Client</span>
            <p>Christian Louboutin</p>
          </div>
          <div className='column3'>
            <span>Year</span>
            <p>2016</p>
          </div>
          <div className='column4'>
            <span>Credit</span>
            <p>Charles de Dreuille - Creative Direction<br />
            SOS In Bel-Air - Production</p>
          </div>
        </div>
        <video className='vidMargin videoRight' width="70%" loop playsInline preload="auto" poster={louboutinspikes9}>
          <source src="https://s3.eu-west-2.amazonaws.com/cdedreuille-portfolio/Louboutin+Red+Spikes+1.mp4" type="video/mp4" />
        </video>
        <video className='vidMargin' width="70%" loop playsInline preload="auto" poster={louboutinspikes10}>
          <source src="https://s3.eu-west-2.amazonaws.com/cdedreuille-portfolio/Spikes+Gold+on+Black+4.mp4" type="video/mp4" />
        </video>
        <h2>Photos of the shoot with SOS in Bel-Air</h2>
        <div className='imgMarginRight'>
          <img className='imgMargin' src={louboutinspikes2} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginLeft'>
          <img className='imgMargin' src={louboutinspikes3} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginCenter'>
          <img className='imgMargin' src={louboutinspikes4} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginLeft'>
          <img className='imgMargin' src={louboutinspikes5} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginRight'>
          <img className='imgMargin' src={louboutinspikes6} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginLeft'>
          <img className='imgMargin' src={louboutinspikes7} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginRight'>
          <img className='imgMargin' src={louboutinspikes8} alt='Charles de Dreuille' />
        </div>
      </div>
    );
  }
}

export default LouboutinSpikes;
