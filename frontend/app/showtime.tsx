import BackButton from '@/components/button/BackButton';
import { TimeRecordsDiv } from '@/components/timeRecord/TimeRecordDiv';
import { styles } from '@/styles/styles';
import { TimeRecordType } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View } from 'react-native';

export default function ShowTimePage() {
  const [timeRecords, setTimeRecords] = useState<TimeRecordType[]>([
    { id: 1, isEntry: true, timestamp: new Date(Date.UTC(2024, 9, 11, 8, 0, 0)) },
    { id: 2, isEntry: false, timestamp: new Date(Date.UTC(2024, 9, 11, 16, 0, 0)) },
    { id: 3, isEntry: true, timestamp: new Date(Date.UTC(2024, 9, 12, 8, 0, 0)) },
    { id: 4, isEntry: false, timestamp: new Date(Date.UTC(2024, 9, 12, 16, 0, 0)) },
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.mainTimeContainer}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.header}>Zobacz czasy</Text>
      </View>

      <TimeRecordsDiv records={timeRecords} />

      <BackButton navigation={navigation} />
    </View>
  );
}
