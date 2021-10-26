import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component  {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Style Me</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <div className="nav">
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Children</a></li>
                        <li><a href="#">Couple</a></li>
                        <li><a href="#">Aged</a></li>
                    </div>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>

                    <footer>
                        <li>&copy; <span id="logo">Style Me</span> { new Date().getFullYear()}</li>
                        <li>Created by <a href="www.roncloud.com.ng">Roncloud Technologies &trade;</a></li>
                    </footer>
                </div>
            );   
        }
    }
}

export default App;