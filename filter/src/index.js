import React from 'react'
import ReactDOM from 'react-dom'
import { Home} from './navbar' 
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'




class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path='/:id' component={Home} />
                </div>
            </Router>
        )
    }
}





ReactDOM.render(
    <App />,
    document.getElementById('root')
);