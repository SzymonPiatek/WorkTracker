import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainMenuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#262626',

    padding: 20,
  },

  mainMenuHalfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    gap: 40,

    width: '100%',
  },

  mainTimeContainer: {
    flex: 1,

    backgroundColor: '#262626',

    padding: 20,
  },

  logo: {
    fontSize: 48,
    color: '#fff',
  },

  header: {
    fontSize: 36,
    color: '#fff',
  },

  text: {
    fontSize: 24,
    color: '#fff',
  },

  button: {
    backgroundColor: '#d48713',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,

    width: '100%',
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
