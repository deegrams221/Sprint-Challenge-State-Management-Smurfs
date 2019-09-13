import React, {Component} from "react";
import "./App.css";

// import SmurfList and FormikSmurfForm from components
import SmurfList from './smurfList';
import FormikSmurfForm from './Form';
import {connect} from 'react-redux';
import {getSmurfData} from '../store/actions';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfData();
  }

  render() {
    if(this.props.fetching){
      return <h2>Loading smurfs...</h2>
    }
    
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <FormikSmurfForm />
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log ('mSTP: ', state);
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps,{getSmurfData})(App);