import React from 'react'
import ReactDOM from 'react-dom'
import {
    Link,
    withRouter
} from 'react-router-dom'
class Nav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {match} = this.props
        return(
            <div>
                <div className="navbar">
                    <div className="navbar_row">
                        <Link to='/all' className='link'>
                            <div className={match.params.id == 'all' ? "navbar_col navbar_col-active" : "navbar_col"}>
                                <h2>Task</h2>
                            </div>
                        </Link>
                        <Link to='/progress' className='link'>
                            <div className={match.params.id == 'progress' ? "navbar_col navbar_col-active" : "navbar_col"}>
                                <h2>In Progress</h2>
                            </div>
                        </Link>
                        <Link to='/completed' className='link'>
                            <div className={match.params.id == 'completed' ? "navbar_col navbar_col-active" : "navbar_col"}>
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
export const Navbar = withRouter(Nav)