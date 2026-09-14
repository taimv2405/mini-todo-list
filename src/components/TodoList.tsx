import { FlatList, StyleSheet, Text, View } from "react-native";

import TodoItem from "@/components/TodoItem";
import type { Todo } from "@/types/todo";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

function EmptyList() {
  return (
    <View style={styles.empty}>
      <Text style={styles.emptyTitle}>Chưa có công việc nào</Text>
      <Text style={styles.emptyDescription}>
        Nhập tên công việc rồi bấm Thêm để bắt đầu.
      </Text>
    </View>
  );
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TodoItem todo={item} onToggle={onToggle} onDelete={onDelete} />
      )}
      contentContainerStyle={styles.listContent}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={EmptyList}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    flexGrow: 1,
    padding: 16,
  },
  separator: {
    height: 10,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  emptyDescription: {
    marginTop: 6,
    fontSize: 14,
    textAlign: "center",
    color: "#6b7280",
  },
});
