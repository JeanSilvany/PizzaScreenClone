import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const HeaderBar: React.FC = props => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <Icon name="arrow-back-outline" size={25} color={'#000'} />
        </TouchableOpacity>

        <Text style={styles.pizzaName}>{props.data.name}</Text>
        <TouchableOpacity>
          <Icon name="heart-outline" size={25} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomText}>
        <Text style={{color: '#939393'}}>Mixed pizza with cheese</Text>
      </View>
    </>
  );
};

export default HeaderBar;
