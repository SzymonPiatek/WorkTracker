import BackButton from '@/components/BackButton';
import { styles } from '@/styles/styles';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default function showTimePage() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainTimeContainer}>
      <View style={styles.mainMenuHalfContainer}>
        <Text style={styles.header}>Zobacz czasy</Text>
      </View>

      <BackButton navigation={navigation} />
    </View>
  );
}
