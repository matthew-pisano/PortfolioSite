import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Wrapper from './Wrapper';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Wrapper location="home"/>}/>
                {["home", "simplex", "imperium", "mipsCmd", "inception", "videntium", "anonHires",
                    "neural", "chipFiring", "scp", "babble", "resume", "about"].map((page) => 
                        <Route key={page+"Route"} path={"/"+page} element={<Wrapper location={page}/>}/>)}
                <Route path='/admin' component={<Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" />}/>
                <Route path="*" element={<Wrapper location="pageNotFound"/>}/>
            </Routes>
        </Router> 
    );
};

export default App;