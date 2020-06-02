import React, {Component} from 'react';
import './Task.css'
import classNames from 'classnames';

export default class TodoApp extends Component {
  constructor(){
    super();

    this.onClick = this.onClick.bind(this);
  }  

  onClick() {
    
  }

  render() {
    const { item, onClick } = this.props;
    return <div>
      <button onClick={onClick} 
      className={classNames({
            'complete': item.isComplete === true
        })}>{item.title}</button>
    </div>;
  }
}

