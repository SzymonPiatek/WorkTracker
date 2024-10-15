import { styles } from "@/styles/styles";
import { TimeRecordType } from "@/utils/types";
import { View } from "react-native";
import { TimeRecord } from "./TimeRecord";

export function TimeRecordsDiv({ records }: { records: TimeRecordType[] | [] }) {
  return (
    <View style={styles.timeRecordsContainer}>
      {records.map((record) => (
        <TimeRecord key={record.id} record={record} />
      ))}
    </View>
  );
}
