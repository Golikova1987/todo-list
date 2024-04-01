import { useState } from "react";
import { Header } from "./components/Header/Header";
import { InputTodo } from "./components/InputTodo/InputTodo";
import { TaskTodo } from "./components/TaskTodo/TaskTodo";
import './App.css';
import { Button } from "@mui/material";

function App() {

  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState('');
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');

  let copiTasks = tasks;

  const addTask = () => {
    if(todo) {
      const taskTodo ={
        id : Math.random(),
        title: todo,
        status: false,
      }
      let newTask = [taskTodo, ...tasks]
      setTasks(newTask)
      setTodo("")
    }
    }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      addTask(e)
    }
  }

  const deleteTask = (id) => {
    let del = tasks.filter(e => e.id !== id)
    setTasks(del)
  }

  const deleteTasksCompleted = () => {
    let delTasks = tasks.filter(e => e.status !== true)
    setTasks(delTasks)
  }

  const toggleTask = (id) => {
    let toggle = tasks.map(e => e.id === id ? {...e, status : !e.status} : {...e})
    setTasks(toggle)
  }

  const editTodo = (id, title) => {
    setEdit(id)
    setValue(title)
  }

  const saveTodo = (id) => {
    let newTodo = [...tasks].map(item => {
      if (item.id === id) {
        item.title = value
      }
      return item
    })
    setTasks(newTodo)
    setEdit(null)
  }

  // const handleKeyPressSave = (e) => {
  //   if(e.key === 'Enter') {
  //     saveTodo(e)
  //   }
  // }

  switch (done) {
    case "All":
      copiTasks = tasks

      break;
      case "Active":
        copiTasks = tasks.filter(e => e.status === false)

      break;
      case "Completed":
        copiTasks = tasks.filter(e => e.status === true)
      break;

    default:
      break;
  }


  const taskTodoList = copiTasks.map(e => <TaskTodo 
                                       id={e.id} 
                                       title={e.title} 
                                       status={e.status}
                                       deleteTask={deleteTask}
                                       toggleTask={toggleTask}
                                       editTodo={editTodo}
                                       edit={edit}
                                       value={value}
                                       setValue={setValue}
                                       saveTodo={saveTodo}
                                      // handleKeyPressSave={handleKeyPressSave}
                                       />)

  return (
    <div className="App">
      <Header />
      <main className="main">
        <InputTodo 
          addTask={addTask}
          todo={todo}
          setTodo={setTodo}
          handleKeyPress={handleKeyPress}
          
        />
        {taskTodoList}
        <div className="buttons__container">
          <p>{tasks.filter(e => e.status === false).length} items left</p>

          <div className="buttons">
            <Button color={'inherit'} className="button" variant={done === "All" ? 'outlined' : 'text'} onClick={()=> setDone("All")}>All</Button>
            <Button color={'inherit'} className="button" variant={done === "Active" ? 'outlined' : 'text'} onClick={()=> setDone("Active")}>Active</Button>
            <Button color={'inherit'} className="button" variant={done === "Completed" ? 'outlined' : 'text'} onClick={()=> setDone("Completed")}>Completed</Button>
          </div>

          <Button color={'inherit'} onClick={()=> deleteTasksCompleted()} className="button">Clear completed</Button>
        </div>
        
      </main>
    </div>
  );
}

export default App;

