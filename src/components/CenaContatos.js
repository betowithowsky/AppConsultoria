import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor='#61BD8C'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61BD8C' />

                <View style={styles.cabecalho}>
                    <Image source={imgContatos} />
                    <Text style={styles.txtTitulo}>CONTATOS</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.txtConteudo}>TEL: (11) 98284-8095</Text>
                    <Text style={styles.txtConteudo}>CEL: (11) 98284-8095</Text>
                    <Text style={styles.txtConteudo}>EMAIL: betowithowsky@gmail.com</Text>
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
        color: '#61BD8C'
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
        marginLeft: 20,
        fontSize: 16
    }
});