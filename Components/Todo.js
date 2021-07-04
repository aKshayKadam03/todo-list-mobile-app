/* eslint-disable prettier/prettier */
import React from 'react';
import uuid from 'react-native-uuid';
;
 
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import List from './List';

function Todo() {
  const [data, setData] = React.useState([]);
  const [task, setTask] = React.useState('');

  const onAddHandler = () => {
 	if(task.trim() === "") return;
 
	const payload = {
		  id :uuid.v4(),
		  task,
		  status : false
	  }
    setData([...data, payload]);
	setTask("")
  };

  const statusToggler = (id) => {
	  let arr = [...data];
	  let item = arr.find(solo => solo.id === id)
	  item.status = !item.status
	  setData(arr)	 
  }

  const taskRemoveHandler = (id) => {
	  let arr = [...data];
	  arr = arr.filter(solo => solo.id !== id)
	  setData(arr)	
  }


  const {header, input, listContainer , button} = styles;
  return (
    <ScrollView>
      <Text style={header}>TODO List</Text>
      <TextInput
        onChangeText={task => setTask(task)}
        style={input}
        placeholder="Add a task"
		defaultValue={task}
      />
      <Button
        onPress={onAddHandler}
        title="Add Task"
        color="#841584"
	 	style={button}
      />
      <View style={listContainer}>
        {data?.map(taskSolo => (
          <List key={taskSolo.id} taskRemoveHandler={taskRemoveHandler} statusToggler={statusToggler} {...taskSolo} />
        ))}
      </View>
    </ScrollView>
  );
}

export default Todo;

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10,
  },
  input: {
    backgroundColor: '#e1f4f3',
    textAlign: 'center',
    fontSize: 18,
	marginVertical: 10,
  },

  button : {
	marginVertical: 100,
  }
});
