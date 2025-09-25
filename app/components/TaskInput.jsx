import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Theme from '../styles/theme';

const TaskInput = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const submit = () => {
    const v = value.trim();
    if (!v) return;
    onAdd(v);
    setValue('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Digite uma nova tarefa"
        placeholderTextColor={Theme.colors.placeholder}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        onSubmitEditing={submit}
        returnKeyType="done"
      />
      <TouchableOpacity onPress={submit} style={styles.btn}>
        <Text style={styles.plus}>＋</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Theme.spacing ? Theme.spacing.gap : 18,
    backgroundColor: Theme.colors.card,
    padding: 8,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: Theme.colors.textOnCard,
    fontSize: Theme.sizes.inputFont,
  },
  btn: {
    backgroundColor: Theme.colors.accent,
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    fontSize: 20,
    color: Theme.colors.bg,
    fontWeight: '700',
    lineHeight: 20,
  },
});


// Testando