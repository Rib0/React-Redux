import { CHANGE_VISIBILITY_FILTER, TOGGLE_ITEM_CONDITION, ADD_TODO_ITEM, DELETE_ITEM } from './actions';


export const todoFilterReducer = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case CHANGE_VISIBILITY_FILTER:
            return action.payload;
        default:
            return state;
    }
}

export const todoItemReducer = (state = [], action) => {
    switch (action.type) {
        case TOGGLE_ITEM_CONDITION:
            return state.map(item => {
                return item.id === action.payload ? 
                {
                    ...item,
                    completed: !item.completed,
                } :
                item
            });
        case ADD_TODO_ITEM:
            return [
                ...state,
                {
                    text: action.payload.text,
                    completed: false,
                    id: state.length ? state[state.length - 1].id + 1 : 0,
                }
            ]
        case DELETE_ITEM:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}