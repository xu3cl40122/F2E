import React from 'react'
import ReactDOM from 'react-dom';
import {
    withRouter,
    Link
} from 'react-router-dom'
class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { location } = this.props
        if (location.pathname == '/') {
            return (
                <form action="">
                    <div className='formContainer'>
                        <div className='form_col-big '>
                            <h2>Account</h2>
                            <input type="email" placeholder='example@email.com' required />
                        </div>
                        <div className='form_col-big '>
                            <h2>Password</h2>
                            <input type="password" placeholder='' required />
                        </div>
                        <div className='form_col-big '>
                            <h2>Confirm Password</h2>
                            <input type="password" required />
                        </div>
                        <input type="submit" className='submit' value='SUBMIT & NEXT' />
                    </div>
                </form>

            )
        }
        else if (location.pathname == '/upload') {
            return (
                <form>
                    <div className='formContainer'>
                        <Drag />
                    </div>

                </form>

            )
        }

    }
}


class Drag extends React.Component {
    constructor(props) {
        super(props)
        this.onDrageOver = this.onDrageOver.bind(this)
        this.onDrop = this.onDrop.bind(this)
        this.onDragEnter = this.onDragEnter.bind(this)
    }
    
    onDrageOver(e){
        e.stopPropagation()
        e.preventDefault()
        e.dataTransfer.dropEffect = 'copy'
    }
    onDragEnter(e){
        console.log(555)
        e.stopPropagation()
        e.preventDefault()
    }
    onDrop(e){
        e.stopPropagation()
        e.preventDefault()
        e.dataTransfer.dropEffect = 'copy'
        console.log('drop')
        console.log(e.nativeEvent)
    }
    render() {
        return (
            // --- 需要加 onDragOver那串 才能觸發 onDrop 奇怪的 bug ----
            <div className='dragArea' onDragEnter={this.onDragEnter} onDragOver={this.onDrageOver} onDrop={this.onDrop} >
                <i className='	fa fa-image'></i>
                <div className='dragArea_hint'><h2>UPLOAD UP TO 3 PHOTOS</h2><p>MAX SIZE: 150*150px</p></div>
            </div>
        )
    }
}

export default withRouter(Form)