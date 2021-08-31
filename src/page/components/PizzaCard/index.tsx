import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

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

const PizzaCard: React.FC = props => {
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
      <Image
        style={styles.pizzaImage}
        source={require('../../../assets/pizza_calabresa.png')}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Small size 6 inch</Text>
        {sizePizza.map((e, index) =>
          e.id === menu ? (
            <Text
              style={{fontSize: 26, fontWeight: 'bold', marginVertical: 5}}
              key={`value-${index}`}>
              ${(e.value * amount).toFixed(2)}
            </Text>
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
              <Text style={{fontSize: 20, fontWeight: '500'}}>{e.size}</Text>
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
