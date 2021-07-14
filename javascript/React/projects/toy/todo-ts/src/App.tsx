import React, { ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';
import {ITask} from './Interfaces'

const App: React.FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todo, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }
  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline}
    setTodoList([...todo, newTask])
    setTask("")
    setDeadline(0)
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todo.filter((task)=> {
      return task.taskName != taskNameToDelete
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input name="task" type="text" value={task} placeholder="Task..." onChange={handleChange} />
          <input name="deadline" type="number" value={deadline} placeholder="Deadline (in Days)..." onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="todoList">
        {todo.map((t: ITask, key: number)=> {
          return <TodoTask key={key} task={t} completeTask={completeTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
