import { styles } from '@/styles/styles';
import { Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Button({
  children,
  onPress,
  icon,
  iconStyle,
  type,
}: {
  children: string;
  onPress: () => void;
  icon?: string;
  iconStyle?: any;
  type?: string;
}) {
  return (
    <Pressable style={type === 'outline' ? styles.buttonOutline : styles.button} onPress={onPress}>
      {icon && <Icon name={icon} style={[styles.buttonIcon, iconStyle]} />}
      {children && <Text style={styles.buttonText}>{children}</Text>}
    </Pressable>
  );
}
