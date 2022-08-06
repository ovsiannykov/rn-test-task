import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
  },
  title: {
    marginTop: 100,
    fontSize: 42,
    fontWeight: '600',
  },
  container: {
    marginTop: 80,
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
    marginTop: 120,
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonDisabled: {
    width: 250,
    height: 60,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    opacity: 0.6,
  },
  buttonTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: 'white',
  },
});
