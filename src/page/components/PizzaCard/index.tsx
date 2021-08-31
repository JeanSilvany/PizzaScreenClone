import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {MotiImage, useAnimationState, MotiText} from 'moti';

const sizePizza = [
  {
    id: 1,
    size: 'S',
    value: 7.5,
  },
  {
    id: 2,
    size: 'M',
    value: 10.0,
  },
  {
    id: 3,
    size: 'L',
    value: 12.5,
  },
];

const PizzaCard: React.FC = () => {
  const [menu, setMenu] = useState(1);
  const [amount, setAmount] = useState(1);

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <View style={styles.container}>
      <MotiImage
        from={{rotate: '100deg', opacity: 0, marginLeft: 500}}
        animate={{rotate: '0deg', opacity: 1, marginLeft: 0}}
        transition={{type: 'timing', duration: 1500}}
        style={styles.pizzaImage}
        source={require('../../../assets/pizza_calabresa.png')}
      />
      <View>
        {sizePizza.map((e, index) =>
          e.id === menu ? (
            <View
              style={{justifyContent: 'center', alignItems: 'center'}}
              key={`value-${index}`}>
              <Text style={{fontSize: 20}}>
                Small size {e.id == 1 ? 6 : e.id == 2 ? 8 : 10} inch
              </Text>
              <MotiText
                from={{scale: 0.9}}
                animate={{scale: 1}}
                transition={{type: 'spring'}}
                style={{fontSize: 26, fontWeight: 'bold', marginVertical: 5}}
                key={`value-${index}`}>
                ${(e.value * amount).toFixed(2)}
              </MotiText>
            </View>
          ) : null,
        )}
      </View>
      <View style={{flexDirection: 'row', marginVertical: 15}}>
        {sizePizza.map((e, index) =>
          e.id === menu ? (
            <TouchableOpacity
              key={`size-${index}`}
              onPress={() => setMenu(e.id)}
              style={styles.activeBox}>
              <Text style={{fontSize: 20, fontWeight: '500'}}>{e.size}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={`size-${index}`}
              onPress={() => setMenu(e.id)}
              style={styles.disabledBox}>
              <Text style={{fontSize: 20, fontWeight: '500', color: '#838081'}}>
                {e.size}
              </Text>
            </TouchableOpacity>
          ),
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <TouchableOpacity style={styles.removeBox} onPress={handleDecrement}>
          <Icon name="remove" size={25} color={'#000'} />
        </TouchableOpacity>
        <View style={styles.amountBox}>
          <Text style={{fontSize: 25}}>{amount}</Text>
        </View>
        <TouchableOpacity style={styles.addBox} onPress={handleIncrement}>
          <Icon name="add-outline" size={25} color={'#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PizzaCard;
