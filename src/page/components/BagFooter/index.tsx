import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';

const BagFooter: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.cardButton}>
        <View style={styles.bagBox}>
          <Icon name="shopping-bag" size={25} color={'#000'} />
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Add to bucket</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BagFooter;
