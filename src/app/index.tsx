import { Text, View, StyleSheet } from "react-native";

const STUDENT = {
  id: "23521382",
  name: "Võ Minh Tài",
};

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
      <Text style={styles.subtitle}>Buổi 1 - Introduction</Text>
      <Text>{STUDENT.id} - {STUDENT.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontStyle: "italic",
  },
});
