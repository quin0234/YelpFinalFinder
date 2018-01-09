import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_YELP_SUCCESS = "FETCH_YELP_SUCCESS";

export function isFetching(state) {
  return {
      type: FETCH_DATA,
      state: state
  };
}

export function yelpFetchSuccess(data) {
  return {
      type: FETCH_YELP_SUCCESS,
      data: data
  };
}

export function getGeolocalizedList() {
    return (dispatch)=> {
      dispatch(isFetching(true));
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(isFetching(false));
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          dispatch(fetchList(lat, lng));
          
        },
        (error) => {
          console.log("Error", error);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    }
  }
  
  export function fetchList(lat, lng) {
    console.log(lat, lng);
    return (dispatch) => {
      dispatch(isFetching(true));
      Actions.search();
      axios.get('https://api.yelp.com/v3/businesses/search', {
                headers: {
                    Authorization: "Bearer " + "Dlyj1RkyR-9QLqDnSh5elsFb-MjUtuwDPgiyipOa_HZgTRsFfYU9Q6SerpEvx-YWu4jGhMJXrhzsntyx1kPldi2sNieGMRR_D6xob4RqSMxCoLWIGetV4N2AsD49WnYx"
                },
                params: {
                    term: "restaurants",
                    latitude: lat,
                    longitude: lng,
                    sort_by: "distance"
                  }
          
            })
            .then((response) => {
              dispatch(isFetching(false));
              Actions.resultslist();
              return response;
            })
            .then ((response) => {
              return response.data;
            })
            .then ((data) => {
              console.log(data)
             return dispatch(yelpFetchSuccess(data));
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }
  }
  