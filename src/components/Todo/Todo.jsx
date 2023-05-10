import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './todo.css';

const Todo = (props) => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    const [todoToDelete, setTodoToDelete] = useState();

    const postHandler = (e) => {
        e.preventDefault();

        setTodos([...todos, { id: uuidv4(), text: inputText, completion: false }]);

        setInputText('');
    };

    const completionHandler = (todoId) => {
        const todoIndex = todos.map((todo) => todo.id).indexOf(todoId);

        if (todos[todoIndex].completion === false) {
            todos[todoIndex].completion = true;
        } else {
            todos[todoIndex].completion = false;
        }

        console.log(todos[todoIndex]);
    };

    const deleteHandler = (todoId) => {
        let tempArr = [...todos];

        tempArr = tempArr.filter((todo) => todo.id !== todoId);

        setTodos([...tempArr]);
    };

    return (
        <div id="todo" className="widget">
            <h2 className="widget-name">Todo</h2>
            <ul id="todo-list">
                {todos.map((todo) => {
                    return (
                        <li className="todo-list-item" key={todo.id}>
                            <p>{todo.text}</p>
                            <input
                                type="checkbox"
                                className="todo-completion"
                                name="todo-completion"
                                value={todo.completion}
                                onClick={() => completionHandler(todo.id)}
                            ></input>
                            <button onClick={() => deleteHandler(todo.id)}>X</button>
                        </li>
                    );
                })}
            </ul>
            <div id="todo-input">
                <form onSubmit={postHandler} className="input-form">
                    <input
                        type="text"
                        required
                        id="todo-text"
                        className="form-text-box"
                        placeholder="I need to..."
                        onChange={(e) => setInputText(e.target.value)}
                        value={inputText}
                    />

                    <button type="submit" className="submit-btn" tabIndex={6}>
                        O
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Todo;
