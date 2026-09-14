import { StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  title: string;
  description: string;
};

export default function Header({ title, description }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    color: "#6b7280",
  },
});
