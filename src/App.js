import React, { Component } from 'react';
import './css/App.css';
import Header from './Components/Header.js'
import Todo from './Components/todoComp'
import data from './data/data'

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [...data]
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.addTask = this
            .addTask
            .bind(this);
    }
    //HANDLE COMPLETED TASK
    handleChange(id) {
        this.setState(prevState => {
            const updateTask = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })

            return { todos: updateTask }
        })
    }
    // Add TASK
    addTask(event) {
        event.preventDefault();
        //CHECK IF INPUT IS NULL
        const todos = [...this.state.todos];
        if (this.textInput.value === "") {
            alert('Input field is empty')
        } else {
            todos.unshift({
                id: Math.floor(Math.random() * 1000),
                text: this.textInput.value,
                completed: false
            })
            this.setState({
                todos: todos
            })
            this.textInput.value = "";
        }

    }
    //DELETE TASK
    deleteHandler = (index) => {
        const task = [...this.state.todos];
        task.splice(index, 1);
        this.setState({ todos: task })
    }
    componentDidMount() {
        console.log(this.state)
    }
    //RENDER  
    render() {
        const renderTask = this
            .state
            .todos
            .map((task, index) => {
                return (<Todo handleChange={this.handleChange} delete={() => this.deleteHandler(index)} task={task} key={task.id} />)
            })

        return (

            <div className="App">
                <Header />
                <form onSubmit={this.addTask} className="form">
                    <input
                        type="text"
                        className="addtsk"
                        ref={(input) => this.textInput = input} />
                    <button>submit</button>
                </form>
                {renderTask}
            </div>
        );
    }
}

export default App;
