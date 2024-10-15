import { StyleSheet } from 'react-native';

export const primaryColor = '#d48713';
export const secondaryColor = '#d46013';
export const backgroundColor = '#262626';

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

  timeRecordTitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },

  timeRecordTitleDiv: {
    backgroundColor: secondaryColor,
    borderRadius: 12,

    paddingVertical: 4,
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
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
