import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, fade} from '@material-ui/core/styles';
import {Link, useLocation} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HistoryIcon from '@material-ui/icons/History';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Request from "./requests/Request";
import Grid from "@material-ui/core/Grid";
import {grey} from "@material-ui/core/colors";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "center",
    // marginBottom: 'auto',
  },
  gridRoot: {
    flexGrow: 1,
    background: grey[200],
    alignItems: "center"
  },
  appBar: {
    background: "#6a1b9a",
    // alignItems: 'flex-start',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  requestDrawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  dateNav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    marginLeft: "auto",
  },
  navigateIcon: {
    color: "#ffffff",
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    }
  }
}));

export default function MyAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [requestExpanded, setRequestExpanded] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleRequestExpandedClick = () => {
    setRequestExpanded(!requestExpanded)
  };

  let location = useLocation()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={() => handleDrawerOpen()}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Helfy
          </Typography>
          {location.pathname === '/home' ?
            <div className={classes.dateNav}>
              <IconButton className={classes.navigateIcon}><NavigateBeforeIcon /></IconButton>
              <Typography className={classes.title} style={{padding: "0 1rem"}} variant="subtitle1" noWrap>31 August 2020 - 04 September 2020</Typography>
              <IconButton className={classes.navigateIcon}><NavigateNextIcon /></IconButton>
            </div> : null}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant={'persistent'}
        anchor={'left'}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}>
        <div className={classes.drawerHeader}>
          <div style={{display: 'flex'}}>
            <ListItem>
              <ListItemIcon><AccountCircleIcon/></ListItemIcon>
              <ListItemText primary="Francu Richard Serban"/>
              </ListItem>
          </div>
          <IconButton onClick={() => handleDrawerClose()}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button={true} key={"Schedule"} component={Link} to={"/home"}>
            <ListItemIcon><CalendarViewDayIcon/></ListItemIcon>
            <ListItemText primary={"Schedule"} />
          </ListItem>
          <ListItem button={true} onClick={handleRequestExpandedClick}>
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText primary={"Requests"} />
          </ListItem>
        </List>
        <Drawer
          className={classes.requestDrawer}
          variant={'persistent'}
          open={requestExpanded}
          anchor={'top'}
          classes={{
            paper: classes.drawerPaper
          }}>
          <Grid spacing={3} className={classes.gridRoot}>
            <Grid item>
              <List>
                <ListItem button={true} key={"Schedule"}  onClick={handleRequestExpandedClick}>
                  <ListItemIcon><CalendarViewDayIcon/></ListItemIcon>
                  <ListItemText primary={"Schedule"} />
                </ListItem>
              </List>
            </Grid>
            <Grid item>
              <Request />
            </Grid>
            <Grid item >
              <Request />
            </Grid>
            <Grid item>
              <Request />
            </Grid>
            <Grid item >
              <Request />
            </Grid>
          </Grid>
        </Drawer>
      </Drawer>
    </div>
  );
}