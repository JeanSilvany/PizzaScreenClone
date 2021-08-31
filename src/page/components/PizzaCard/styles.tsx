import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pizzaImage: {
    height: 250,
    width: 300,
    alignSelf: 'center',
  },
  activeBox: {
    height: 55,
    width: 55,
    backgroundColor: '#ffd35a',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  disabledBox: {
    height: 55,
    width: 55,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  removeBox: {
    height: 45,
    width: 45,
    backgroundColor: '#f6f6f6',

    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountBox: {
    height: 45,
    width: 45,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBox: {
    height: 45,
    width: 45,
    backgroundColor: '#ffd35a',
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
