import React from 'react'
import axios from 'axios-jsonp-pro'
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
export class Navbar extends React.Component {
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
                <Row />
            </div>
        )
    }
}

class Row extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="main">
                <div className="main_state_container">
                    <div>
                        <p>Showing</p>
                        <h2>15</h2>
                        <p> results by…</p>
                    </div>
                    <div className="main_state_row">
                        <div className="main_state_col">Koahsiung<i className=" fa fa-close"></i></div>
                        <div className="main_state_col">Taipei</div>
                    </div>
                </div>
                <div className="main_row">
                    <div className="main_col">
                        <img src="https://i.imgur.com/prnyCW4.jpg" alt="" />
                        <div className="main_col_inf">
                            <h2>Kogi Cosby sweater.</h2>
                            <div className="main_col_inf_text">Donec euismod scelerisque liguet t, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue..</div>
                            <div className="main_col_inf_type">Entertainment</div>
                            <div className="main_col_inf_site">
                                <i className="fa fa-map-marker"></i><p>Kaohsiung City</p>
                                <i className=" fa fa-calendar-o"></i><p>2018/5/24 - 2018/5/31</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}