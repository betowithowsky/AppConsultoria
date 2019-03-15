import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgContatos = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor='#EC7148'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#EC7148' />

                <View style={styles.cabecalho}>
                    <Image source={imgContatos} />
                    <Text style={styles.txtTitulo}>A Empresa</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.txtConteudo}>lorem ipsum dolres lorem ipsum dolores bla bla bla</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    txtTitulo: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20,
        color: '#EC7148'
    },
    cabecalho: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 50
    },
    conteudo: {
        marginTop: 30,
        marginLeft: 20
    },
    txtConteudo: {
        alignItems: 'center',
        fontSize: 16
    }
});