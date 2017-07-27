/**
 * Created by reube on 27/07/2017.
 */
import { FETCH_WEATHER } from '../actions/types';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_WEATHER:
            return [ action.payload.data, ...state];
    }
    return state;
}