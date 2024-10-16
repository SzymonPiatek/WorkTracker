import { styles } from '@/styles/styles';
import { Text, TouchableOpacity, View } from 'react-native';

export default function BackButton({ navigation }: { navigation: any }) {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>WSTECZ</Text>
      </TouchableOpacity>
    </View>
  );
}
