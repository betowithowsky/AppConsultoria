import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {
    if (this.props.voltar) {
      return (
        <View style={[styles.barraTitulo, { backgroundColor: this.props.corDeFundo }]}>
          <TouchableHighlight          
            underlayColor={this.props.corDeFundo}
            activeOpacity={0.3}
            onPress={() => {
              this.props.navigator.pop();
            }}
          >
            <Image source={btnVoltar} />
          </TouchableHighlight>
          <Text style={styles.titulo}>ATM Consultoria</Text>
        </View>
      );
    }

    return (
      <View style={styles.barraTitulo}>        
        <Text style={styles.titulo}>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60,
    flexDirection: 'row'
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'

  }

});
