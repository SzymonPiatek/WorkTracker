import { primaryColor, secondaryColor } from '@/styles/colors';
import { styles } from '@/styles/styles';
import { daysOfWeek } from '@/utils/date';
import { TimeRecordType } from '@/utils/types';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function TimeRecord({ record, isEven }: { record: TimeRecordType; isEven: boolean }) {
  const date = new Date(record.timestamp.toString());

  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();
  const day = String(date.getUTCDate()).padStart(2, '0');
  const dayOfWeek = date.getUTCDay();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const dayName = daysOfWeek[dayOfWeek];
  const thisDate = `${day}.${month}.${year}`;
  const thisTime = `${hours}:${minutes}`;

  return (
    <View style={styles.timeRecordContainer}>
      <Icon
        name={record.isEntry ? 'arrow-circle-right' : 'arrow-circle-left'}
        style={[{ color: `${record.isEntry ? 'green' : 'red'}`, fontSize: 28 }]}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
          backgroundColor: isEven ? `${primaryColor}90` : `${secondaryColor}90`,
          borderColor: isEven ? '#d48713' : '#d46d13',
          borderWidth: 1,
          borderRadius: 12,
          flex: 1,
          padding: 8,
        }}
      >
        <Text style={styles.timeRecordText}>{thisDate}</Text>
        <Text style={styles.timeRecordText}>{thisTime}</Text>
        <Text style={styles.timeRecordText}>{dayName}</Text>
      </View>
    </View>
  );
}
