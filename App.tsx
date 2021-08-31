import React from 'react';
import {View} from 'react-native';
import BagFooter from './src/page/components/BagFooter';
import HeaderBar from './src/page/components/HeaderBar';
import PizzaCard from './src/page/components/PizzaCard';
import 'react-native-reanimated';

const PizzaScreenClone: React.FC = () => {
  return (
    <View style={{flex: 1, padding: 18, backgroundColor: '#fff'}}>
      <HeaderBar />
      <PizzaCard />
      <BagFooter />
    </View>
  );
};

export default PizzaScreenClone;
