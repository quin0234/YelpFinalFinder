import React from 'react'
import { Scene, Router, Stack} from 'react-native-router-flux';
import Head from './components/Head';
import ResultsList from './components/ResultsList';
import ResultDetails from './components/ResultDetails';
import Search from './components/Search';


const RouterComponent = () => {
 
    return (
        <Router>
            <Stack key="root">
            <Scene key="head" component={Head} title="Food Finder"/>
            <Scene key="search" component={Search} title="Searching" back="false"/>
            <Scene key="resultslist" component={ResultsList} title="Nearby Restaurants"/>
            <Scene key="resultdetails" component={ResultDetails} title="Restaurant Info"/>
            </Stack>
        </Router>
    );
};

export default RouterComponent;