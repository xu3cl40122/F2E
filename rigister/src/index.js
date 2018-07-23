import React from 'react'
import ReactDOM from 'react-dom'
import Progressbar from './progressbar'
import Form from './form'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'
class Main extends React.Component {
    render() {
        return (
            <div className='mainContainer'>
                <Progressbar />
                <Form />
            </div>
        )
    }
}
class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/upload' component={Main} /> 
                    <Route exact path='/payment' component={Main} />
                    <Route exact path='/inf' component={Main} />     
                </div>
                
            </Router>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);