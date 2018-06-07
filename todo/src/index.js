import React from 'react'
import ReactDOM from 'react-dom'
import {Navbar} from './navbar'
import {AddTodo} from './addTodo'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Navbar />
                <div className="container">
                    <AddTodo />
                </div>
            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);