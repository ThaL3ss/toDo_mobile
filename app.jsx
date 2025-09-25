import React from 'react';
import { SafeAreaView, StatusBar, View, Text, StyleSheet } from 'react-native';
import TaskInput from './src/components/TaskInput.jsx';
import TaskList from './src/components/TaskList.jsx';
import useTasks from './src/hooks/useTasks.js';
import Theme from './src/styles/theme.js';

export default function App() {
  const { tasks, addTask, toggleTask, deleteTask, clearCompleted } = useTasks();

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
    paddingHorizontal: 18,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    color: Theme.colors.textOnDark,
  },
});
