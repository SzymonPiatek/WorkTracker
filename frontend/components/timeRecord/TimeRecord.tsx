import { styles } from '@/styles/styles';
import { TimeRecordType } from '@/utils/types';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function TimeRecord({ record }: { record: TimeRecordType }) {
  const date = new Date(record.timestamp.toString());

  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();
  const day = date.getUTCDay();

  const daysOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];

  const dayName = daysOfWeek[day];
  const thisDate = `${day}.${month}.${year}`;

  return (
    <View style={styles.timeRecordContainer}>
      <Icon
        name={record.isEntry ? 'arrow-circle-right' : 'arrow-circle-left'}
        style={[{ fontSize: 20 }, record.isEntry ? { color: 'green' } : { color: 'red' }]}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
          backgroundColor: '#d48713',
          borderRadius: 12,
          flex: 1,
          padding: 8,
        }}
      >
        <Text style={styles.timeRecordText}>{thisDate}</Text>
        <Text style={styles.timeRecordText}>{dayName}</Text>
      </View>
    </View>
  );
}
