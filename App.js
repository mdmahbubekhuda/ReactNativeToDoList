import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task/Task';

export default function App() {
  const [tasksList, setTaskList] = useState([])
  const [task, setTask] = useState('')

  const handleAddTask = () => {
    if (!task) return
    setTaskList([...tasksList, task])
    setTask(null)
    Keyboard.dismiss()
  }

  const handleDelete = (taskIdx) => {
    setTaskList(tasksList.filter((_, idx) => idx !== taskIdx))
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* heading */}
      <Text style={styles.title}>To Do List</Text>

      {/* display tasks */}
      <ScrollView>
        {
          tasksList?.map((item, idx) => <Task key={idx} handleDelete={handleDelete} idx={idx} item={item} />)
        }
      </ScrollView>

      {/* add task */}
      <View style={styles.interactivity}>
        <KeyboardAvoidingView>
          <TextInput placeholder='Type here...' value={task} onChangeText={(text) => setTask(text)} style={styles.inputText} />
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={{ fontSize: 28, textAlign: 'center' }}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
  },
  title: {
    fontSize: 40,
    alignSelf: 'center',
    color: "grey",
    paddingTop: 20,
  },
  interactivity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  inputText: {
    width: 200,
    height: 35,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  addButton: {
    backgroundColor: '#b0c4de',
    height: 40,
    width: 40,
    borderRadius: 100,
  }
});
