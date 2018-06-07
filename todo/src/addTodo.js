import React from 'react'
import ReactDOM from 'react-dom'

export class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            todoData:{
                name:'',
                date:'',
                time:'',
                file:'',
                comment:''
            }
        }
        this.handleChange = this.handleChange.bind(this)        
    }
    handleChange(e){
        const{name, value}= e.target
        this.setState({
            todoData:{
                ...this.state.todoData,
                [name]:value
            }
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <div className="addTodo_container">
                    <div className="addTodo_title">
                        <div className="Todo_title_check"></div>
                        <input onChange={this.handleChange} type="text" name='name' className='todo_input' placeholder="+ Add Task"/>
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
                                <input type="date" name='date' className="addTodo_body_col_input" onChange={this.handleChange}/>
                                <input type="time" name='time' className="addTodo_body_col_input" onChange={this.handleChange}/>
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
                                <textarea name="comment" className="addTodo_body_col_textarea" onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="addTodo_bottomButtonRow">
                        <div className="addTodo_bottomButtonRow_cancel">
                            <h2>Cancel</h2>
                        </div>
                        <div className="addTodo_bottomButtonRow_add">
                            <h2>+ Add Task</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}