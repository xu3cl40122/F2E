import React from 'react'
import axios from 'axios-jsonp-pro'
import {
    withRouter
} from 'react-router-dom'
/*
class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="navbar">
                <h2 className="navbar_logo">HaveFun</h2>
                <div className="navbar_search">
                    <i className="fa fa-search"></i>
                    <input type="text" className="navbar_search_input" placeholder="Explore your own activities" />
                </div>
            </div>
        )
    }
}*/
class NavHome extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.location)
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
                            <option value="">777</option>
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
                <Row pathname={this.props.location.pathname} />
            </div>
        )
    }
}

export const Home = withRouter(NavHome)

class Row extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            siteData: []
        }
    }
    componentDidMount() {
        // 用 arrow function this.setState 才會對
        axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=300')
            .then(response => {
                this.setState({
                    siteData: response.data.result.records
                })
            }).catch(err => {
                console.log(err)
            })
    }
    render() {
        const { siteData } = this.state
        const { pathname } = this.props
        if (pathname == '/') {
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
                        {siteData.map((site, index) => {
                            return <Col data={site} key={index} index={index} />
                        })}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="main">
                    <div className="main_row">
                        <Content />
                    </div>
                </div>
            )
        }
    }
}

class Col extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { data } = this.props
        return (
            <div className="main_col">
                <img src={data.Picture1} alt="" />
                <div className="main_col_inf">
                    <h2>{data.Name}</h2>
                    <div className="main_col_inf_text">{data.Description}</div>
                    <div className="main_col_inf_type">Entertainment</div>
                    <div className="main_col_inf_site">
                        <i className="fa fa-map-marker"></i><p>{data.Zone}</p>
                        <i className=" fa fa-calendar-o"></i><p>{data.Opentime}</p>
                    </div>
                </div>
            </div>
        )
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className='content_crumbs'>
                    <h2 className='content_crumbs_explore'>Explore</h2>
                    <p> / </p>
                    <p>kgroekgos</p>
                </div>
                <img src="https://i.imgur.com/prnyCW4.jpg" alt="" className='content_img' />
                <div className='content_container'>
                    <h1>123</h1>
                    <div className='content_inf'>
                        <i className="fa fa-map-marker"></i><p>三民區</p>
                        <i className=" fa fa-calendar-o"></i><p>全天開放</p>
                    </div>
                    <p>momgomagmamg'aml'a,v'a,v'plampoKF</p>

                </div>
            </div>
        )
    }
}