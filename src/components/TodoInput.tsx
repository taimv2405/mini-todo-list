import { Button, TextInput, View } from "react-native";

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
        value={value}
        onChangeText={onChangeText}
        placeholder="Nhập tên công việc"
        returnKeyType="done"
        onSubmitEditing={onSubmit}
      />
      <Button title="Thêm" onPress={onSubmit} />
    </View>
  );
}
