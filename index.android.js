import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './app/components/Home';
import SituacaoCadastral from './app/components/SituacaoCadastral';
import Certidao from './app/components/Certidao';
import TermoApreensao from './app/components/TermoApreensao';
import RestricoesPendencias from './app/components/RestricoesPendencias';
import Antecipado from './app/components/Antecipado';

const ContribuinteConectado = StackNavigator({
  Home: {
    screen: Home
  },
  SituacaoCadastral: {
    path: 'situacaoCadastral/:login/:requestToken',
    screen: SituacaoCadastral
  },
  Certidao: {
    path: 'certidao/:login/:requestToken',
    screen: Certidao
  },
  TermoApreensao: {
    path: 'termoApreensao/:login/:requestToken',
    screen: TermoApreensao
  },
  RestricoesPendencias: {
    path: 'restricoesPendencias/:login/:requestToken',
    screen: RestricoesPendencias
  },
  Antecipado: {
    path: 'antecipado/:login/:requestToken',
    screen: Antecipado
  }
})

AppRegistry.registerComponent('ContribuinteConectado', () => ContribuinteConectado);
