import React from "react";
import { makeStyles, Container, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography  } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Filter from "./filter.js";
import SearchFavBar from "./searchFavBar.js";
import { Helmet } from "react-helmet";
import SearchFavorites from "./searchFavBar.js";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    flexGrow: 1,
    width: "100%",
    height: "auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const  Favorites = () =>{
  const classes = useStyles();

  return (
    <Container margin="auto" component="main" maxWidth="sm">
      <Helmet bodyAttributes={{ style: "background-color : #fff8e1" }} />

      <div className={classes.root}>
        <Grid>
          <SearchFavBar />
          <Filter />
        </Grid>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Chardonnay + Vermont Shepherd
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              Chardonnay + Pental
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              Chardonnay + Ibores
            </Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </div>
    </Container>
  );
}
export default Favorites;