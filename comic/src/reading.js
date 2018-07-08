import React from 'react'
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload'
import comicData from './data'
import comic_data from './data';
export class Reading extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comicData : comicData,
            indexNow:0

        }
        this.setIndex = this.setIndex.bind(this)
        this.selectChange = this.selectChange.bind(this)
        this.showChangeChap = this.showChangeChap.bind(this)
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
    showChangeChap(prev,next){
        this.setState({
            showPrev:prev,
            showNext:next
        })
    }
    render() {
        const{comicData, indexNow,showNext,showPrev} = this.state
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
                        {(indexNow == 0) | (showPrev) ? <div className='page_dark_prevChap' data-text='prev'><i className='fa fa-angle-double-left'></i><div className='test'></div></div> : <div className='page_dark_left'></div>}
                        {indexNow == (comicData.length - 1) | showNext ? <div className='page_dark_nextChap' data-text='next'><i className='fa fa-angle-double-right'></i></div> : <div className='page_dark_right'></div>}
                        <PageRow 
                        setIndex = {this.setIndex}
                        comicData = {comicData}
                        indexNow = {indexNow}
                        showChangeChap = {this.showChangeChap}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
class PageRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollLeft: 0
        }
        this.setScrollPosition = this.setScrollPosition.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }
    setScrollPosition(left) {
        this.setState({
            scrollLeft: left
        })
    }
    componentDidMount() {
        // get dom size and position
        var rect = ReactDOM.findDOMNode(this)
            .getBoundingClientRect()
        this.setState({
            rowLeft: rect.left,
            rowWidth: rect.width
        })
        // 綁定偵測捲動事件
        var scrollBody = ReactDOM.findDOMNode(this)
        scrollBody.addEventListener('scroll', this.handleScroll)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.scrollLeft != this.state.scrollLeft) {
            ReactDOM.findDOMNode(this).scrollLeft += this.state.scrollLeft
        }
    }
    handleScroll() {
        const{showChangeChap} = this.props
        var scrollBody = ReactDOM.findDOMNode(this)
        //console.log(scrollBody.scrollWidth - scrollBody.clientWidth, scrollBody.scrollLeft)
        //                總寬                       卷軸本身寬                  卷軸最左邊位置
        if ((scrollBody.scrollWidth - scrollBody.clientWidth) == scrollBody.scrollLeft){
            var scrolltoRightEnd = true
        }
        if (scrollBody.scrollLeft == 0 & scrolltoRightEnd) {
            showChangeChap(true,true)
        }
        else if (scrollBody.scrollLeft == 0 ) {
            showChangeChap(true,false)
        }
        else if (scrolltoRightEnd){
            showChangeChap(false,true)
        }
        else{
            showChangeChap(false,false)
        }

    }
    render() {
        const { comicData, indexNow, setIndex } = this.props
        return (
            <div className='page_row'>
                {comicData.map((page, index) => {
                    return (
                        <PageCol
                            page={page}
                            index={index}
                            indexNow={indexNow}
                            setIndex={setIndex}
                            key={index}
                            rowLeft={this.state.rowLeft}
                            rowWidth={this.state.rowWidth}
                            setScrollPosition={this.setScrollPosition}
                        />
                    )
                })}
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
    componentDidUpdate(prevProps){
        const{index,indexNow,setScrollPosition,rowLeft,rowWidth} = this.props
        if (index == indexNow & prevProps.indexNow != indexNow){
            var rect = ReactDOM.findDOMNode(this)
                .getBoundingClientRect()
            setScrollPosition(rect.left - rowLeft - (rowWidth/2) + (rect.width/2)) // -242.5 捲到開頭 
        }
    }
    render(){
        const{index,indexNow,page} = this.props
        return(
            <LazyLoad height='163px'>
            <div className={index == indexNow ? 'page_col page_col-active' : 'page_col'} onClick={this.setIndex}>
                <p>{index + 1}</p>
                <img src={'../pic/' + page} alt="" />
            </div>
            </LazyLoad>
        )
    }
}

