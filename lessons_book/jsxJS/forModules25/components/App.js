import React from 'react'
import { browserHistory } from 'react-router'
import { Link } from 'react-router-dom'

class App extends React.Component {

    render (){

        return (
            <div>
                <header>
                    Links:
                    {' '}
                    <Link to="/">Home</Link>
                    {' '}
                    <Link to="/about">About</Link>
                    {' '}
                    <Link to="/web-page">WebPage</Link>
                </header>
                <div>
                    <button onClick={() => browserHistory.push('/about')}>Go to /about</button>
                </div>
                <div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
            </div>
        )
    }

}
export  default App;