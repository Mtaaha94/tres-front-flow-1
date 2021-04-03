import React from "react";
import "./styles/App.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from './components/layout/Navbar'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Home from './components/pages/home'
import Map from './components/pages/map'
import Family from './components/pages/family'
import Friends from './components/pages/friends'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
  //  paddingTop: theme.spacing(5),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
    <Container className={classes.root} disableGutters>
      <Navbar />
      <Switch>
       <Route exact path ='/' component ={Home}/>
       <Route exact path ='/map' component= {Map}/>
       <Route exact path ='/friends' component ={Friends}/>
       <Route exact path ='/family' component ={Family}/>
     </Switch>
    
      
    </Container>
    </BrowserRouter>
  );
}

export default App;
