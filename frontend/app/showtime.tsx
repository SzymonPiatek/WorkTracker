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
    { id: 5, isEntry: true, timestamp: new Date(Date.UTC(2024, 7, 11, 8, 0, 0)) },
    { id: 6, isEntry: false, timestamp: new Date(Date.UTC(2024, 7, 11, 16, 0, 0)) },
    { id: 7, isEntry: true, timestamp: new Date(Date.UTC(2024, 7, 12, 8, 0, 0)) },
    { id: 8, isEntry: false, timestamp: new Date(Date.UTC(2024, 7, 12, 16, 0, 0)) },
    { id: 9, isEntry: true, timestamp: new Date(Date.UTC(2024, 7, 11, 8, 0, 0)) },
    { id: 10, isEntry: false, timestamp: new Date(Date.UTC(2024, 7, 11, 16, 0, 0)) },
    { id: 11, isEntry: true, timestamp: new Date(Date.UTC(2024, 7, 12, 8, 0, 0)) },
    { id: 12, isEntry: false, timestamp: new Date(Date.UTC(2024, 7, 12, 16, 0, 0)) },
    { id: 13, isEntry: true, timestamp: new Date(Date.UTC(2024, 10, 13, 8, 0, 0)) },
    { id: 14, isEntry: false, timestamp: new Date(Date.UTC(2024, 10, 13, 16, 0, 0)) },
    { id: 15, isEntry: true, timestamp: new Date(Date.UTC(2024, 10, 14, 8, 0, 0)) },
    { id: 16, isEntry: false, timestamp: new Date(Date.UTC(2024, 10, 14, 16, 0, 0)) },
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
