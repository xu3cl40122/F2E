import React from 'react'
import ReactDOM from 'react-dom'

export class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="navbar">
                    <div className="navbar_row">
                        <div className="navbar_col">
                            <h2>Task</h2>
                        </div>
                        <div className="navbar_col">
                            <h2>In Progress</h2>
                        </div>
                        <div className="navbar_col">
                            <h2>Completed</h2>
                        </div>
                    </div>
                </div>
                <div className="navbarPlaceholder"></div>
            </div>
        )
    }
}