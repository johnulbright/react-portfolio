import { Fade, Typography } from "@material-ui/core";
import react from "./assets/react.png";
import heroku from "./assets/heroku.png";
import node from "./assets/node.png";
import postgres from "./assets/Postgresql.png";
import sequelize from "./assets/sequelize.png";
import travel from "./assets/travel-logo.png";

interface BadgeProps {
  classes: {
    icon: string;
    badge: string;
    row: string;
    container: string;
  };
}
const BlueLearned = ({classes}: BadgeProps) => {
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
  );
};
const BlueMade = ({classes}: BadgeProps) => {
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
  );
};
const BlueIs = ({classes}: BadgeProps) => {
  return (
    <Fade in={true} timeout={500}>
      <div>
        <Typography variant="body1">
        a full-stack PERN app with CRUD operations (completed as a group project) that uses React functional components and Heroku deployment
        </Typography>
      </div>
    </Fade>
  );
};
const BlueTo= ({classes}: BadgeProps) => {
  return (
    <Fade in={true} timeout={500}>
      <div>
        <Typography variant="body1">
          help a user identify points of interest for a vacation
        </Typography>
    </div>
  </Fade>
);
};
export { BlueLearned, BlueMade, BlueIs,BlueTo };
