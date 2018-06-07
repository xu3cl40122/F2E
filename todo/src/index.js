import React from 'react'
import ReactDOM from 'react-dom'
import {Navbar} from './navbar'
import {AddTodo} from './addTodo'
import {ListTodo} from './listTodo'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imp:[],
            normal:[],
            complete:[],
            addHidden:true
        }
        this.id = 1
        this.addTodo = this.addTodo.bind(this)
        this.cancelAdd = this.cancelAdd.bind(this)
    }
    addTodo(data){
        const {normal} = this.state
        let todo = {
            ...data,
            id:this.id++
        }
        
        this.setState({
            normal:[...this.state.normal,todo]
        })
    }
    cancelAdd(){
        this.setState({addHidden:true})
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <Navbar />
                <div className="container">
                    {!this.state.addHidden? null: <div className='showAddtodo_button' onClick={()=>{this.setState({addHidden:false})}}>Add Task</div>}
                    {this.state.addHidden ? null : <AddTodo addTodo={this.addTodo} cancelAdd={this.cancelAdd}/>}
                    <ListTodo todos = {this.state} />
                </div>
            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);