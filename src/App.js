import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import NavLeft from "./components/NavLeft/NavLeft";
import NavTop from "./components/NavTop/NavTop";
import Content from "./components/Content/Content";

const App = () => {
    return (
        <div className={"body-wrapper"}>
            <Header/>
            <NavTop/>
            <NavLeft/>
            <Content/>
        </div>
    )
};

export default App;
