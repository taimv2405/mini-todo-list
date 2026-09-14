import { FlatList, Text } from "react-native";

import TodoItem from "@/components/TodoItem";
import type { Todo } from "@/types/todo";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

function EmptyList() {
  return <Text>Chưa có công việc nào. Nhập tên công việc rồi bấm Thêm.</Text>;
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TodoItem todo={item} onToggle={onToggle} onDelete={onDelete} />
      )}
      ListEmptyComponent={EmptyList}
    />
  );
}
