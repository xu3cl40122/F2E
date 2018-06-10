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
        this.deleteTodo  = this.deleteTodo.bind(this)
        this.saveEdit = this.saveEdit.bind(this)
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
    saveEdit(index,data,isCancel=false){
        if(isCancel){
            let nl = this.state.todos.slice()
            console.log('nl',nl[index])
            nl[index]['isEditing']=false
            this.setState({
                todos: nl
            })
            return
        }
        let nl = this.state.todos.slice()
        nl[index] = data
        this.setState({
            todos:nl
        })
    }
    deleteTodo(id){
        console.log(id)
        /*this.setState({
            todos: this.state.todos.filter(todo => todo.id != id)
        })*/
        let l = this.state.todos.slice()
        console.log(l)
        let lf = l.filter(todo => todo.id != id)
        console.log(lf)
    }
    render(){
        console.log('state',this.state.todos)
        return(
            <div>
                <Navbar />
                <div className="container">
                    {!this.state.addHidden? null: <div className='showAddtodo_button' onClick={()=>{this.setState({addHidden:false})}}>Add Task</div>}
                    {this.state.addHidden ? null : <AddTodo addTodo={this.addTodo} cancelAdd={this.cancelAdd}/>}
                    <ListTodo 
                    todos={this.state.todos} 
                    changeValue={this.changeValue} 
                    addTodo={this.addTodo}
                    deleteTodo={this.deleteTodo}
                    cancelAdd={this.cancelAdd}
                    saveEdit = {this.saveEdit}
                    />
                </div>
            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);