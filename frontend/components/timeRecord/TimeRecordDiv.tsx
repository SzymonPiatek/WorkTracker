import { styles } from '@/styles/styles';
import { TimeRecordType } from '@/utils/types';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TimeRecord } from './TimeRecord';
import { monthNames } from '@/utils/date';
import { useEffect, useState } from 'react';

export function TimeRecordsDiv({ records }: { records: TimeRecordType[] | [] }) {
  const todayDate = new Date();
  const currentYearMonth = `${todayDate.getUTCFullYear()}-${String(todayDate.getUTCMonth() + 1).padStart(2, '0')}`;

  const [visibleMonths, setVisibleMonths] = useState<{ [key: string]: boolean }>({});

  const toggleMonthVisibility = (yearMonth: string) => {
    setVisibleMonths((prev) => {
      const newVisibility: { [key: string]: boolean } = {};

      Object.keys(prev).forEach((month) => {
        newVisibility[month] = false;
      });

      newVisibility[yearMonth] = !prev[yearMonth];

      return newVisibility;
    });
  };

  const groupRecordsByMonth = (records: TimeRecordType[]) => {
    return records.reduce((groups: { [key: string]: TimeRecordType[] }, record) => {
      const date = new Date(record.timestamp);
      const yearMonth = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`;
      if (!groups[yearMonth]) {
        groups[yearMonth] = [];
      }
      groups[yearMonth].push(record);
      return groups;
    }, {});
  };

  const groupedRecords = groupRecordsByMonth(records);

  const sortedMonthKeys = Object.keys(groupedRecords).sort((a, b) => {
    const [yearA, monthA] = a.split('-').map(Number);
    const [yearB, monthB] = b.split('-').map(Number);
    return yearA === yearB ? monthB - monthA : yearB - yearA;
  });

  Object.values(groupedRecords).forEach((records) => {
    records.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  });

  useEffect(() => {
    setVisibleMonths((prev) => ({
      ...prev,
      [currentYearMonth]: true,
    }));
  }, [currentYearMonth]);

  return (
    <ScrollView style={{ gap: 20 }}>
      <View style={{ gap: 20 }}>
        {sortedMonthKeys.map((yearMonth) => {
          const [year, month] = yearMonth.split('-');
          const monthName = `${monthNames[parseInt(month) - 1]} ${year}`;
          const isVisible = visibleMonths[yearMonth];

          return (
            <View key={yearMonth} style={{ gap: 12 }}>
              <TouchableOpacity onPress={() => toggleMonthVisibility(yearMonth)} style={styles.timeRecordTitleDiv}>
                <View style={styles.timeRecordTitleButton}>
                  <Text style={styles.timeRecordTitle} children={monthName} />
                </View>
                <View style={styles.timeRecordTime}>
                  <Text style={styles.timeRecordTitle}>- 00:15</Text>
                </View>
              </TouchableOpacity>

              {isVisible && (
                <View style={styles.timeRecordsContainer}>
                  {groupedRecords[yearMonth].map((record) => {
                    const recordDate = new Date(record.timestamp);
                    const dayOfMonth = recordDate.getUTCDate();
                    const isEven = dayOfMonth % 2 === 0;

                    return <TimeRecord key={record.id} record={record} isEven={isEven} />;
                  })}
                </View>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
