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
    setVisibleMonths((prev) => ({
      ...prev,
      [yearMonth]: !prev[yearMonth],
    }));
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

  useEffect(() => {
    setVisibleMonths((prev) => ({
      ...prev,
      [currentYearMonth]: true,
    }));
  }, [currentYearMonth]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ gap: 20 }}>
        <View style={{ gap: 20 }}>
          {Object.keys(groupedRecords).map((yearMonth) => {
            const [year, month] = yearMonth.split('-');
            const monthName = `${monthNames[parseInt(month) - 1]} ${year}`;
            const isVisible = visibleMonths[yearMonth];

            return (
              <View key={yearMonth} style={{ gap: 12 }}>
                <TouchableOpacity onPress={() => toggleMonthVisibility(yearMonth)} style={styles.timeRecordTitleDiv}>
                  <Text style={styles.timeRecordTitle}>{monthName}</Text>
                </TouchableOpacity>

                {isVisible && (
                  <View style={styles.timeRecordsContainer}>
                    {groupedRecords[yearMonth].map((record) => (
                      <TimeRecord key={record.id} record={record} />
                    ))}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
