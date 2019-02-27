import React, {Component} from 'react';
import classNames from 'classNames/bind';
import style from './style.scss'

const cx = classNames.bind(style);

export default class TodoItem extends Component {

    toggleItem = () => {
        const { id, toggleItem } = this.props;
        toggleItem(id);
    }

    deleteItem = () => {
        const { id, deleteItem } = this.props;
        deleteItem(id);
    }

    render () {
        const { text, completed } = this.props;

        const textStyle = cx({
            todoText: true,
            completed,
        })

        return (
            <li className={style.todoItem}>
                <span className={textStyle}>{text}</span>
                <div className={style.actions}>
                    <button type="button" onClick={this.deleteItem}>
                        x
                    </button>
                    <input type="checkbox" onChange={this.toggleItem} checked={completed} />
                </div>
            </li>
        )
    }
}