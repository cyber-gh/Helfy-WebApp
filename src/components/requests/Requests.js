import React from "react";
import utils from "../../other/utils";
import Request from "./Request";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
    // marginTop: '5rem',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  contentWrapper: {
    margin: '40px 16px'
  },
}));

const Requests = (props) => {
  const classes = useStyles();

  return(
    <div style={{marginTop: '5rem'}}>
      <Paper classes={classes.paper}>
        <Grid container spacing={1}>
          <Grid item>
            <SearchIcon className={classes.block} color="inherit" />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              placeholder="Search by email address, phone number, or user UID"
              InputProps={{
                disableUnderline: true,
                className: classes.searchInput,
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Request/>
          </Grid>
          <Grid item xs={3}>
            <Request/>
          </Grid>
        </Grid>
      </Paper>
    </div>
)
}

export default Requests;