import React, { useEffect, useState } from 'react';
import {
  Container,
  InputContainer,
  Input,
  AddButton,
  BoxList,
  List,
  Checkbox,
  ItemList,
  EditIcon
} from './styles';
import edit from '../.././edit.svg';

const Form = () => {
  const getSavedTasks = () => {
    let savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      return JSON.parse(localStorage.getItem('tasks'));
    }
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(getSavedTasks());

  return (
    <Container>
      <InputContainer>
        <Input
          type='text'
          placeholder='Add a task...'
          onChange={e => setNewTask(e.target.value)}
          // onKeyPress={() => setTasks([...tasks, newTask])}
        ></Input>
        <AddButton onClick={() => setTasks([...tasks, newTask])}>Add</AddButton>
      </InputContainer>
      <BoxList>
        <List>
          {tasks.map((task, index) => (
            <ItemList key={task + index}>
              <Checkbox
                type='checkbox'
                //onClick={task => setNewTask(...tasks.splice(task))}
                onClick={() => {
                  const filteredList = tasks.filter(item => item !== task);
                  setTasks(filteredList);
                }}
              />
              {task}
              <EditIcon src={edit} />
            </ItemList>
          ))}
        </List>
      </BoxList>
    </Container>
  );
};

export default Form;
