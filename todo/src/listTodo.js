import React from 'react'
import ReactDOM from 'react-dom'

export class ListTodo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {normal} = this.props.todos
        return (
            <div className="todoList_row">
                {normal.map(todo =>{
                    return(
                        <TodoCol todo={todo} key={todo.id} id={todo.id}/>
                    )
                })}
                <div className="todoList_col todoList_col-imp">
                    <div className="todoList_titleContainer">
                        <div className="Todo_title_check"></div>
                        <h2 className="Todo_title_todoName">Type Something Here</h2>
                        <div className="Todo_title_functionList">
                            <i className="fa fa-star-o Todo_title_functionList_star"></i>
                            <i className=" fa fa-pencil Todo_title_functionList_pen"></i>
                        </div>
                    </div>
                    <div className="todoList_stateContainer">
                        <i className="fa fa-file-o"></i>
                        <i className="fa fa-commenting-o"></i>
                        <i className="fa fa-calendar"></i>
                    </div>
                </div>
                <div className="todoList_col-completed">
                    <div className="todoList_titleContainer">
                        <div className="Todo_title_check Todo_title_check-checked">
                            <i className="fa fa-check"></i>
                        </div>
                        <h2 className="Todo_title_todoName">Type Something Here</h2>
                        <div className="Todo_title_functionList">
                            <i className="fa fa-star-o Todo_title_functionList_star"></i>
                            <i className=" fa fa-pencil Todo_title_functionList_pen"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class TodoCol extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const{todo}=this.props
        return(
            <div className="todoList_col">
                <div className="todoList_titleContainer">
                    <div className="Todo_title_check"></div>
                    <h2 className="Todo_title_todoName">{todo.name}</h2>
                    <div className="Todo_title_functionList">
                        <i className="fa fa-star-o Todo_title_functionList_star"></i>
                        <i className=" fa fa-pencil Todo_title_functionList_pen"></i>
                    </div>
                </div>
                <div className="todoList_stateContainer">
                    {todo.file ===''?  null :<i className="fa fa-file-o"></i>}
                    {todo.comment === '' ? null : <i className="fa fa-commenting-o"></i>}
                    {todo.date === '' ? null : <i className="fa fa-calendar"></i>}
                    {todo.date === '' ? null : <p>{todo.date}</p>}
                </div>
            </div>
        )
    }
}