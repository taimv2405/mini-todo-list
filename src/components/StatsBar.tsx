import { Text } from "react-native";

type StatsBarProps = {
  total: number;
  completed: number;
};

export default function StatsBar({ total, completed }: StatsBarProps) {
  return (
    <Text>
      Tổng số công việc: {total} - Đã hoàn thành: {completed}
    </Text>
  );
}
