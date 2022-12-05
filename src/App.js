
import { Component } from 'react';
import './App.css';
import { ToDoList } from './ToDoList';
import {Helmet} from "react-helmet";
import Time from './TestTime';




class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>To do List</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="ToDoList" />
        </Helmet>
        
        <Time />
        <ToDoList />
      </div>
    )
  }
}

export default App;
