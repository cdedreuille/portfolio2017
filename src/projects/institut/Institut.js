import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import institut1 from './images/institut1.jpg';
import institut2 from './images/institut2.jpg';
import institut3 from './images/institut3.jpg';
import institut4 from './images/institut4.jpg';
import institut5 from './images/institut5.jpg';
import institut6 from './images/institut6.jpg';
import institut7 from './images/institut7.jpg';
import institut8 from './images/institut8.jpg';
import Arrow from '../arrow/Arrow';
import './Institut.css';

class Institut extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className="Institut">
        <Arrow />
        <img src={institut1} alt='Charles de Dreuille' />
        <div className='infos'>
          <div className='column1'>
            <span>Brief</span>
            <p>The Institut is a French consultancy agency. They help companies in difficulties to structure their team and projects in the most productive way in order to gain more strength and grow again. We built an identity that could adapt to any entity. The moving shape is a metaphor for all entities inside the company, always moving and perfecting themselves. Behind is a perfect circle. The entity is always trying to match the perfect circle, sometimes getting close, sometimes getting far but always in movement, perfecting itself.</p>
          </div>
          <div className='column2'>
            <span>Client</span>
            <p>Institut des Mutations</p>
          </div>
          <div className='column3'>
            <span>Year</span>
            <p>2016</p>
          </div>
          <div className='column4'>
            <span>Credit</span>
            <p>Charles de Dreuille - Creative Director<br />
            Project part of La Moulade</p>
          </div>
        </div>
        <MediaQuery query='(min-width: 800px)'>
          <video className='vidMargin' width="100%" autoPlay loop>
            <source src="https://s3.eu-west-2.amazonaws.com/cdedreuille-portfolio/institut-2.mp4" type="video/mp4" />
          </video>
        </MediaQuery>
        <MediaQuery query='(max-width: 800px)'>
          <video className='vidMargin' width="100%">
            <source src="https://s3.eu-west-2.amazonaws.com/cdedreuille-portfolio/institut-2.mp4" type="video/mp4" />
          </video>
        </MediaQuery>
        <img className='imgMargin' src={institut2} alt='Charles de Dreuille' />
        <div className='shapes'>
          <div className='column'>
            <span>Perfect Circle</span>
            <p>In the background this is your goal. The circle represent the perfection.</p>
          </div>
          <div className='column'>
            <span>Single Entity</span>
            <p>This could be your company, an employee, or a product.</p>
          </div>
          <div className='column'>
            <span>Connection</span>
            <p>The entity is always looking to perfect itself, learning and discovering everytime.</p>
          </div>
        </div>
        <MediaQuery query='(min-width: 800px)'>
          <video className='vidMargin' width="100%" autoPlay loop>
            <source src="https://s3.eu-west-2.amazonaws.com/cdedreuille-portfolio/institut-3.mp4" type="video/mp4" />
          </video>
        </MediaQuery>
        <MediaQuery query='(max-width: 800px)'>
          <video className='vidMargin' width="100%">
            <source src="https://s3.eu-west-2.amazonaws.com/cdedreuille-portfolio/institut-3.mp4" type="video/mp4" />
          </video>
        </MediaQuery>
        <img className='collection' src={institut3} alt='Charles de Dreuille' />
        <img className='imgMargin' src={institut4} alt='Charles de Dreuille' />
        <div className='imgMarginLeft'>
          <img className='imgMargin' src={institut5} alt='Charles de Dreuille' />
        </div>
        <img className='imgMargin' src={institut6} alt='Charles de Dreuille' />
        <div className='imgMarginRight'>
          <img className='imgMargin' src={institut7} alt='Charles de Dreuille' />
        </div>
        <div className='imgMarginLeft'>
          <img className='imgMargin' src={institut8} alt='Charles de Dreuille' />
        </div>
      </div>
    );
  }
}

export default Institut;
