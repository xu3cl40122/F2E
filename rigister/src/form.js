import React from 'react'
import ReactDOM from 'react-dom';
import {
    withRouter,
    Link
} from 'react-router-dom'
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            account:{
                email:'',
                password:'',
                checkPassword:'',
            },
            fillAll:{
                account:false
            }
            
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    handleSubmit(e){
        const { account } = this.state
        e.preventDefault
        
    }
    componentDidUpdate(prevProps,prevState){
        const{account}= this.state
        if(account !=prevState.account){
            
            for (var key in account) {
                console.log(account[key])
                if (account[key] === '') {
                    console.log('nopass')
                    return
                }
            }
            this.setState({
                account:{...account,fillAll:true}
            })
        }
        
    }
    handleChange(e){
        this.setState({
            account:{...this.state.account,[e.target.name]:e.target.value}
        })
    }
   
    render() {
        const { location } = this.props
        const{account,fillAll}= this.state
        if (location.pathname == '/') {
            return (
                <form action="">
                    <div className='formContainer'>
                        <div className='form_col-big '>
                            <h2>Account</h2>
                            <input type="email" placeholder='example@email.com' name='email'value={account.email} onChange={this.handleChange} required />
                        </div>
                        <div className='form_col-big '>
                            <h2>Password</h2>
                            <input type="password" placeholder='' value={account.password} name='password' onChange={this.handleChange} required />
                        </div>
                        <div className='form_col-big '>
                            <h2>Confirm Password</h2>
                            <input type="password" value={account.checkPassword} name='checkPassword'onChange={this.handleChange} required />
                        </div>
                        {fillAll ? <Link to='/inf' class='link'><input type="submit" className='submit submit-pass' value='SUBMIT & NEXT' /></Link> : <input type="submit" className='submit' value='SUBMIT & NEXT' onClick={this.handleSubmit} />}
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
            srcList:[]
        }
        this.onDrageOver = this.onDrageOver.bind(this)
        this.onDrop = this.onDrop.bind(this)
        this.onDragEnter = this.onDragEnter.bind(this)
        this.deleteImg= this.deleteImg.bind(this)
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
        const file = e.nativeEvent.dataTransfer.files[0]
        if (this.state.srcList.length == 3) {
            alert('最多只能傳三張相片!')
            return
        }
        if(file.size > 10000000 ){
            alert('不能超過10MB')
            return 
        }
        if(file.type != 'image/jpeg' & file.type != 'image/png'){
            alert('只接受 jpg 或 png 檔')
            return
        }
        var reader = new FileReader()
        reader.readAsDataURL(e.nativeEvent.dataTransfer.files[0])
        // 非同步
        reader.onload = (data)=> {
            
            this.setState({
                srcList:[...this.state.srcList,data.target.result]
            })
        }
    }
    deleteImg(toRemove){
        const {srcList} = this.state
        let newList = srcList.filter((src,index)=>{
            return index != toRemove
        })
        this.setState({
            srcList : newList
        })
    }
    render() {
        const {srcList} = this.state
        console.log(srcList)
        return (
            // --- 需要加 onDragOver那串 才能觸發 onDrop 奇怪的 bug ----
            <div className='dragAreaContainer'>
                <div className='dragArea' onDragEnter={this.onDragEnter} onDragOver={this.onDrageOver} onDrop={this.onDrop} onChange={()=>{console.log('ch')}}>
                    <i className='	fa fa-image'></i>
                    <div className='dragArea_hint'><h2>DRAG TO UPLOAD UP TO 3 PHOTOS</h2><p>MAX SIZE: 10MB</p></div>
                    
                </div>
                <div className='preview'>
                    {srcList.map((src,index)=>{
                        return(
                            <div key={index}className='preview_col'><img src={src} alt="" /><div className='preview_col_delete'><i onClick={()=>this.deleteImg(index)} className='	fa fa-trash'></i></div></div>
                        )
                    })}
                    <div className='preview_col-null'></div>
                    <div className='preview_col-null'></div>
                </div>
            </div>
        )
    }
}

export default withRouter(Form)