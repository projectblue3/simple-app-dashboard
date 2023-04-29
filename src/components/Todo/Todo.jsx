import React, { useState } from 'react';

const Todo = (props) => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');

    const postHandler = async (e) => {
        e.preventDefault();

        todos.push(inputText);
    };

    return (
        <div id="todo" className="widget">
            <h2 className="widget-name">Todo</h2>
            <div id="todo-list"></div>
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
                </form>
            </div>
        </div>
    );
};

export default Todo;
