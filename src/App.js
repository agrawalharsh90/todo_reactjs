import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        toods: [
            {
                'id': 1,
                'title': 'Finish React Screencast',
                'completed': false,
                'editing': false,
            },
            {
                'id': 2,
                'title': 'Take over the world',
                'completed': false,
                'editing': false,
            },]
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <div className="Todo-container">
                    <input type="text" className="todo-input" placeholder="what needs to be done"
                           onKeyUp={this.addTodo}/>
                    {this.state.toods.map((todo, index) => TodoItem(todo))}
                    <div className="extra-container">
                        <div><label><input type="checkbox"/>Check ALL</label></div>
                        <div>2 items left</div>
                    </div>
                    <div className="extra-container">
                        <div>
                            <button>All</button>
                            <button>Active</button>
                            <button>Completed</button>
                        </div>
                        <div>
                            <button>Clear Completed</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    addTodo(event) {
        console.log('On sjnknm')
    }
}

function TodoItem(props) {
    return <div key={props.id} className="todo-item">
        <div className="todo-item-left">
            <input type="checkbox"/>
            <div className="todo-item-label">{props.title}</div>
        </div>
        <div className="remove-item">
            &times;
        </div>
    </div>;
}

export default App;
