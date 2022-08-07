import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  constainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  title: {
    marginBottom: 10,
    marginTop: 6,
    fontSize: 18,
    fontWeight: '600',
  },
});
