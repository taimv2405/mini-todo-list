import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type TodoInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  onSubmit: () => void;
};

export default function TodoInput({
  value,
  onChangeText,
  onSubmit,
}: TodoInputProps) {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Nhập tên công việc"
        placeholderTextColor="#9ca3af"
        returnKeyType="done"
        onSubmitEditing={onSubmit}
      />
      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          pressed && styles.addButtonPressed,
        ]}
        onPress={onSubmit}
      >
        <Text style={styles.addButtonText}>Thêm</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#111827",
  },
  addButton: {
    marginLeft: 8,
    paddingHorizontal: 18,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#2563eb",
  },
  addButtonPressed: {
    backgroundColor: "#1d4ed8",
  },
  addButtonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#ffffff",
  },
});
