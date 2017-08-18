import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from '../home/Home';
import ChristianLouboutin from '../projects/christian-louboutin/ChristianLouboutin';
import Institut from '../projects/institut/Institut';
import CocaCola from '../projects/coca-cola/CocaCola';
import LouboutinSpikes from '../projects/louboutin-spikes/LouboutinSpikes';
import Field from '../projects/field/Field';
import Floom from '../projects/floom/Floom';
import Couturelab from '../projects/couturelab/Couturelab';
import Orogo from '../projects/orogo/Orogo';
import SportyHenri from '../projects/sporty-henri/SportyHenri';
import ComingSoon from '../projects/coming-soon/ComingSoon';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/christian-louboutin" component={ChristianLouboutin}/>
          <Route path="/institut" component={Institut}/>
          <Route path="/coca-cola" component={CocaCola}/>
          <Route path="/louboutin-spikes" component={LouboutinSpikes}/>
          <Route path="/field" component={Field}/>
          <Route path="/floom" component={Floom}/>
          <Route path="/sporty-henri" component={SportyHenri}/>
          <Route path="/harbour" component={ComingSoon}/>
          <Route path="/edclub" component={ComingSoon}/>
          <Route path="/couturelab" component={Couturelab}/>
          <Route path="/orogo" component={Orogo}/>
        </div>
      </Router>
    );
  }
}

export default App;
