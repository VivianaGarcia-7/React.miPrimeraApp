import React, {Component} from 'react';
import './App.css';

import tasks from './example/tasks.json';

//Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
 

class App extends Component{

  state = {
    tasks: tasks
  }

  addTask = () => {
    console.log('adding a new task')
  }

  render () {   
    return (
      <div>
          <TaskForm addTask={this.addTask}/>
          <Tasks tasks={this.state.tasks }/>
      </div>
    )
  }
}

export default App;
