import { TableCell, TableRow, Fade, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import react from "./assets/react.png";
import heroku from "./assets/heroku.png";
import node from "./assets/node.png";
import postgres from "./assets/Postgresql.png";
import sequelize from "./assets/sequelize.png";
import travel from "./assets/travel-logo.png";

const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      height: "60px",
      fontSize: "60px",
      margin: "10px",
    },
    badge: {
      height: "100px",
    },
    row: {
      justifyContent: "left",
      alignItems: "center",
      margin: "auto",
      display: "flex",
    },
    container: {
      justifyContent: "left",
      alignItems: "center",
      margin: "auto",
      display: "flex",
    },
  })
);

const BlueLearned = () => {
  const classes = useStyles();
  return (
    <Fade in={true} timeout={500}>
        <div className={classes.row}>
          <img className={classes.icon} alt="react logo" src={react} />
          <img className={classes.icon} alt="node logo" src={node} />
          <img className={classes.icon} alt="sequelize logo" src={sequelize} />
          <img className={classes.icon} alt="postgres logo" src={postgres} />
          <img className={classes.icon} alt="heroku logo" src={heroku} />
        </div>
</Fade>
)
}
const BlueMade = () => {
  const classes = useStyles();
  return (
    <Fade in={true} timeout={500}>
        <div>
          <a
            href="https://jhkn-my-travelapp-client.herokuapp.com/"
            target="_blank"
          >
            <img className={classes.icon} alt="travel app logo" src={travel} />
          </a>
        </div>
        </Fade>
  )
}
const BlueIs = () => {
  const classes = useStyles();
  return (
    <Fade in={true} timeout={500}>
        <div>
          <Typography variant="body1">
            A CRUD app that also uses:
            <ul>
              <li>React (functional components)</li>
              <li>Node.JS</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
              <li>Express</li>
              <li>and Heroku deployment</li>
            </ul>
            to help a user identify points of interest for a vacation. This was
            a group project.
          </Typography>
        </div>
    </Fade>
  );
};
export {BlueLearned,BlueMade,BlueIs}