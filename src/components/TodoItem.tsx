import { Button, Pressable, StyleSheet, Text } from "react-native";

import type { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <Pressable style={styles.item} onPress={() => onToggle(todo.id)}>
      <Text style={styles.title}>
        {todo.completed ? "[Xong]" : "[Chưa xong]"} {todo.title}
      </Text>
      <Button title="Xóa" onPress={() => onDelete(todo.id)} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 8 },
  title: { flex: 1 },
});
