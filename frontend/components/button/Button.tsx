import { styles } from '@/styles/styles';
import { TouchableOpacity, View } from 'react-native';

export default function Button({ children, onPress }: { children: any; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
