import { Fade, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import js from "./assets/js.png";
import html from "./assets/HTML5_Logo.png";
import css from "./assets/CSS3_logo.png";
import github from "./assets/github.png";
import bootstrap from "./assets/bootstrap.png";

interface BadgeProps {
  classes: {
    icon: string;
    badge: string;
    row: string;
    container: string;
  };
}

const GoldLearned = ({classes}: BadgeProps) => {
  return (
    <Fade in={true} timeout={500}>
          <div className={classes.row}>
            <img className={classes.icon} alt="html5 logo" src={html} />
            <img className={classes.icon} alt="css logo" src={css} />
            <img className={classes.icon} alt="js logo" src={js} />
            <img
              className={classes.icon}
              alt="bootstrap logo"
              src={bootstrap}
            />
            <img className={classes.icon} alt="github logo" src={github} />
          </div>
      </Fade>
  )
}
const GoldMade = ({classes}: BadgeProps) => {
  return (
    <Fade in={true} timeout={500}>
          <div>
            <a href="https://johnulbright.github.io/portfolio/" target="_blank">
              <img className={classes.icon} alt="portfolio logo" />
            </a>
          </div>
    </Fade>
  )
}
const GoldIs = ({classes}: BadgeProps) => {
  return (
    <Fade in={true} timeout={500}>
          <div>
            <Typography variant="body1">
            The first version of my portfolio
          </Typography>
          </div>
    </Fade>
  );
};
const GoldTo= ({classes}: BadgeProps) => {
  return (
    <Fade in={true} timeout={500}>
      <div>
        <Typography variant="body1">
          let me share (the 2020 version of) myself with the world
        </Typography>
    </div>
  </Fade>
);
};
export {GoldLearned,GoldMade,GoldIs,GoldTo}
