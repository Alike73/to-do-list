
import { Component } from 'react';
import './App.css';
import { ToDoList } from './ToDoList';
import {Helmet} from "react-helmet";



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
        <ToDoList />
      </div>
    )
  }
}

export default App;
