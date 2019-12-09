import React from 'react';
import './App.css';
import NavLeft from "./components/NavLeft/NavLeft";
import NavTop from "./components/NavTop/NavTop";
import Content from "./components/Content/Content";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

library.add(fab, faCheckSquare, faCoffee);

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const sections = [
    {title: 'React', url: '#'},
    {title: 'Новости', url: '#'},
    {title: 'Другие проекты', url: '#'},
    {title: 'О себе', url: '#'},
    {title: 'GitHub', url: '#'},
];


const App = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">

                    {/*<Button variant="contained" color="primary">*/}
                    {/*    Hello World*/}
                    {/*</Button>*/}

                    {/*<Header/>*/}
                    <NavTop title="REACT JS" sections={sections}/>
                    <NavLeft/>
                    <Content/>

                    <Route path='/news'
                           render={() => <News/>}/>

            </Container>
        </React.Fragment>
    )
};

export default App;
