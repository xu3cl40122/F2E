import React from 'react' 
import {
    Link
} from 'react-router-dom'
export class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <Link to='/' className='link'>
                    <h2>Comicomic</h2>
                </Link >
            </div>
        )
    }
}