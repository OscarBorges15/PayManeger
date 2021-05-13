import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {Welcome} from '../pages/Welcome'
import {Login} from '../pages/Login'
import {Menu} from '../pages/Menu'
import {Cadastro} from '../pages/Cadastro'
import {CriarRecibo} from '../pages/CriarRecibo'
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
    name="Login"
    component={Login}
  />

  <stackRoutes.Screen
    name="Menu"
    component={Menu}
  />

  <stackRoutes.Screen
    name="CriarRecibo"
    component={CriarRecibo}
  />

  <stackRoutes.Screen
    name="EnviarRecibo"
    component={EnviarRecibo}
  />

</stackRoutes.Navigator>
)
 

export default AppRoutes;
