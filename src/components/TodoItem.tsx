import { Button, Pressable, Text } from "react-native";

import type { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <Pressable onPress={() => onToggle(todo.id)}>
      <Text>{todo.title}</Text>
      <Text>{todo.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}</Text>
      <Button title="Xóa" onPress={() => onDelete(todo.id)} />
    </Pressable>
  );
}
