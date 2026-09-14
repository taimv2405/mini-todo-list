import { StyleSheet, Text, View } from "react-native";

type StatsBarProps = {
  total: number;
  completed: number;
};

export default function StatsBar({ total, completed }: StatsBarProps) {
  return (
    <View style={styles.stats}>
      <Text style={styles.statsText}>
        Tổng số công việc: <Text style={styles.statsValue}>{total}</Text>
      </Text>
      <Text style={styles.statsText}>
        Đã hoàn thành: <Text style={styles.statsValue}>{completed}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#eff6ff",
  },
  statsText: {
    fontSize: 14,
    color: "#1e40af",
  },
  statsValue: {
    fontWeight: "700",
  },
});
