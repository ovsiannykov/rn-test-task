import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  label: {
    marginBottom: 15,
    marginTop: 20,
    color: 'gray',
    fontSize: 16,
  },
  input: {
    fontSize: 20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 250,
    borderRadius: 5,
  },
  errorBox: {
    height: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 2,
    fontSize: 12,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: 'white',
  },
});
