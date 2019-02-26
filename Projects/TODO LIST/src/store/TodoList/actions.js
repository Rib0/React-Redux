export const CHANGE_VISIBILITY_FILTER = 'CHANGE_VISIBILITY_FILTER';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const TOGGLE_ITEM_CONDITION = 'TOGGLE_ITEM_CONDITION';
export const DELETE_ITEM = 'DELETE_ITEM';

export const changeFilter = filter => {
    return {
        type: CHANGE_VISIBILITY_FILTER,
        payload: filter,
    }
}

export const addItem = text => {
    return {
        type: ADD_TODO_ITEM,
        payload: {
            text
        }
    }
}

export const toggleItem = id => {
    return {
        type: TOGGLE_ITEM_CONDITION,
        payload: id,
    }
}

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id,
    }
}