import React, { Component }  from 'react';
import { Content, Spinner, } from 'native-base';


export default class Search extends Component {

    render() {
      return (
        <Content>
        <Spinner color = 'blue' />
        </Content>
      );
    }
  }

