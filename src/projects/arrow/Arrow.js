import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Arrow.css';

class Arrow extends Component {

  render() {
    return (
      <Link className="Arrow" to='/'>
        <svg width="24" height="14" viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg"><path d="M0 7c.02.15.083.4.178.516l4.88 6.177c.292.367.813.4 1.145.13.332-.272.394-.823.127-1.16L2.504 7.825h20.682c.45 0 .814-.368.814-.824 0-.454-.364-.822-.814-.822H2.504l3.826-4.84c.267-.335.19-.87-.127-1.157-.332-.298-.877-.207-1.144.13L.177 6.487C.04 6.657.01 6.784 0 7z" fill="#000" fill-rule="evenodd"/></svg>
      </Link>
    );
  }
}

export default Arrow;
