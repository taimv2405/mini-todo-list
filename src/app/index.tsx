import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function Index() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      title: trimmedTitle,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Mini Todo List</Text>
        <Text style={styles.description}>
          Buổi 2 - React Native Fundamentals: component, props, state, xử lý sự
          kiện, render có điều kiện và render danh sách.
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Nhập tên công việc"
          placeholderTextColor="#9ca3af"
          returnKeyType="done"
          onSubmitEditing={handleAddTodo}
        />
        <Pressable
          style={({ pressed }) => [
            styles.addButton,
            pressed && styles.addButtonPressed,
          ]}
          onPress={handleAddTodo}
        >
          <Text style={styles.addButtonText}>Thêm</Text>
        </Pressable>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
            onPress={() => handleToggleTodo(item.id)}
          >
            <Text
              style={[styles.itemTitle, item.completed && styles.itemTitleDone]}
            >
              {item.title}
            </Text>
            <Text style={styles.itemStatus}>
              {item.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}
            </Text>
          </Pressable>
        )}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
  listContent: {
    padding: 16,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#f1f5f9",
  },
  itemPressed: {
    backgroundColor: "#e2e8f0",
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
  separator: {
    height: 10,
  },
});
