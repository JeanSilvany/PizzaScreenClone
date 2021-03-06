import React from 'react';
import {View, StatusBar} from 'react-native';
import BagFooter from './src/page/components/BagFooter';
import HeaderBar from './src/page/components/HeaderBar';
import PizzaCard from './src/page/components/PizzaCard';
import 'react-native-reanimated';

interface data {
  name: string;
  value: number;
}

const PizzaScreenClone: React.FC = () => {
  const data = {
    name: 'Pepperoni',
    value: 7.5,
  };

  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={{flex: 1, padding: 18, backgroundColor: '#fff'}}>
        <HeaderBar data={data} />
        <PizzaCard />
        <BagFooter />
      </View>
    </>
  );
};

export default PizzaScreenClone;
