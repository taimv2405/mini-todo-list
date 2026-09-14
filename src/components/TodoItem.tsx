import { Pressable, StyleSheet, Text, View } from "react-native";

import type { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
      onPress={() => onToggle(todo.id)}
    >
      <View style={styles.itemContent}>
        <Text style={[styles.itemTitle, todo.completed && styles.itemTitleDone]}>
          {todo.title}
        </Text>
        <Text style={styles.itemStatus}>
          {todo.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}
        </Text>
      </View>
      <Pressable
        hitSlop={8}
        style={({ pressed }) => [
          styles.deleteButton,
          pressed && styles.deleteButtonPressed,
        ]}
        onPress={() => onDelete(todo.id)}
      >
        <Text style={styles.deleteButtonText}>Xóa</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#f1f5f9",
  },
  itemPressed: {
    backgroundColor: "#e2e8f0",
  },
  itemContent: {
    flex: 1,
    marginRight: 12,
  },
  itemTitle: {
    fontSize: 16,
    color: "#111827",
  },
  itemTitleDone: {
    textDecorationLine: "line-through",
    color: "#9ca3af",
  },
  itemStatus: {
    marginTop: 4,
    fontSize: 12,
    color: "#6b7280",
  },
  deleteButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "#fee2e2",
  },
  deleteButtonPressed: {
    backgroundColor: "#fecaca",
  },
  deleteButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#b91c1c",
  },
});
