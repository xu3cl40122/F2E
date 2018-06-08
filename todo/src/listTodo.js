import React from 'react'
import ReactDOM from 'react-dom'

export class ListTodo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { todos, changeType} = this.props
        return (
            <div className="todoList_row">
                {todos.map(todo =>{
                    return(
                        <TodoCol todo={todo} key={todo.id} id={todo.id} changeType={changeType}/>
                    )
                })}
                
            </div>
        )
    }
}

class TodoCol extends React.Component{
    constructor(props){
        super(props)
        this.changeType = this.changeType.bind(this)
    }
    changeType(isCheck){
        // isCheck 代表由打勾觸發
        const{changeType,todo} = this.props 
        if (isCheck & todo.type != 3){
            changeType(todo.id,3)
        } else if ((isCheck & todo.type == 3) | (todo.type == 1)){
            changeType(todo.id, 2)
        }
        else if(todo.type == 2){
            changeType(todo.id, 1)
        }
    }
    render(){
        const{todo}=this.props
        if (todo.type != 3) return(
            <div className={todo.type == 1 ? 'todoList_col todoList_col-imp' :'todoList_col'}>
                <div className="todoList_titleContainer">
                    <div className="Todo_title_check" onClick={()=>{this.changeType(true)}}></div>
                    <h2 className="Todo_title_todoName">{todo.name}</h2>
                    <div className="Todo_title_functionList">
                        {todo.type == 2 ? <i className="fa fa-star-o Todo_title_functionList_star" onClick={this.changeType}></i> : <i className="fa fa-star Todo_title_functionList_star-imp" onClick={this.changeType}></i>}
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
        else{
            return(
                <div className="todoList_col-completed">
                    <div className="todoList_titleContainer">
                        <div className="Todo_title_check Todo_title_check-checked" onClick={() => { this.changeType(true) }}>
                            <i className="fa fa-check"></i>
                        </div>
                        <h2 className="Todo_title_todoName">{todo.name}</h2>
                        <div className="Todo_title_functionList">
                            <i className="fa fa-star-o Todo_title_functionList_star"></i>
                            <i className=" fa fa-pencil Todo_title_functionList_pen"></i>
                        </div>
                    </div>
                </div>
            )
        }
    }
}