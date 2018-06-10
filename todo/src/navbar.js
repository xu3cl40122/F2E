import React from 'react'
import ReactDOM from 'react-dom'
import {
    Link
} from 'react-router-dom'
export class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="navbar">
                    <div className="navbar_row">
                        <Link to='/all' className='link'>
                            <div className="navbar_col">
                                <h2>Task</h2>
                            </div>
                        </Link>
                        <Link to='/progress' className='link'>
                            <div className="navbar_col">
                                <h2>In Progress</h2>
                            </div>
                        </Link>
                        <Link to='/completed' className='link'>
                            <div className="navbar_col">
                                <h2>Completed</h2>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="navbarPlaceholder"></div>
            </div>
        )
    }
}