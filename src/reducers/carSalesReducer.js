import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/actions';

// import {state} from '../App'

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const carSalesReducer = (state = initialState, action) => {

    // return state;
    console.log('state:', state, 'action:', action);

    switch (action.type){
        
        case ADD_FEATURE :
            return{
                ...state,
                features:[
                    ...state.features,
                    action.payload
                ]
            }

        case REMOVE_FEATURE :
            return{
                ...state,
                features: 
                    state.features.filter(item => {
                        return item !== action.payload;
                    })
            }
    }

}