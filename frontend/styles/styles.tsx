import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainMenuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#262626',
  },

  mainMenuHalfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    gap: 40,
    padding: 20,

    width: '100%',
  },

  logo: {
    fontSize: 48,
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
