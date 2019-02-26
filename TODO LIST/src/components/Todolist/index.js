import TodoList from './TodoList';

import { connect } from 'react-redux';
import { changeFilter, addItem, toggleItem, deleteItem } from 'store/TodoList/actions' // имортить из главного файла actions в store

const getFilteredTodos = state => {
    switch (state.filter) {
        case 'SHOW_ALL': 
            return state.todos;
        case 'SHOW_COMPLETED':
            return state.todos.filter(todo => todo.completed === true);
        case 'SHOW_INCOMPLETED':
            return state.todos.filter(todo => todo.completed === false)
    }
}

const mapStateToProps = state => {
    return {
        todos: getFilteredTodos(state),
    }
}

const mapActionsToProps = {
    changeFilter,
    toggleItem,
    addItem,
    deleteItem
}
export default connect(mapStateToProps, mapActionsToProps)(TodoList);