import { Fade, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import outfitter from "./assets/outfitter-logo.png";
import material from "./assets/material-logo.svg";
import ts from "./assets/ts-logo-256.png";

interface BadgeProps {
    classes: {
      icon: string;
      badge: string;
      row: string;
      container: string;
    };
  }

const RedLearned = ({classes}: BadgeProps) => {
  return (
    <Fade in={true} timeout={500}>
        <div className={classes.row}>
          <img className={classes.icon} alt="typescript logo" src={ts} />
          <img className={classes.icon} alt="material ui logo" src={material} />
        </div>
    </Fade>
  )
}
const RedMade = ({classes}: BadgeProps) => {
    return (
      <Fade in={true} timeout={500}>
          <div className={classes.row}>
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
const RedIs= ({classes}: BadgeProps) => {
    return (
      <Fade in={true} timeout={500}>
        <div>
          <Typography variant="body1">
            a full-stack PERN app with CRUD operations that uses React class components and Heroku deployment
          </Typography>
      </div>
    </Fade>
  );
};
const RedTo= ({classes}: BadgeProps) => {
  return (
    <Fade in={true} timeout={500}>
      <div>
        <Typography variant="body1">
          help users decide what clothing is appropriate to wear for their children to wear given local weather conditions
        </Typography>
    </div>
  </Fade>
);
};
export {RedLearned,RedMade,RedIs,RedTo};
