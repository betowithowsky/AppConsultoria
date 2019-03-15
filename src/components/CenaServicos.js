import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgContatos = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor='#19D1C8'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#19D1C8' />

                <View style={styles.cabecalho}>
                    <Image source={imgContatos} />
                    <Text style={styles.txtTitulo}>Nossos Serviços</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.txtConteudo}>- Consultoria</Text>
                    <Text style={styles.txtConteudo}>- Processos</Text>
                    <Text style={styles.txtConteudo}>- Acompanhamento de Projetos</Text>
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
        color: '#19D1C8'
    },
    cabecalho: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20
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