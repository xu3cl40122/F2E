import React from 'react'
import {
    Link
} from 'react-router-dom'
export class Inf extends React.Component {
    render() {
        return (
            <div className='mainContainer'>
                <div className='inf'>
                    <div className='topContainer'>
                        <div className='showCover'>
                            <img src="./pic/cover.png" alt=""/>
                        </div>
                        <div className='inf'>
                            <div className='title'>MY HEXSCHOOL</div>
                            <div className='bref'>
                                <div className='bref_col'>
                                    <span className='category'>Genres</span><span>Fusce/vehicula/dolor</span>
                                </div>
                                <div className='bref_col'>
                                    <span className='category'>Author</span><span>Namae Shiranai</span>
                                </div>
                                <div className='bref_col'>
                                    <span className='category'>Status</span><span>Ongoing</span>
                                </div>
                                <div className='bref_col'>
                                    <span className='category'>Rate</span>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star-o'></i>
                                </div>
                                <div className='bref_col'>
                                    <span className='category'>Summary</span>
                                    <p>If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die.<br/><br/>Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals. </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='chapList'>
                        <div className='chap_title'>All Chapters</div>
                        <div className='chap_row'>
                            <Link to='/test/1' className='link'>
                                <div className='chap_col'>
                                    <span>Chapter 1:</span><span>The F2E Challenge Start!</span>
                                </div>
                            </Link>
                            <Link to='/test/2' className='link'>
                                <div className='chap_col'>
                                    <span>Chapter 2:</span><span>The F2E Challenge Start!</span><span className='newChap'>new</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}