import { styles } from '@/styles/styles';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

export default function MainMenuPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainMenuContainer}>
      <View style={styles.mainMenuHalfContainer}>
        <Text style={styles.logo}>WorkTracker</Text>
      </View>

      <View style={styles.mainMenuHalfContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddTime')}>
          <Text style={styles.buttonText}>ODBIJ SIĘ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ZOBACZ DANE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
