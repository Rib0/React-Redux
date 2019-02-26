import React, { Component } from 'react';


import TodoListContainer from './Todolist';


export default class App extends Component {
    render () {
        return (
            <TodoListContainer />
        )
    }
}

// заготовка для большого проекта
// здесь собираются все самые главные части приложения
// App
     // HeaderContainer
     // MainContainer
     // FooterContainer
// /App