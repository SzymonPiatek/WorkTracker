import Button from '@/components/button/Button';
import { styles } from '@/styles/styles';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default function Index() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainMenuContainer}>
      <View style={styles.mainMenuHalfContainer}>
        <Text style={styles.logo}>WorkTracker</Text>
      </View>

      <View style={styles.mainMenuHalfContainer}>
        <Button onPress={() => navigation.navigate('addtime' as never)}>
          <Text style={styles.buttonText} children='ODBIJ SIĘ' />
        </Button>

        <Button onPress={() => navigation.navigate('showtime' as never)}>
          <Text style={styles.buttonText} children='ZOBACZ DANE' />
        </Button>
      </View>
    </View>
  );
}
