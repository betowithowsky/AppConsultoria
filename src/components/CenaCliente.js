import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaCliente extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor='#B9C941'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#B9C941' />

                <View style={styles.nossosClientes}>
                    <Image source={detalheClientes} />
                    <Text style={styles.titulo}>Nossos Clientes</Text>
                </View>

                <View style={styles.conteudo}>
                    <Image source={cliente1} />
                    <Text style={styles.txtConteudo}>Lorem ipsum dolorem</Text>
                </View>

                <View style={styles.conteudo}>
                    <Image source={cliente2} />
                    <Text style={styles.txtConteudo}>Lorem ipsum dolorem</Text>
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

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20,
        color: '#B9C941'
    },
    nossosClientes: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 30
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