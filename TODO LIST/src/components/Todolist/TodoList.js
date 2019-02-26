import React, { Component } from 'react';
import TodoItem from 'components/TodoItem';

import style from './style.scss'

export default class TodoList extends Component {

    state = {
        SHOW_ALL: true,
        SHOW_COMPLETED: false,
        SHOW_INCOMPLETED: false,
    }

    onChange = e => {
        const { name } = e.target;
        const { changeFilter } = this.props
        this.setState({
            SHOW_ALL: false,
            SHOW_COMPLETED: false,
            SHOW_INCOMPLETED: false,
            [name]: !this.state[name],
        })
        changeFilter(name);
    }

    addItem = e => {
        const { addItem } = this.props;
        if (e.keyCode !== 13 || e.target.value === '') return;

        addItem(e.target.value);
        e.target.value = '';
    }
    
    render () {
        const { todos, toggleItem, deleteItem } = this.props;
        const { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } = this.state;

        console.log(todos)

        return (
            <div className={style.container}>
                <div className={style.filters}>
                    <div>
                        <label className={style.label}>
                            <input type="checkbox" name="SHOW_ALL" checked={SHOW_ALL} onChange={this.onChange}/>
                            Show All
                        </label>
                    </div>
                    <div>
                        <label className={style.label}>
                            <input type="checkbox" name="SHOW_COMPLETED" checked={SHOW_COMPLETED} onChange={this.onChange}/>
                            Show Completed
                        </label>
                    </div>
                    <div>
                        <label className={style.label}>
                            <input type="checkbox" name="SHOW_INCOMPLETED" checked={SHOW_INCOMPLETED} onChange={this.onChange}/>
                            Show Incompleted
                        </label>
                    </div>
                </div>
                <input className={style.enterField} type="text" placeholder="Enter the task" onKeyDown={this.addItem} />
                <ul className={style.list}>
                    {todos.map(todo => {
                        return (
                            <TodoItem  
                                text={todo.text} 
                                completed={todo.completed} 
                                id={todo.id} 
                                key={todo.id}
                                toggleItem={toggleItem}
                                deleteItem={deleteItem}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}