import React from 'react'
import axios from 'axios-jsonp-pro'
import ReactPaginate from 'react-paginate';
import {
    withRouter,
    Link
} from 'react-router-dom'
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;
class NavHome extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="navbar">
                    <h2 className="navbar_logo">HaveFun</h2>
                    <div className="navbar_search">
                        <i className="fa fa-search"></i>
                        <input type="text" className="navbar_search_input" placeholder="Explore your own activities" />
                    </div>
                </div>
                <div className="sidebar">
                    <div className="sidebar_col">
                        <h2>Location</h2>
                        <select name="" id="">
                            <option value="">-- 行政區 --</option>
                            <option value="楠梓區">楠梓區</option>
                            <option value="左營區">左營區</option>
                            <option value="鼓山區">鼓山區</option>
                            <option value="三民區">三民區</option>
                            <option value="鹽埕區">鹽埕區</option>
                            <option value="前金區">前金區</option>
                            <option value="新興區">新興區</option>
                            <option value="苓雅區">苓雅區</option>
                            <option value="前鎮區">前鎮區</option>
                            <option value="旗津區">旗津區</option>
                            <option value="小港區">小港區</option>
                            <option value="鳳山區">鳳山區</option>
                            <option value="大寮區">大寮區</option>
                            <option value="鳥松區">鳥松區</option>
                            <option value="林園區">林園區</option>
                            <option value="仁武區">仁武區</option>
                            <option value="大樹區">大樹區</option>
                            <option value="大社區">大社區</option>
                            <option value="岡山區">岡山區</option>
                            <option value="路竹區">路竹區</option>
                            <option value="橋頭區">橋頭區</option>
                            <option value="梓官區">梓官區</option>
                            <option value="彌陀區">彌陀區</option>
                            <option value="永安區">永安區</option>
                            <option value="燕巢區">燕巢區</option>
                            <option value="田寮區">田寮區</option>
                            <option value="阿蓮區">阿蓮區</option>
                            <option value="湖內區">湖內區</option>
                            <option value="旗山區">旗山區</option>
                            <option value="美濃區">美濃區</option>
                            <option value="內門區">內門區</option>
                            <option value="杉林區">杉林區</option>
                            <option value="甲仙區">甲仙區</option>
                            <option value="六龜區">六龜區</option>
                            <option value="茂林區">茂林區</option>
                            <option value="桃源區">桃源區</option>
                            <option value="那瑪夏區">那瑪夏區</option>
                        </select>
                    </div>
                    <div className="sidebar_col">
                        <h2>Date</h2>
                        <div className="sidebar_col_label">from</div><input type="date" className="sidebar_col_inputDate" /><br />
                        <div className="sidebar_col_label">to</div><input type="date" className="sidebar_col_inputDate" />
                    </div>
                    <div className="sidebar_col">
                        <h2>Categories</h2>
                        <input type="checkbox" />all<br />
                        <input type="checkbox" />Entertainment<br />
                    </div>
                </div>
                <Row/>
            </div>
        )
    }
}

export const Home = withRouter(NavHome)

class Row77 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            siteData: [],
            shouldCall: true,
            currentPage: 1,
            colPerPage: 10
        }
        this.handlePage = this.handlePage.bind(this)
    }
    handlePage(data){
        this.setState({
            currentPage:(data.selected +1)
        })
        scroll.scrollToTop()
    }
    componentDidMount() {
        // 用 arrow function this.setState 才會對
        if (this.state.shouldCall) {
            axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=300')
                .then(response => {
                    this.setState({
                        siteData: response.data.result.records,
                        shouldCall: false
                    })
                }).catch(err => {
                    console.log(err)
                })
        }
    }
    componentDidUpdate(prevProps){
        // 換頁時確保會捲回頂部
        if(prevProps.location.pathname !== this.props.location.pathname){
            scroll.scrollToTop({duration:0})
        }
    }
    render() {
        const { siteData, currentPage, colPerPage } = this.state
        // 分頁邏輯
        const indexOfLast = currentPage * colPerPage
        const indexOfFirst = indexOfLast - colPerPage
        const currentList = siteData.slice(indexOfFirst, indexOfLast)
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(siteData.length / colPerPage); i++) {
            pageNumbers.push(i);
        }
        if (this.props.match.params.id == 'main') {
            return (
                <div className="main">
                    <div className="main_state_container">
                        <div>
                            <p>Showing </p>
                            <h2>{siteData.length}</h2>
                            <p> results by…</p>
                        </div>
                        <div className="main_state_row">
                            <div className="main_state_col">Koahsiung<i className=" fa fa-close"></i></div>
                            <div className="main_state_col">Taipei</div>
                        </div>
                    </div>
                    <div className="main_row">
                        {currentList.map((site, index) => {
                            return <Col data={site} key={index} index={index} />
                        })}
                    </div>
                    <ReactPaginate 
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        breakClassName={"subPage"}
                        pageCount={pageNumbers.length}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={5}
                        containerClassName={"pagination"}
                        previousClassName='previous'
                        nextClassName='next'
                        pageLinkClassName={'subPage'}
                        activeClassName={"active"}
                        onPageChange={this.handlePage} />
                    
                </div>
            )
        }
        else {
            let index = parseInt(this.props.match.params.id) 
            return (
                <div className="main">
                    <div className="main_row">
                        <Content data={this.state.siteData[index]} history={this.props.history}/>
                    </div>
                </div>
            )
        }
    }
}
const Row = withRouter(Row77)

class Col extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { data, index } = this.props
        return (
            <Link to={'/' + index} className='link'>
                <div className="main_col">
                    <img src={data.Picture1} alt="" />
                    <div className="main_col_inf">
                        <h2>{data.Name}</h2>
                        <div className="main_col_inf_text">{data.Description}</div>
                        <div className="main_col_inf_type">Entertainment</div>
                        <div className="main_col_inf_site">
                            <i className="fa fa-map-marker"></i><p>{data.Add}</p>
                            <i className=" fa fa-calendar-o"></i><p>{data.Opentime}</p>
                        </div>
                    </div>
                </div>
            </ Link>
        )
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        const{history}=this.props
        history.goBack()
    }
    render() {
        const{data} = this.props
        return (
            <div>
                <div className='content_crumbs'>
                    <h2 className='content_crumbs_explore'>Explore</h2>
                    <p> / </p>
                    <p>{data.Name}</p>
                </div>
                <img src={data.Picture1} alt="" className='content_img' />
                <div className='content_container'>
                    <h1>{data.Name}</h1>
                    <div className='content_inf'>
                        <i className="fa fa-map-marker"></i><p>{data.Add}</p>
                        <i className=" fa fa-calendar-o"></i><p>{data.Opentime}</p>
                    </div>
                    <p className='content_inf_text'>{data.Toldescribe}</p>
                    <div className='content_goBack' onClick={this.handleClick}>GO BACK</div>
                </div>
            </div>
        )
    }
}
// 設置預設 props 以免 api 還沒 response 導致 error
Content.defaultProps = {data:{
    Name:'',
    Picture1:'',
    Zone:'',
    Opentime:'',
    Toldescribe:''
}}