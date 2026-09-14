import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Mini Todo List</Text>
        <Text style={styles.description}>
          Buổi 2 - React Native Fundamentals: component, props, state, xử lý sự
          kiện, render có điều kiện và render danh sách.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
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
