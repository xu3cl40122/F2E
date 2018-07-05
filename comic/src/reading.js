import React from 'react'

export class Reading extends React.Component {
    render() {
        return (
            <div className='mainContainer'>
                <div className='reading'>
                    <div className='controllBar'>
                        <h2>My Hexschool</h2><i className='fa fa-caret-right'></i>
                        <select name="" id="">
                            <option value="">Chapter 1</option>
                            <option value="">Chapter 2</option>
                        </select>
                        <select name="" id="">
                            <option value="">Page 1</option>
                            <option value="">Page 2</option>
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
                        <div className='contentArea_arror'>
                            <i className='	fa fa-angle-left'></i>
                        </div>
                        <img src="../pic/storyboard-11.png" alt="" />
                        <div className='contentArea_arror'>
                            <i className='	fa fa-angle-right'></i>
                        </div>
                    </div>
                    <div className='pageSelector'>
                        <div className='page_dark_left'></div>
                        <div className='page_dark_right'></div>
                        <div className='page_row'>
                            <div className='page_col page_col-active'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt=""/>
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                            <div className='page_col'>
                                <p>1</p>
                                <img src="../pic/storyboard-11.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}