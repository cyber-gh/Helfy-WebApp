import React from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import red from "@material-ui/core/colors/red";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import AttachmentIcon from '@material-ui/icons/Attachment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 355,
    margin: "1rem auto",
    borderRadius: "1rem"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  acceptButton: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&hover': {
      backgroundColor: green[700],
    }
  },
  declineButton: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&hover': {
      backgroundColor: red[700],
    }
  }
}));

const Request = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded)
  };

  const Accepted = async () => {



  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <HourglassEmptyIcon></HourglassEmptyIcon>
          </Avatar>
        }
        action={
          <IconButton
            classes={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label={"more"}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={"Francu Richard Serban"}
        subheader={"Dental"}
      >
      </CardHeader>
      <CardContent>
        <List>
          <ListItem>
            <ListItemIcon><AccessTimeIcon></AccessTimeIcon></ListItemIcon>
            <ListItemText>09:30 PM</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><DateRangeIcon></DateRangeIcon></ListItemIcon>
            <ListItemText>September 14, 2016</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><LocationOnIcon></LocationOnIcon></ListItemIcon>
            <ListItemText>Str Camil Petrescu nr12, Bucuresti</ListItemText>
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Button variant="contained" className={classes.acceptButton}>Accept</Button>
        <Button variant="contained" className={classes.declineButton}>Decline</Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List>
          <ListItem>
            <ListItemIcon><AttachmentIcon></AttachmentIcon></ListItemIcon>
            <ListItemText>Attachments</ListItemText>
          </ListItem>
        </List>

      </Collapse>
    </Card>
  )
}

export default Request;