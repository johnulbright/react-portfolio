import { Fade, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import outfitter from "./assets/outfitter-logo.png";
import material from "./assets/material-logo.svg";
import ts from "./assets/ts-logo-256.png";

const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      height: "60px",
      fontSize: "60px",
      margin: "auto",
    },
    badge: {
      height: "100px",
    },
    chunk: {
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      display: "flex",
    },
    container: {
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      display: "flex",
    },
  })
);

const RedLearned = () => {
  const classes = useStyles();
  return (
    <Fade in={true} timeout={500}>
        <div>
          <img className={classes.icon} alt="typescript logo" src={ts} />
          <img className={classes.icon} alt="material ui logo" src={material} />
        </div>
    </Fade>
  )
}
const RedMade = () => {
    const classes = useStyles();
    return (
      <Fade in={true} timeout={500}>
          <div>
          <a href="http://jru-outfitter-client.herokuapp.com/" target="_blank">
            <img
              className={classes.icon}
              alt="outfitter logo"
              src={outfitter}
            />
          </a>
        </div>
        </Fade>
    )
}
const RedIs= () => {
    const classes = useStyles();
    return (
      <Fade in={true} timeout={500}>
        <div>
          <Typography variant="body1">
            A CRUD app that also uses:
            <ul>
              <li>React (class components)</li>
              <li>Node.JS</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
              <li>Express</li>
              <li>and Heroku deployment</li>
            </ul>
            to help children decide what clothing is appropriate to wear for the
            day
          </Typography>
      </div>
    </Fade>
  );
};
export {RedLearned,RedMade,RedIs};
