import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Wrapper from './Wrapper';
import { Routes } from 'react-router-dom';

class App extends Component {
    render() {
        console.log("routing");
        return (
            <Router>
                <Routes>
                    <Route path={"/"} element={<Wrapper/>}/>
                </Routes>
            </Router>
        );
    }
}

export default App;