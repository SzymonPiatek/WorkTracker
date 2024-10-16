import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor, secondaryColor } from './colors';

export const styles = StyleSheet.create({
  mainMenuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: backgroundColor,

    padding: 20,
  },

  mainMenuHalfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    gap: 20,

    width: '100%',
  },

  mainTimeContainer: {
    flex: 1,
    justifyContent: 'space-between',

    backgroundColor: backgroundColor,

    padding: 20,
    gap: 20,
  },

  timeRecordsView: {
    gap: 20,
  },

  timeRecordsTitleView: {
    gap: 12,
  },

  timeRecordsTitleButton: {
    backgroundColor: secondaryColor,

    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,

    borderRadius: 16,

    padding: 4,
  },

  timeRecordsTitleText: {
    fontSize: 20,
    color: '#fff',
    paddingHorizontal: 4,
  },

  timeRecordsTitleTime: {
    paddingHorizontal: 8,
    paddingVertical: 4,

    backgroundColor: backgroundColor,

    borderRadius: 12,
  },

  timeRecordsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },

  timeRecordContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderRadius: 12,
  },


  timeRecordText: {
    fontSize: 16,
    color: '#fff',
  },

  logo: {
    fontSize: 48,
    color: '#fff',
  },

  header: {
    fontSize: 36,
    color: '#fff',
    textTransform: 'uppercase',
    paddingVertical: 20,
  },

  text: {
    fontSize: 24,
    color: '#fff',
  },

  button: {
    backgroundColor: primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,

    width: '100%',

    gap: 20,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonOutline: {
    width: '100%',

    paddingHorizontal: 20,
    paddingVertical: 12,

    borderRadius: 12,
    borderWidth: 2,
    borderColor: primaryColor,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    gap: 20,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
  },

  buttonIcon: {
    color: '#fff',
    fontSize: 24,
  },
});
