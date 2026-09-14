import { Button, StyleSheet, TextInput, View } from "react-native";

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
    <View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Nhập tên công việc"
        onSubmitEditing={onSubmit}
      />
      <Button title="Thêm" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, padding: 8 },
});
