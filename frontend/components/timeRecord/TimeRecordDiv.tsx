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

  const groupRecords = (records: TimeRecordType[]) => {
    return records.reduce((acc, record) => {
      const date = new Date(record.timestamp);
      const yearMonth = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`;
      const yearMonthDay = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(
        date.getUTCDate(),
      ).padStart(2, '0')}`;

      if (!acc[yearMonth]) acc[yearMonth] = {};
      if (!acc[yearMonth][yearMonthDay]) acc[yearMonth][yearMonthDay] = [];

      acc[yearMonth][yearMonthDay].push(record);
      return acc;
    }, {} as { [key: string]: { [key: string]: TimeRecordType[] } });
  };

  const calculateWorkTime = (records: TimeRecordType[], isDaily: boolean = false): string => {
    const msInHour = 1000 * 60 * 60;
    const msInDay = msInHour * 8;
    let totalActualWorkTime = 0;

    const sortedRecords = records.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

    for (let i = 0; i < sortedRecords.length - 1; i += 2) {
      const entryTime = new Date(sortedRecords[i].timestamp);
      const exitTime = new Date(sortedRecords[i + 1].timestamp);
      totalActualWorkTime += exitTime.getTime() - entryTime.getTime();
    }

    const uniqueDaysWorked = new Set(
      sortedRecords.map((record) => new Date(record.timestamp).toISOString().split('T')[0]),
    );
    const theoreticalWorkTime = uniqueDaysWorked.size * msInDay;

    const timeDifferenceMs = theoreticalWorkTime - totalActualWorkTime;
    const hoursDiff = Math.floor(timeDifferenceMs / msInHour);
    const minutesDiff = Math.floor((timeDifferenceMs % msInHour) / (1000 * 60));

    return `${hoursDiff > 0 ? '-' : ''} ${String(Math.abs(hoursDiff)).padStart(2, '0')}:${String(
      Math.abs(minutesDiff),
    ).padStart(2, '0')}`;
  };

  const groupedRecords = groupRecords(records);
  const sortedMonthKeys = Object.keys(groupedRecords).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  useEffect(() => {
    setVisibleMonths((prev) => ({ ...prev, [currentYearMonth]: true }));
  }, [currentYearMonth]);

  return (
    <ScrollView style={{ gap: 20 }}>
      <View style={{ gap: 20 }}>
        {sortedMonthKeys.map((yearMonth) => {
          const monthName = `${monthNames[parseInt(yearMonth.split('-')[1]) - 1]} ${yearMonth.split('-')[0]}`;
          const isVisible = visibleMonths[yearMonth];
          const groupedByDay = groupedRecords[yearMonth];
          const sortedDayKeys = Object.keys(groupedByDay).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
          const workTimeDifference = calculateWorkTime(Object.values(groupedByDay).flat());

          return (
            <View key={yearMonth} style={{ gap: 12 }}>
              <TouchableOpacity onPress={() => toggleMonthVisibility(yearMonth)} style={styles.timeRecordTitleDiv}>
                <View style={styles.timeRecordTitleButton}>
                  <Text style={styles.timeRecordTitle}>{monthName}</Text>
                </View>
                <View style={styles.timeRecordTime}>
                  <Text style={styles.timeRecordTitle}>{workTimeDifference}</Text>
                </View>
              </TouchableOpacity>

              {isVisible && (
                <View style={styles.timeRecordsContainer}>
                  {sortedDayKeys.map((dayKey) => (
                    <View key={dayKey} style={{ gap: 12 }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
                        <Text style={{ fontSize: 16, color: '#fff' }}>{dayKey}</Text>
                        <Text style={{ fontSize: 16, color: '#fff' }}>
                          {calculateWorkTime(groupedByDay[dayKey], true)}
                        </Text>
                      </View>
                      {groupedByDay[dayKey]
                        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                        .map((record) => {
                          const recordDate = new Date(record.timestamp);
                          const dayOfMonth = recordDate.getUTCDate();
                          const isEven = dayOfMonth % 2 === 0;

                          return <TimeRecord key={record.id} record={record} isEven={isEven} />;
                        })}
                    </View>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
