import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  display: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonOperator: {
    color: 'orange',
  },
  zeroButton: {
    width: 130,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonClear: {
    fontSize: 24,
    fontWeight: 'bold',
    width: 270,
    height: 60,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 50

  },
});

export default Styles;