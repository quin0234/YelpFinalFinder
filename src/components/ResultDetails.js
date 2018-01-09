import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Right, Left, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';




export default class ResultDetails extends Component {
    constructor(props){
        super(props);

    }


 render () {
  var { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  console.log(LONGITUDE_DELTA)
    const distance = this.props.item.distance/1000;
    
    onPress = () => {
      console.log(this.props.item.phone)
      RNImmediatePhoneCall.immediatePhoneCall(this.props.item.phone)
      };

    const GOOGLE_MAPS_APIKEY = 'AIzaSyCnQK4djuC8z3CZoN5E6yezjd9QoNdeq6s';
      return (    
        <Content padding={10} style={{flex: 1, height: 587}}>
          <Card>
            <CardItem>
                <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
                  <Title>{this.props.item.name}</Title>
                </Body>
            </CardItem>
            <CardItem>
                <Left>
                <Text>{this.props.item.categories[0].title}</Text>
                </Left>
                <Right>
                <Text>{distance.toFixed(2)} km</Text>
                </Right>
            </CardItem>
            <CardItem>
              <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{uri: this.props.item.image_url}} style={{height: 250, width: 300, flex: 2}}/>
              </Body>
            </CardItem>
            <CardItem>
                <Left>
                    <Text>Rating: {this.props.item.rating}</Text>
                </Left>
                <Right>
                <Text>Price: {this.props.item.price}</Text>
                </Right>
            </CardItem>
            <CardItem>
            <Button block success onPress={onPress} style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
            <Text><Icon name="phone" size={20} /> {this.props.item.phone}</Text>
          </Button>
            </CardItem>

          <CardItem style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>

          <MapView
                provider={ PROVIDER_GOOGLE }
                style = { styles.map }
                initialRegion={{
                  latitude: 45.348306,
                  longitude: -75.756240,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                }}>

          <MapView.Marker title={this.props.item.name} coordinate={{latitude:this.props.item.coordinates.latitude, longitude:this.props.item.coordinates.longitude}}/>
          <MapView.Marker title={'Algonquin College'} coordinate={{ latitude: 45.348306, longitude: -75.756240 }}/>

          <MapViewDirections
              origin={{ latitude: 45.348306, longitude: -75.756240 }}
              destination={{ latitude: this.props.item.coordinates.latitude, longitude: this.props.item.coordinates.longitude }}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
            strokeColor="hotpink"
            />
          </MapView>
          </CardItem>
          </Card>
                  </Content> 
     )

}
};

const styles = StyleSheet.create({
    map: {
      height: 450, 
      width: 300,
    }
  })