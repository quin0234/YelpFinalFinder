import React, { Component } from 'react';
import { Container, Header, Content, Footer, Body, Button, Title, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';

export default class Foot extends Component {
  render() {
    return (
      <Footer>
          <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
              <Text>Powered by <Icon name="yelp" size={20} color="#CD1F20" /> Yelp</Text>
          </Body>
        </Footer>
       
    );
  }
}