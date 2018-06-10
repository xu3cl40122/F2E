import React from 'react'
import ReactDOM from 'react-dom'

export class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoData: {
                name: '',
                type: 2,
                isEditing:false,
                date: '',
                time: '',
                file: '',
                comment: '',
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            todoData: {
                ...this.state.todoData,
                [name]: value
            }
        })
    }
    handleAdd() {
        const { addTodo, cancelAdd} = this.props
        addTodo(this.state.todoData)
        cancelAdd()// hide addtodo form 
        
    }
    handleCancel() {
       const{cancelAdd} = this.props
       cancelAdd()
    }
    componentDidMount(){
        // 如果是要編輯 就繼承本來的值
        const {todo} = this.props 
        if(todo){
            this.setState({
                todoData: {
                    name: todo.name,
                    type: todo.type,
                    isEditing: todo.isEditing,
                    date: todo.date,
                    time: todo.time,
                    comment: todo.comment,
                    file:todo.file,
                    id:todo.id
                }
            })
        }
    }
    render() {
        const{todoData} = this.state
        console.log(this.props)
        console.log(todoData)
        return (
            <div>
                <div className="addTodo_container">
                    <div className="addTodo_title">
                        <div className="Todo_title_check"></div>
                        <input onChange={this.handleChange} value={todoData.name} type="text" name='name' className='todo_input' placeholder="+ Add Task" />
                        <div className="Todo_title_functionList">
                            <i className="fa fa-star-o Todo_title_functionList_star"></i>
                            <i className=" fa fa-pencil Todo_title_functionList_pen"></i>
                        </div>
                    </div>
                    <div className="addTodo_body">
                        <div className="addTodo_body_col">
                            <div className="addTodo_body_col_label">
                                <i className="fa fa-calendar"></i>Deadline</div>
                            <div className="addTodo_body_col_inputContainer">
                                <input type="date" name='date' value={todoData.date} className="addTodo_body_col_input" onChange={this.handleChange} />
                                <input type="time" name='time' value={todoData.time} className="addTodo_body_col_input" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="addTodo_body_col">
                            <div className="addTodo_body_col_label">
                                <i className=" fa fa-file-o"></i>File</div>
                            <div className="addTodo_body_col_inputContainer">
                                <label className="addTodo_body_col_uploadButton">
                                    <input type="file" className="displayNone" />
                                    <div className="">+</div>
                                </label>
                            </div>
                        </div>
                        <div className="addTodo_body_col">
                            <div className="addTodo_body_col_label">
                                <i className="fa fa-commenting-o"></i>Comment</div>
                            <div className="addTodo_body_col_inputContainer">
                                <textarea name="comment" value={todoData.comment} className="addTodo_body_col_textarea" onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <BottomButton 
                    isEditing={todoData.isEditing}
                    id={todoData.id} 
                    index ={this.props.index}
                    cancelAdd={this.handleCancel} 
                    handleAdd={this.handleAdd}
                    deleteTodo={this.props.deleteTodo}
                    saveEdit = {this.props.saveEdit}
                    todo = {this.state.todoData}
                    />
                </div>
            </div>
        )
    }
}

class BottomButton extends React.Component {
    constructor(props) {
        super(props)
        this.saveEdit = this.saveEdit.bind(this)
        this.cancelEdit = this.cancelEdit.bind(this)
    }
    saveEdit(){
        const { saveEdit,index,todo} = this.props
        todo.isEditing = false
        saveEdit(index,todo)
    }
    cancelEdit(){
        const { saveEdit, index, todo } = this.props
        saveEdit(index, todo,true)
    }
    render() {
        const{isEditing} = this.props
        if(isEditing) return(
            <div className="addTodo_bottomButtonRow">
                <div className="addTodo_bottomButtonRow_cancel" onClick={this.cancelEdit}>
                    <h2>Cancel</h2>
                </div>
                <div className="addTodo_bottomButtonRow_add" onClick={this.saveEdit}>
                    <h2>+ Save</h2>
                </div>
            </div>
        )
        return (
            <div className="addTodo_bottomButtonRow">
                <div className="addTodo_bottomButtonRow_cancel" onClick={this.props.cancelAdd}>
                    <h2>Cancel</h2>
                </div>
                <div className="addTodo_bottomButtonRow_add" onClick={this.props.handleAdd}>
                    <h2>+ Add Task</h2>
                </div>
            </div>
        )
    }
}
