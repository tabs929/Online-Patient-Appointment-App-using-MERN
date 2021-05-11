import React, { useEffect } from 'react';
import {AppBar,Container,Typography  } from "@material-ui/core";
import steh from "./images/steth.png";
import {useDispatch} from "react-redux";
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import {getPosts} from "./Actions/posts.js";
import Form from "./components/form/Form.js";
import useStyles from "./styles";
import Login from "./components/admin/adminLogin.js";
import Dash from "../src/components/adminDash/adminDash.js";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <Container>
            <AppBar className={classes.appBar} positiom = "static" color =" primary">
                <Typography className={classes.heading} variant="h3" align="left">Online Doctor Appointment</Typography>
                <img className={classes.image}
                src={steh} alt ="steh" height ="50"/>
            </AppBar>
        <BrowserRouter>
          <Route path="/" exact component={Form}/>
          <Route path="/admin" exact component={Login}/>
          <Route path="/admin/adminDash" exact component={Dash}/>
      </BrowserRouter>
    </Container>
    );
}

export default App;
