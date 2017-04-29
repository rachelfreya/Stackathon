import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import styles from '../styles'

export default class Food extends Component {
  render()

  {
    const foodChart = { Milk: {moldy: true, max: '10 days', url: 'https://www.clipartkid.com/images/126/milk5-X15aEw-clipart.png'},
      'Ground Beef': {moldy: true, max: 'two days', url: 'https://www.clipartkid.com/images/306/beef-cow-wUp219-clipart.gif'},
      Steak: {moldy: true, max: 'five days', url: 'https://www.clipartkid.com/images/65/steak-by-dkdlv-simplified-version-of-the-steak-drawn-by-susan-gaber-KcsfEx-clipart.png'},
      Cheddar: {moldy: false, max: 'four weeks', url: 'https://www.clipartkid.com/images/852/cheddar-clipart-clipart-panda-free-clipart-images-j64yxT-clipart.png'},
      Bacon: {moldy: true, max: 'one week', url: 'https://www.clipartkid.com/images/103/bacon-b-and-w-clip-art-at-clker-com-vector-clip-art-online-92vCM3-clipart.png'},
      Eggs: {moldy: true, max: 'five weeks', url: 'https://www.clipartkid.com/images/27/eggs-food-clipart-pictures-royalty-free-clipart-pictures-org-rkirqD-clipart.png'},
      Bread: {moldy: true, max: 'two weeks', url: 'https://www.clipartkid.com/images/65/bread-basket-clipart-black-and-white-clipart-panda-free-clipart-MG1MuN-clipart.jpeg'},
      Chicken: {moldy: true, max: 'two days', url: 'https://www.clipartkid.com/images/4/chicken2-Sorhje-clipart.png'},
      Apple: {moldy: false, max: 'four weeks', url: 'https://www.clipartkid.com/images/298/apple-4-big-http-www-wpclipart-com-food-fruit-apple-apple-4-big-umIajy-clipart.png'}
    }
    let moldy = foodChart[this.props.name].moldy ? 'you need to throw it away' : 'you can cut off the moldy part and eat the rest'
    return (
      <View style={styles.foodView}>
        <Text style={styles.pageTitle}>{this.props.name}</Text>
        <Image style={styles.foodImg} source={{uri: foodChart[this.props.name].url}} />
        <Text style={{padding: 25}}>If the product is moldy, {moldy}. This product can last up to {foodChart[this.props.name].max} in the fridge, but the best way to test is to smell it.</Text>
      </View>
    );
  }
}
