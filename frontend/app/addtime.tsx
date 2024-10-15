import BackButton from '@/components/button/BackButton';
import { styles } from '@/styles/styles';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default function AddTimePage() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainTimeContainer}>
      <View style={styles.mainMenuHalfContainer}>
        <Text style={styles.header}>Dodaj czas</Text>
      </View>

      <BackButton navigation={navigation} />
    </View>
  );
}
