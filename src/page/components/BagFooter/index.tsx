import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';
import {MotiView} from 'moti';

const BagFooter: React.FC = () => {
  const [bag, setBag] = useState(false);

  const confirmPurchase = () => {
    bag === false && setBag(true);
    setTimeout(() => {
      setBag(false);
    }, 3000);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={confirmPurchase}>
      <View style={styles.cardButton}>
        <View style={styles.bagBox}>
          <Icon name="shopping-bag" size={25} color={'#000'} />
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Add to bucket</Text>
        </View>
      </View>

      {bag === true ? (
        <MotiView
          style={{
            backgroundColor: '#ffd35a',
            width: 400,
            height: 30,
            position: 'absolute',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            bottom: '-60%',
          }}
          from={{marginBottom: -10, opacity: 0}}
          animate={{marginBottom: 0, opacity: 1}}
          exit={{marginBottom: -10, opacity: 0}}
          transition={{type: 'timing', repeat: 2, duration: 1500}}>
          <Text style={{color: 'black', fontSize: 20}}>Order added!</Text>
        </MotiView>
      ) : null}
    </TouchableOpacity>
  );
};

export default BagFooter;
