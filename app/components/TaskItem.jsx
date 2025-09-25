import react from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Theme from '../styles/theme';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <View style={[styles.row, task.done && styles.rowDone]}>
      <View style={styles.left}>
        <TouchableOpacity onPress={() => onToggle(task.id)} style={[styles.check, task.done && styles.checkDone]}>
          <Text style={task.done ? styles.checkIconDone : styles.checkIcon}>
            {task.done ? '✓' : '○'}
          </Text>
        </TouchableOpacity>

        <Text style={[styles.text, task.done && styles.textDone]} numberOfLines={2}>
          {task.text}
        </Text>
      </View>

      <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.delete}>
        <Text style={styles.deleteIcon}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  row: {
    width: '100%',
    backgroundColor: Theme.colors.row,
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowDone: { backgroundColor: Theme.colors.rowDone },
  left: { flexDirection: 'row', alignItems: 'center', flex: 1, marginRight: 10 },
  check: {
    height: 36,
    width: 36,
    borderRadius: 8,
    backgroundColor: Theme.colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkDone: { backgroundColor: Theme.colors.accent },
  checkIcon: { fontSize: 18, color: Theme.colors.textOnCard },
  checkIconDone: { fontSize: 18, color: Theme.colors.bg },
  text: {
    color: Theme.colors.textOnCard,
    fontSize: Theme.sizes.itemFont,
    flexShrink: 1,
  },
  textDone: { textDecorationLine: 'line-through', color: Theme.colors.muted },
  delete: {
    padding: 6,
    borderRadius: 6,
    backgroundColor: Theme.colors.danger,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteIcon: { fontSize: 16, color: Theme.colors.onDanger },
});
