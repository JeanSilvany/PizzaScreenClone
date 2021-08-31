import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderBar: React.FC = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Icon name="arrow-back-outline" size={25} color={'#000'} />
        </TouchableOpacity>

        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Italian</Text>
        <TouchableOpacity>
          <Icon name="heart-outline" size={25} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{color: '#939393'}}>Mixed pizza with cheese</Text>
      </View>
    </>
  );
};

export default HeaderBar;
