import React, { useState } from "react";
import { Grid, Fade, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { RedLearned, RedMade, RedIs,RedTo } from "./PresentRed";
import { BlueLearned, BlueMade, BlueIs,BlueTo } from "./PresentBlue";
import { GoldLearned, GoldMade, GoldIs,GoldTo } from "./PresentGold";
import red from "./assets/WD_Red_badge.png";
import gold from "./assets/WD_gold.png";
import blue from "./assets/Web_Dev_blue.png";
import elevenfifty from "./assets/elevenfifty_badges_graduate.png";

const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      height: "60px",
      fontSize: "60px",
      margin: "auto",
      alignItems:'center',
      display:'flex'
    },
    badge: {
      height: "100px",
    },
    row: {
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
        <Grid item md={5} xs={12}>
          <div> <img
              src={elevenfifty}
              alt="eleven fifty badge"
              onClick={(e) => handleClick(e, "")}
            />
          <div className={classes.row}>
            <img
              className={classes.badge}
              src={gold}
              alt="gold badge"
              onClick={(e) => handleClick(e, "gold")}
            />
            <DoubleArrowIcon/>
            <img
              className={classes.badge}
              src={blue}
              alt="blue badge"
              onClick={(e) => handleClick(e, "blue")}
            />
            <DoubleArrowIcon/>
            <img
              className={classes.badge}
              src={red}
              alt="red badge"
              onClick={(e) => handleClick(e, "red")}
            />
          </div>
          </div>
        </Grid>
        <Grid item md={7} xs={12}>
          <Grid container>
            <Grid item sm={4} xs={12}>
              <Fade in={activeBadge !== ""} timeout={500}>
                <div className={classes.icon}>
                  <Typography variant="h3">I learned</Typography>
                </div>
              </Fade>
            </Grid>
            <Grid item sm={8} xs={12}>
              {activeBadge === "red" && <RedLearned classes={classes}/>}
              {activeBadge === "blue" && <BlueLearned classes={classes}/>}
              {activeBadge === "gold" && <GoldLearned classes={classes}/>}
            </Grid>
          </Grid>
          <Grid container>
          <Grid item sm={4} xs={12}>

              <Fade in={activeBadge !== ""} timeout={500}>
                <div className={classes.icon}>
                  <Typography variant="h3">to make</Typography>
                </div>
              </Fade>
            </Grid>
            <Grid item sm={8} xs={12}>
              {activeBadge === "red" && <RedMade classes={classes}/>}
              {activeBadge === "blue" && <BlueMade classes={classes}/>}
              {activeBadge === "gold" && <GoldMade classes={classes}/>}
            </Grid>
          </Grid>
          <Grid container>
          <Grid item sm={4} xs={12}>

              <Fade in={activeBadge !== ""} timeout={500}>
                <div className={classes.icon}>
                  <Typography variant="h3">which is</Typography>
                </div>
              </Fade>
            </Grid>
            <Grid item sm={8} xs={12}>
              {activeBadge === "red" && <RedIs classes={classes}/>}
              {activeBadge === "blue" && <BlueIs classes={classes}/>}
              {activeBadge === "gold" && <GoldIs classes={classes}/>}
            </Grid>
          </Grid>
          <Grid container>
          <Grid item sm={4} xs={12}>

              <Fade in={activeBadge !== ""} timeout={500}>
                <div className={classes.icon}>
                  <Typography variant="h3">to</Typography>
                </div>
              </Fade>
            </Grid> 
            <Grid item sm={8} xs={12}>
              {activeBadge === "red" && <RedTo classes={classes}/>}
              {activeBadge === "blue" && <BlueTo classes={classes}/>}
              {activeBadge === "gold" && <GoldTo classes={classes}/>}
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Present;

