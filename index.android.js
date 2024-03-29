import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaCliente from './src/components/CenaCliente';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class app5Udemy extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {
          /*definir a cena com base na rota */
          switch (route.id) {
            case 'principal':
              return (<CenaPrincipal navigator={navigator} />);

            case 'cliente':
              return (<CenaCliente navigator={navigator} />);

            case 'contatos':
              return (<CenaContatos navigator={navigator} />);

            case 'empresa':
              return (<CenaEmpresa navigator={navigator} />);

            case 'servicos':
              return (<CenaServicos navigator={navigator} />);

            default:
              return false;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5Udemy', () => app5Udemy);
