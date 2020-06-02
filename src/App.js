import React, { Component } from 'react';
import './App.css';
import Task from './components/Task';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      newItem: "",
      todoItems: [
        {title:'Mua bim bim', isComplete: true},
        {title:'Đi đá bóng', isComplete: true},
        {title:'Đi đổ xăng', isComplete: false}
      ]
    }

  }  

  onClick(item) {
    return (event) => {
      console.log(item);
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        {
          todoItems.length > 0 && todoItems.map((item, index) => 
            <Task 
              key={index}
              item={item} 
              onClick={this.onClick(item)}/> )
        }
        {
          todoItems.length === 0 && 'Nothing here'
        }
      </div>
    );
  }
}

export default App;
