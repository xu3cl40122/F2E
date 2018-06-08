import React from 'react'
import ReactDOM from 'react-dom'
import {Navbar} from './navbar'
import {AddTodo} from './addTodo'
import {ListTodo} from './listTodo'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            addHidden:true
        }
        this.id = 1
        this.addTodo = this.addTodo.bind(this)
        this.cancelAdd = this.cancelAdd.bind(this)
        this.changeValue = this.changeValue.bind(this)
    }
    addTodo(data){
        const {todos} = this.state
        // 加上 id
        let todo = {
            ...data,
            id:this.id++
        }
        this.setState({
            todos:[...this.state.todos,todo]
        })
    }
    cancelAdd(){
        this.setState({addHidden:true})
    }
    changeValue(id,value,kind){
        let copyList = this.state.todos.slice()//copy array
        let oldData = copyList.find((t)=>t.id ==id)
        let newData = { ...oldData, [kind]:value}
        let index = copyList.findIndex((t) => t.id == id)
        copyList.splice(index, 1, newData)
        // 重新按順位排列再set state
        copyList.sort((a, b) => {
            return a.type - b.type
        })
        this.setState({
            todos: copyList
        })
    }
    
    render(){
        console.log(this.state)
        return(
            <div>
                <Navbar />
                <div className="container">
                    {!this.state.addHidden? null: <div className='showAddtodo_button' onClick={()=>{this.setState({addHidden:false})}}>Add Task</div>}
                    {this.state.addHidden ? null : <AddTodo addTodo={this.addTodo} cancelAdd={this.cancelAdd}/>}
                    <ListTodo todos={this.state.todos} changeValue={this.changeValue}/>
                </div>
            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);