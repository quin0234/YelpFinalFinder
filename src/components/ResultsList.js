import React, {
  Component
} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Right,
  Left,
  Body,
  Spinner,
  Thumbnail,
  Button,
  Title, 
  Footer
} from 'native-base';
import {
  connect
} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import {
  ListView,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import reducers from '../reducers/reducers';
import { Actions } from 'react-native-router-flux';
import ResultDetails from './ResultDetails';



class ResultsList extends Component {

  render() {
      const object = this.props.businesses;
      const array = object.businesses;
      
      let arrays = []

      for( let x in array ){
       
        arrays.push(array[x]);
      }

     

      return ( 
        <Content>
      <List> 
      {arrays.map((item, i) => {

        onPress = () => {
        console.log('You clicked: ' + item);
        Actions.resultdetails({item})
        };

        const distance = item.distance/1000;
              return (
                <ListItem key={item.id} style={{width: '100%', marginLeft: 0, paddingLeft: 10, paddingRight: 10, marginRight: 0}}>
                <Body> 
                <Text>{item.name}</Text> 
              <Text note>{item.categories[0].title}, {distance.toFixed(2)} km, Rating: {item.rating}</Text>
                </Body>
                <TouchableOpacity onPress={onPress.bind(this, item)} key={i}>
                <Right>
                <Icon name="chevron-right" size={30} />
                </Right>
                </TouchableOpacity>
                    </ListItem>
                    
              )
            })
          } 
      </List>
      </Content>
      );}
  }

  const mapStateToProps = state => {
    return {
      dataFetched: state.yelpAPI.dataFetched,
      isFetching: state.yelpAPI.isFetching,
      businesses: state.businesses
    };
  };


  export default connect(mapStateToProps)(ResultsList);