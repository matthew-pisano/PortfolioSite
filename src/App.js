import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from './Wrapper';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Wrapper location="home"/>}/>
                {["home", "simplex", "imperium", "mipsCmd", "inception", "videntium", "anonHires",
                    "neural", "chipFiring", "scp", "babble", "resume", "about"].map((page) => 
                        <Route key={page+"Route"} path={"/"+page} element={<Wrapper location={page}/>}/>)}
            </Routes>
        </Router> 
    );
};

export default App;