/* eslint-disable prettier/prettier */
import React from 'react';
 
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
		  id : Math.random() * Math.random(),
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


  const {header, input, listContainer , button} = styles;
  return (
    <View>
      <Text style={header}>TODO List</Text>
      <TextInput
        onChangeText={task => setTask(task)}
        style={input}
        placeholder="Add a task"
		defaultValue={task}
      />
      <Button
        onPress={onAddHandler}
        title="Learn More"
        color="#841584"
	 	style={button}
      />
      <ScrollView style={listContainer}>
        {data?.map(taskSolo => (
          <List key={taskSolo.id} statusToggler={statusToggler} {...taskSolo} />
        ))}
      </ScrollView>
    </View>
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
