import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import NavLeft from "./components/NavLeft/NavLeft";
import NavTop from "./components/NavTop/NavTop";
import Content from "./components/Content/Content";
import {Route} from "react-router-dom";
import News from "./components/News/News";

const App = () => {
    return (
        <div className={"body-wrapper"}>
            <Header/>
            <NavTop/>
            <NavLeft/>
            <Content/>

            <Route path='/news'
                   render={ () => <News /> }/>
        </div>
    )
};

export default App;
