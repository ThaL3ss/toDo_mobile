// app/index.jsx
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, StyleSheet } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Theme from './styles/theme';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now().toString(), text, done: false };
    setTasks(prev => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const clearCompleted = () => {
    setTasks(prev => prev.filter(t => !t.done));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Theme.colors.bg} />
      <View style={styles.container}>
        <Text style={styles.title}>ToDo</Text>

        <TaskInput onAdd={addTask} />

        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onClearCompleted={clearCompleted}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Theme.colors.bg },
  container: {
    flex: 1,
    paddingHorizontal: Theme.spacing.pagePadding,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: Theme.sizes.title,
    color: Theme.colors.textOnDark,
  },
});
