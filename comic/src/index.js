import React from 'react'
import ReactDOM from 'react-dom'
import {Navbar} from './navbar'
import {Inf} from './inf'
import {Reading} from './reading'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'
class Start extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <Inf />
            </div>
            
        )
    }
}

class Read extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <Reading />
            </div>
        )
    }
}
class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path='/' component={Start} />
                    <Route path='/:name/:chap' component={Read} />
                </div>
            </Router>    
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);