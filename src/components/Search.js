import React, { Component } from 'react'
import axios from 'axios';

export class Search extends Component {
    state = {
        tag1: '',
        tag2: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const title  = this.state.tag1;
        axios.post("http://localhost:8000/api/cal/", {
              title           
           })
           .then(function (response) {
              console.log(response);
           });
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Search Tag1"
                        value={this.state.tag1}
                        onChange={this.handleChange}
                        name="tag1"
                    />
                    <input
                        placeholder="Search Tag2"
                        value={this.state.tag2}
                        onChange={this.handleChange}
                        name="tag2"
                    />
                    <button onkeydown="enterSearch()" type="submit">검색</button>
                </form>
            </div>
            
        )
    }
}

export default Search
