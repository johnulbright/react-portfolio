import { Fade, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import js from "./assets/js.png";
import html from "./assets/HTML5_Logo.png";
import css from "./assets/CSS3_logo.png";
import github from "./assets/github.png";
import bootstrap from "./assets/bootstrap.png";

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

const GoldLearned = () => {
  const classes = useStyles();
  return (
    <Fade in={true} timeout={500}>
          <div>
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
const GoldMade = () => {
  const classes = useStyles();
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
const GoldIs = () => {
  const classes = useStyles();
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
export {GoldLearned,GoldMade,GoldIs}
