import {createStore} from 'redux';
import {reducer, initialState} from './redux';

export const ConfigureStore = () => {
    const store = createStore(reducer, initialState,);    
    return store;
}