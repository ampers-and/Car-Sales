//ACTIONS

//Add features action

export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = feature => {
    console.log(feature);
    return{type: ADD_FEATURE, payload:feature}
}

//Remove features action

export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const subtractFeature = feature => {
    console.log(feature);
    return{type: REMOVE_FEATURE, payload:feature}
}