import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const BagFooter: React.FC = () => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: '#000',
          width: 190,
          height: 65,
          borderRadius: 15,
        }}>
        <View
          style={{
            backgroundColor: '#ffd35a',
            height: 52,
            width: 50,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
