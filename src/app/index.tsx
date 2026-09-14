import Header from "@/components/Header";
import StatsBar from "@/components/StatsBar";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import type { Todo } from "@/types/todo";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

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

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const totalCount = todos.length;
  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;

  return (
    <View style={styles.screen}>
      <Header
        title="Mini Todo List"
        description="Buổi 2 - React Native Fundamentals"
      />

      <TodoInput
        value={title}
        onChangeText={setTitle}
        onSubmit={handleAddTodo}
      />

      <StatsBar
        total={totalCount}
        completed={completedCount}
      />

      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});