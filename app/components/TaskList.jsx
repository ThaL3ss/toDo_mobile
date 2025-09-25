import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Theme from '../styles/theme';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete, onClearCompleted }) => {
  const completedCount = tasks.filter(t => t.done).length;

  return (
    <View style={styles.wrap}>
      <View style={styles.controls}>
        <Text style={styles.summary}>{tasks.length} tarefas • {completedCount} concluídas</Text>
        <TouchableOpacity onPress={onClearCompleted} style={styles.clear}>
          <Text style={styles.clearText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} onToggle={onToggle} onDelete={onDelete} />}
        contentContainerStyle={{ paddingBottom: 120 }}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma tarefa ainda</Text>}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  wrap: { width: '100%', marginTop: 12, flex: 1 },
  controls: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  summary: { color: Theme.colors.placeholder },
  clear: { padding: 6 },
  clearText: { color: Theme.colors.accent },
  empty: { color: Theme.colors.placeholder, textAlign: 'center', marginTop: 24 },
});
