import React, { Component }  from 'react';
import { Container, Content, Left, Body, Right, Button, Title, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { getGeolocalizedList } from '../actions';

class Head extends Component {
  render() {
    return (
      <Content>
          <Body>
          <Button iconLeft onPress={this.props.getYelpData} style={{ flex: 1, flexDirection:'row',  justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="location" size={30} padding={10} />
          <Text>Find Nearby Restaurants</Text>
          </Button>
          </Body>
        </Content>
    );
  }
}
const mapStatetoProps = (state) => {
  return;
}
const mapDispatchToProps = (dispatch) => {
  return {
      getYelpData: (e) => dispatch(getGeolocalizedList())
  };
};

export default connect(null, mapDispatchToProps)(Head);