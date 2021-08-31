import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const PizzaCard: React.FC = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{
          height: 250,
          width: 300,
          alignSelf: 'center',
        }}
        source={require('../../../assets/pizza_calabresa.png')}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Small size 6 inch</Text>
        <Text style={{fontSize: 26, fontWeight: 'bold', marginVertical: 5}}>
          $7.50
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 15}}>
        <TouchableOpacity
          style={{
            height: 55,
            width: 55,
            backgroundColor: '#ffd35a',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 55,
            width: 55,
            backgroundColor: '#f6f6f6',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: '500', color: '#838081'}}>
            M
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 55,
            width: 55,
            backgroundColor: '#f6f6f6',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: '500', color: '#838081'}}>
            L
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <TouchableOpacity
          style={{
            height: 45,
            width: 45,
            backgroundColor: '#f6f6f6',
            marginHorizontal: 5,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="remove" size={25} color={'#000'} />
        </TouchableOpacity>
        <View
          style={{
            height: 45,
            width: 45,
            backgroundColor: '#fff',
            marginHorizontal: 5,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25}}>1</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 45,
            width: 45,
            backgroundColor: '#ffd35a',
            marginHorizontal: 5,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="add-outline" size={25} color={'#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PizzaCard;
