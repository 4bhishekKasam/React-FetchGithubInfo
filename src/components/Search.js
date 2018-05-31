import React from 'react';
import { browserHistory as history } from 'react-router';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/user/${this.refs.userInput.value}`)
    }

    render() {
        return (
         <div className="container">
            <div className="row">
               <div class="col col-lg-2"> &nbsp; </div>
            </div>
            <div className="row">
            <div className="col col-lg-3"> &nbsp; </div>
            <div className="col col-lg-5"> 
                <h3>Enter a GitHub Username</h3>
                 <form onSubmit={this._handleSubmit} >
                 <div class="form-group">
			    	<input ref="userInput" className="form-control" type="text" />
                  </div>
                  <div class="form-group">
                <button className="btn btn-primary">Search <span class="glyphicon glyphicon-search"></span></button>
               </div>
               </form>
               </div>
             </div>  
            </div>
        );
    }
};

export default Search;