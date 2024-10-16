import BackButton from '@/components/button/BackButton';
import { TimeRecordsDiv } from '@/components/timeRecord/TimeRecordDiv';
import { workUrl } from '@/constants';
import { styles } from '@/styles/styles';
import { TimeRecordType } from '@/utils/types';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function ShowTimePage() {
  const [timeRecords, setTimeRecords] = useState<TimeRecordType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const response = await fetch(workUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setTimeRecords(data.items);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.mainTimeContainer}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.header}>Zobacz czasy</Text>
      </View>

      <View style={{ flex: 1 }}>
        {isLoading ? (
          <Text>Ładowanie danych...</Text>
        ) : timeRecords.length > 0 ? (
          <TimeRecordsDiv records={timeRecords} />
        ) : (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 24 }}>Brak danych</Text>
          </View>
        )}
      </View>

      <BackButton navigation={navigation} />
    </View>
  );
}
