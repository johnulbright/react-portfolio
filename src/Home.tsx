import React from 'react'
import headshot from './assets/JohnUlbright.jpeg'

// import AppBar from "@material-ui/core/AppBar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Drawer from "@material-ui/core/Drawer";
// import Hidden from "@material-ui/core/Hidden";
// import IconButton from "@material-ui/core/IconButton";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import MenuIcon from "@material-ui/icons/Menu";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";

import {
  makeStyles,
  createStyles,
} from "@material-ui/core/styles";


const useStyles = makeStyles(() =>
  createStyles({
    headshot: {
      backgroundColor: "#96bb7c",
      width: "300px",
      textAlign: "center",
    },
   
  })
);


const Home =()=> {
    const classes = useStyles();


    return(
        <div>Home
        <img className={classes.headshot} src = {headshot} alt = "John's headshot"/>

        </div>
    )
}

export default Home