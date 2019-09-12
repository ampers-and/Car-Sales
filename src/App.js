import React from 'react';

import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature, subtractFeature } from './actions/actions';

const App = (props) => {
  console.log(props);
  
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.subtractFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

// export default App;

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  };
};

export default connect( mapStateToProps, { addFeature, subtractFeature } )(App);
