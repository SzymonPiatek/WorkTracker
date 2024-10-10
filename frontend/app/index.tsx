import { styles } from '@/styles/styles';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.mainMenuContainer}>
      <View style={styles.mainMenuHalfContainer}>
        <Text style={styles.logo}>WorkTracker</Text>
      </View>

      <View style={styles.mainMenuHalfContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} children='ODBIJ SIĘ' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} children='ZOBACZ DANE' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
