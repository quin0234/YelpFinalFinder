import { FETCH_DATA, FETCH_YELP_SUCCESS } from '../actions' 

export default function reducers(state, action) {
    let changes = {};

    switch(action.type) {
        case FETCH_DATA:
            changes.yelpAPI = {isFetching: action.state, dataFetched: true};
            break;
        case FETCH_YELP_SUCCESS:
            changes.businesses = {
                businesses: action.data.businesses
            };
            break;
        default:
        return state;
        }

        return Object.assign({}, state, changes);
}

