import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { pages } from './common';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Admin from './Admin';

function External(props) {window.location.href = props.to; return null;}
External.propTypes = {to: PropTypes.string};

function Rick() {
    return <video width="100%" height="100%" autoPlay>
        <source src="https://lightsail-image-repo.s3.amazonaws.com/videos/rick.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
    </video>;
}
  
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Wrapper location="home"/>}/>
                {Object.keys(pages).map((page) => 
                        <Route key={page+"Route"} path={"/"+page} element={<Wrapper location={page}/>}/>)}
                <Route path='admin' element={<Admin/>}/>
                <Route path='documents' element={<Rick/>}/>
                <Route path="*" element={<Wrapper location="pageNotFound"/>}/>
            </Routes>
        </Router> 
    );
};

export default App;