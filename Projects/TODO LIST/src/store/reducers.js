import { combineReducers } from 'redux';

import { todoFilterReducer, todoItemReducer } from './TodoList/reducers';

export default combineReducers({
    filter: todoFilterReducer,
    todos: todoItemReducer,
});