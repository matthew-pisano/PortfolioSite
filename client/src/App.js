import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from './Wrapper';

const App = () => {
    console.log("routing");
    return (
        <Wrapper/>
    );
};

export default App;