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
        else if (location.pathname == '/payment') {
            const monthList = []
            const dayList = []
            for(let i = 1; i < 13; i++){
                monthList.push(i)
            }
            for (let j = 1; j < 32; j++) {
                dayList.push(j)
            }
            return (
                <form action="">
                    <div className='formContainer'>
                        <div className='form_col-big '>
                            <h2>Card Number</h2>
                            <input type="text" placeholder='1234 5678 9012 3456' required />
                        </div>
                        <div className='form_col-middle '>
                            <h2>Cardholder Name</h2>
                            <input type="text" placeholder='EXAMPLE NAME' required />
                        </div>
                        <div className='form_col-middle '>
                            <h2>Bank Name</h2>
                            <input type="text" placeholder='EXAMPLE BANK' required />
                        </div>
                        <div className='form_col-small '>
                            <h2>CVV</h2>
                            <input type="text" placeholder='123' required />
                        </div>
                        <div className='form_col-small '>
                            <h2>Expire Date</h2>
                            <select name="" id="" defaultValue='MM'>
                                {monthList.map((month)=>{
                                    return(
                                        <option key={month} value={month}>{month}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='form_col-small '>
                            <h2 className='hidden'>77</h2>
                            <select name="" id="">
                                {dayList.map((day) => {
                                    return (
                                        <option key={day} value={day}>{day}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <input type="submit" className='submit' value='SUBMIT & NEXT' />
                    </div>
                </form>
            )
        }
        else if (location.pathname == '/inf') {
            return (
                <form action="">
                    <div className='formContainer'>
                        <div className='form_col-middle '>
                            <h2>Name</h2>
                            <input type="text" placeholder='Example Name' required />
                        </div>
                        <div className='form_col-middle '>
                            <h2>Phone</h2>
                            <input type="tel" placeholder='0912345678' required />
                        </div>
                        <div className='form_col-middle '>
                            <h2>Birth Date </h2>
                            <input type="date" required />
                        </div>
                        <div className='form_col-middle '>
                        </div>
                        <div className='form_col-big '>
                            <h2>Address </h2>
                            <input type="text" placeholder='Example Address' required />
                        </div>
                        <input type="submit" className='submit' value='SUBMIT & NEXT' />
                    </div>
                </form>
            )
        }

    }
}


class Drag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            src:''
        }
        this.onDrageOver = this.onDrageOver.bind(this)
        this.onDrop = this.onDrop.bind(this)
        this.onDragEnter = this.onDragEnter.bind(this)
        
    }
    /*componentDidMount(){
        var self = ReactDOM.findDOMNode(this)
        self.addEventListener('dragover',this.onDrageOver)
        self.addEventListener('drop',this.onDrop)
    }*/
    
    onDrageOver(e){
        e.preventDefault()
        e.stopPropagation()

        e.dataTransfer.dropEffect = 'copy'
    }
    onDragEnter(e){
        e.stopPropagation()
        e.preventDefault()
    }
    onDrop(e){
        e.preventDefault()
        e.stopPropagation()
        e.dataTransfer.dropEffect = 'copy'
        console.log('drop')
        console.log(e.nativeEvent.dataTransfer.files)
        var reader = new FileReader()
        reader.readAsDataURL(e.nativeEvent.dataTransfer.files[0])
        reader.onload = (data)=> {
            this.setState({
                src:data.target.result
            })
        }
    }
    
    render() {
        return (
            // --- 需要加 onDragOver那串 才能觸發 onDrop 奇怪的 bug ----
            <div className='dragArea' onDragEnter={this.onDragEnter} onDragOver={this.onDrageOver} onDrop={this.onDrop} onChange={()=>{console.log('ch')}}>
                <i className='	fa fa-image'></i>
                <div className='dragArea_hint'><h2>UPLOAD UP TO 3 PHOTOS</h2><p>MAX SIZE: 150*150px</p></div>
                <img src={this.state.src}/>
            </div>
        )
    }
}

export default withRouter(Form)