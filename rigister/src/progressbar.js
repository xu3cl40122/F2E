import React from 'react'
import {
    withRouter,
    Link
} from 'react-router-dom'

class Progressbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        const{location} = this.props
        if(location.pathname == '/'){
            return (
                <div className='progressbar'>

                    <h1>Create Account</h1>
                    <h2>Glad to see you here!</h2>
                </div>
            )
        }
        else if (location.pathname == '/upload'){
            return(
                <div className='progressbar'>

                    <h1>Update Profile Picture</h1>
                    <h2>We wanna know you more!</h2>
                    <img src="./pic/IMG_3543.JPG" alt=""/>
                </div>
            )
        }
            
           
        
    }
}
export default withRouter(Progressbar)