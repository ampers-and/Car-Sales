import React from 'react';

import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature, subtractFeature } from './actions/actions';

const App = ({addFeature, subtractFeature, additionalPrice, car, store}) => {
  // console.log(props);
  
  const removeFeature = item => {
    // dispatch an action here to remove an item
    subtractFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={store} buyItem={buyItem}/>
        <Total car={car} additionalPrice={additionalPrice} />
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
