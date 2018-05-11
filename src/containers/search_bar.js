import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        // this is an instance of seachbar
        // SearchBar has a function onInputChange
        // bind that function to this which is searhcbar
        // and replace searchbar with new bound instance of searchbar
        this.onInputChange = this.onInputChange.bind(this);
    }


    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }



    // * rule of thumb:
    // when you have a callback that makes a reference to this,
    // you need to bind it
    render() {
        return (
            <form className="input-group">
                <input
                    placeholder="Get a five day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
