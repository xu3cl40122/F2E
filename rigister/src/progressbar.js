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
                    <Bar pathname={this.props.location.pathname}/>
                    <h1>Create Account</h1>
                    <h2>Glad to see you here!</h2>
                </div>
            )
        }
        else if (location.pathname == '/inf') {
            return (
                <div className='progressbar'>
                    <Bar pathname={this.props.location.pathname} />
                    <h1>General Infomation</h1>
                    <h2>Tell us who you are!</h2>
                </div>
            )
        }
        else if (location.pathname == '/upload'){
            return(
                <div className='progressbar'>
                    <Bar pathname={this.props.location.pathname} />
                    <h1>Update Profile Picture</h1>
                    <h2>We wanna know you more!</h2>
                    <img src="./pic/IMG_3543.JPG" alt=""/>
                </div>
            )
        }
        else if(location.pathname == '/payment'){
            return(
                <div className='progressbar'>
                    <Bar pathname={this.props.location.pathname} />
                    <h1>Payment Method</h1>
                    <h2>Add your credit card infomation! </h2>
                </div>
            )
        }
       
            
           
        
    }
}
class Bar extends React.Component{
    render(){
        const{pathname}=this.props
        if (pathname == '/'){
            return (
                <div className='bar'>
                    <i className='fa fa-dot-circle-o done'></i>
                    <div className='line'></div>
                    <i className='fa fa-dot-circle-o'></i>
                    <div className='line'></div>
                    <i className='fa fa-dot-circle-o'></i>
                    <div className='line'></div>
                    <i className='fa fa-dot-circle-o'></i>
                </div>
            )
        }
        else if(pathname=='/inf'){
            return(
                <div className='bar'>
                    <i className='fa fa-check-circle done'></i>
                    <div className='line done'></div>
                    <i className='fa fa-dot-circle-o done'></i>
                    <div className='line'></div>
                    <i className='fa fa-dot-circle-o'></i>
                    <div className='line'></div>
                    <i className='fa fa-dot-circle-o'></i>
                </div>
            )
        }
        else if(pathname=='/upload'){
            return(
                <div className='bar'>
                    <i className='fa fa-check-circle done'></i>
                    <div className='line done'></div>
                    <i className='fa fa-check-circle done'></i>
                    <div className='line done'></div>
                    <i className='fa fa-dot-circle-o done'></i>
                    <div className='line'></div>
                    <i className='fa fa-dot-circle-o'></i>
                </div>
            )
            
        }
        else if(pathname=='/payment'){
            return(
                <div className='bar'>
                    <i className='fa fa-check-circle done'></i>
                    <div className='line done'></div>
                    <i className='fa fa-check-circle done'></i>
                    <div className='line done'></div>
                    <i className='fa fa-check-circle done'></i>
                    <div className='line done'></div>
                    <i className='fa fa-dot-circle-o done'></i>
                </div>
            )
        }
        
    }
}

export default withRouter(Progressbar)