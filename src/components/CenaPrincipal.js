import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    hidden={false}
                    backgroundColor='#CCC'
                />

                <BarraNavegacao />

                <View style={styles.logo}>
                    <Image source={logo} />
                </View>

                <View style={styles.bottoes}>

                    <View style={styles.bottoesGrupo}>
                        <TouchableHighlight
                            underlayColor={'#B9C941'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'cliente' });
                            }}
                        >
                            <Image style={styles.imgButton} source={menuCliente} />
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor={'#61BD8C'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'contatos' });
                            }}
                        >
                            <Image style={styles.imgButton} source={menuContato} />
                        </TouchableHighlight>
                    </View>

                    <View style={styles.bottoesGrupo}>
                        <TouchableHighlight
                            underlayColor={'#EC7148'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'empresa' });
                            }}
                        >
                            <Image style={styles.imgButton} source={menuEmpresa} />
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#19D1C8'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'servicos' });
                            }}
                        >
                            <Image style={styles.imgButton} source={menuServico} />
                        </TouchableHighlight>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        margin: 20
    },
    bottoes: {
        alignItems: 'center'
    },
    bottoesGrupo: {
        flexDirection: 'row'
    },
    imgButton: {
        margin: 15
    }
});