
import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <header className="navbar navbar-dark bg-primary">
                  <h1><Link to="/" className="navbar-brand">React GitHub Project</Link></h1>
                </header>
                
                <main className="container">
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default App;