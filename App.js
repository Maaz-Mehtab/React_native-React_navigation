
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';



import Registration from './src/Registration';
import Product from './src/Product';
import ProductDescription from './src/ProductDescription';

const AppNavigator = createStackNavigator({
  Product: { screen: Product },
  Registration: { screen: Registration, },
  ProductDescription: { screen: ProductDescription, },


}, {
  headerMode: 'none',
  mode: 'modal',
  defaultNavigationOptions: {
    gesturesEnabled: false,
  }
}
)
const SimpleApp = createAppContainer(AppNavigator)
export default SimpleApp;

