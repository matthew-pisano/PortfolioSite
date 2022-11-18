import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from './Wrapper';

const reload = () => window.location.reload();

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Wrapper location="home"/>}/>
                <Route path="/favicon.ico" onEnter={reload} />
            </Routes>
        </Router> 
    );
};

export default App;