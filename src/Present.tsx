import React, { useState } from "react";
import { Grid, Fade, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import { RedLearned, RedMade, RedIs } from "./PresentRed";
import { BlueLearned, BlueMade, BlueIs } from "./PresentBlue";
import { GoldLearned, GoldMade, GoldIs } from "./PresentGold";
import red from "./assets/WD_Red_badge.png";
import gold from "./assets/WD_gold.png";
import blue from "./assets/Web_Dev_blue.png";
import elevenfifty from "./assets/1150.png";

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

const Present = () => {
  const classes = useStyles();
  const [activeBadge, setActiveBadge] = useState("");
  const handleClick = (
    event: React.MouseEvent<HTMLImageElement>,
    color: string
  ) => {
    setActiveBadge(color);
  };

  return (
    <div>
      <Grid container>
        <Grid item>
          <h1>Eleven fifty stuff</h1>
          <div>
            <img
              className={classes.badge}
              src={red}
              alt="red badge"
              onClick={(e) => handleClick(e, "red")}
            />
            <img
              className={classes.badge}
              src={blue}
              alt="blue badge"
              onClick={(e) => handleClick(e, "blue")}
            />
            <img
              className={classes.badge}
              src={gold}
              alt="gold badge"
              onClick={(e) => handleClick(e, "gold")}
            />
          </div>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Fade in={activeBadge !== ""} timeout={500}>
                <div className={classes.icon}>
                  <Typography variant="h3">I learned</Typography>
                </div>
              </Fade>
            </Grid>
            <Grid item>
              {activeBadge === "red" && <RedLearned />}
              {activeBadge === "blue" && <BlueLearned />}
              {activeBadge === "gold" && <GoldLearned />}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Fade in={activeBadge !== ""} timeout={500}>
                <div className={classes.icon}>
                  <Typography variant="h3">to make</Typography>
                </div>
              </Fade>
            </Grid>
            <Grid item>
              {activeBadge === "red" && <RedMade />}
              {activeBadge === "blue" && <BlueMade />}
              {activeBadge === "gold" && <GoldMade />}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Fade in={activeBadge !== ""} timeout={500}>
                <div className={classes.icon}>
                  <Typography variant="h3">which is</Typography>
                </div>
              </Fade>
            </Grid>
            <Grid item>
              {activeBadge === "red" && <RedIs />}
              {activeBadge === "blue" && <BlueIs />}
              {activeBadge === "gold" && <GoldIs />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Present;

{
  /* Non-table version
    <Paper>
        <Grid container className={classes.container}>
          <Grid item >
            <Box>red badge</Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography variant="h4">New Learning</Typography>
              <div className={classes.chunk}>
                <img className={classes.icon} alt="typescript logo" src={ts} />
                <Typography variant="h5">TypeScript</Typography>
              </div>
              <div className={classes.chunk}>
                <img className={classes.icon} alt="material ui logo" src={material} />
                <Typography variant="h5">Material-UI</Typography>
              </div>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography variant="h4">Project</Typography>

           
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <ArrowUpwardIcon className={classes.icon}/>
      <Paper>
        <Grid container className={classes.container}>
          <Grid item >
            <img src={blue} alt='blue badge icon' className={classes.badge}/>
          </Grid>
          <Grid item>
            <Box>
              <Typography variant="h4">New Learning</Typography>
              <div className={classes.chunk}>
                <img className={classes.icon} alt="typescript logo" src={ts} />
                <Typography variant="h5">TypeScript</Typography>
              </div>
          
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography variant="h4">Project</Typography>

              <a
                href="http://jru-outfitter-client.herokuapp.com/"
                target="_blank"
              >
                <img
                  className={classes.icon}
                  alt="outfitter logo"
                  src={outfitter}
                />
              </a>
            </Box>
          </Grid>
        </Grid>
      </Paper> */
}
