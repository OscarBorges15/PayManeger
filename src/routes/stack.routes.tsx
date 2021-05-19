import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {Welcome} from '../pages/Welcome'
import {Login} from '../pages/Login'
import {Menu} from '../pages/Menu'
import {Cadastro} from '../pages/Cadastro'
import {CadastroConfirmation} from '../pages/CadastroConfirmation'
import {EnviarRecibo} from '../pages/EnviarRecibo'

const stackRoutes = createStackNavigator();

const AppRoutes : React.FC = () => (
  <stackRoutes.Navigator
    headerMode='none'
  >

  <stackRoutes.Screen
    name="Welcome"
    component={Welcome}
  />

<stackRoutes.Screen
    name="Cadastro"
    component={Cadastro}
  />

  <stackRoutes.Screen
    name="CadastroConfirmation"
    component={CadastroConfirmation}
  />

  <stackRoutes.Screen
    name="Login"
    component={Login}
  />

  <stackRoutes.Screen
    name="Menu"
    component={Menu}
  />

  <stackRoutes.Screen
    name="EnviarRecibo"
    component={EnviarRecibo}
  />

</stackRoutes.Navigator>
)
 

export default AppRoutes;
