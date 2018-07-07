import React from 'react'
import comicData from './data'
export class Reading extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comicData : comicData,
            indexNow:0
        }
        this.setIndex = this.setIndex.bind(this)
        this.selectChange = this.selectChange.bind(this)
    }
    setIndex(indexToSet){
        const{indexNow} = this.state

        if(indexToSet == 'next'){
            if (indexNow >= comicData.length-1) return
            this.setState({
                indexNow: indexNow +1
            })
        }
        else if(indexToSet == 'prev'){
            if (indexNow <= 0 ) return
            this.setState({
                indexNow: indexNow -1
            })
        }
        else{
            this.setState({
                indexNow: indexToSet
            })
        }
        
    }
    selectChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const{comicData, indexNow} = this.state
        return (
            <div className='mainContainer'>
                <div className='reading'>
                    <div className='controllBar'>
                        <h2>My Hexschool</h2><i className='fa fa-caret-right'></i>
                        <select name="" id="">
                            <option value="">Chapter 1</option>
                            <option value="">Chapter 2</option>
                        </select>
                        <select name="indexNow" id="" onChange={this.selectChange} value={indexNow}>
                            {comicData.map((page,index)=>{
                                
                                return(
                                    <option value={index} key={index}>{'Page '+ (index+1)}</option>
                                )
                            })}
                        </select>
                        <div className='controllBar_switch'>
                            <i className='fa fa-sun-o'></i>
                            <div className='controllBar_switch_box'>
                                <div className='controllBar_switch_bar'></div>
                            </div>
                            <i className='	fa fa-moon-o'></i>
                        </div>
                    </div>
                    <div className='contentArea'>
                        <div className='contentArea_arror' onClick={()=>this.setIndex('prev')}>
                            <i className='	fa fa-angle-left'></i>
                        </div>
                        <img src={'../pic/' + comicData[indexNow]} alt="" />
                        <div className='contentArea_arror' onClick={() => this.setIndex('next')}>
                            <i className='	fa fa-angle-right'></i>
                        </div>
                    </div>
                    <div className='pageSelector'>
                        <div className='page_dark_left'></div>
                        <div className='page_dark_right'></div>
                        <div className='page_row'>
                            {comicData.map((page,index)=>{
                                return(
                                    <PageCol 
                                    page = {page}
                                    index = {index}
                                    indexNow = {indexNow}
                                    setIndex={this.setIndex} 
                                    key={index}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class PageCol extends React.Component{
    constructor(props){
        super(props)
        this.setIndex = this.setIndex.bind(this)
    }
    setIndex(){
        this.props.setIndex(this.props.index)
    }
    render(){
        const{index,indexNow,page} = this.props
        return(
            <div className={index == indexNow ? 'page_col page_col-active' : 'page_col'} onClick={this.setIndex}>
                <p>{index + 1}</p>
                <img src={'../pic/' + page} alt="" />
            </div>
        )
    }
}