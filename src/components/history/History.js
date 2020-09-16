import React from "react";
import utils from "../../other/utils";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Content from "./Content";
import {makeStyles} from "@material-ui/core/styles";

// let theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#63ccff',
//       main: '#009be5',
//       dark: '#006db3',
//     },
//   },
//   typography: {
//     h5: {
//       fontWeight: 500,
//       fontSize: 26,
//       letterSpacing: 0.5,
//     },
//   },
//   shape: {
//     borderRadius: 8,
//   },
//   props: {
//     MuiTab: {
//       disableRipple: true,
//     },
//   },
//   mixins: {
//     toolbar: {
//       minHeight: 48,
//     },
//   },
// });
//
// theme = {
//   ...theme,
//   overrides: {
//     MuiDrawer: {
//       paper: {
//         backgroundColor: '#18202c',
//       },
//     },
//     MuiButton: {
//       label: {
//         textTransform: 'none',
//       },
//       contained: {
//         boxShadow: 'none',
//         '&:active': {
//           boxShadow: 'none',
//         },
//       },
//     },
//     MuiTabs: {
//       root: {
//         marginLeft: theme.spacing(1),
//       },
//       indicator: {
//         height: 3,
//         borderTopLeftRadius: 3,
//         borderTopRightRadius: 3,
//         backgroundColor: theme.palette.common.white,
//       },
//     },
//     MuiTab: {
//       root: {
//         textTransform: 'none',
//         margin: '0 16px',
//         minWidth: 0,
//         padding: 0,
//         [theme.breakpoints.up('md')]: {
//           padding: 0,
//           minWidth: 0,
//         },
//       },
//     },
//     MuiIconButton: {
//       root: {
//         padding: theme.spacing(1),
//       },
//     },
//     MuiTooltip: {
//       tooltip: {
//         borderRadius: 4,
//       },
//     },
//     MuiDivider: {
//       root: {
//         backgroundColor: '#404854',
//       },
//     },
//     MuiListItemText: {
//       primary: {
//         fontWeight: theme.typography.fontWeightMedium,
//       },
//     },
//     MuiListItemIcon: {
//       root: {
//         color: 'inherit',
//         marginRight: 0,
//         '& svg': {
//           fontSize: 20,
//         },
//       },
//     },
//     MuiAvatar: {
//       root: {
//         width: 32,
//         height: 32,
//       },
//     },
//   },
// };
//
// const drawerWidth = 256;
//
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     minHeight: '100vh',
//   },
//   // drawer: {
//   //   [theme.breakpoints.up('sm')]: {
//   //     width: drawerWidth,
//   //     flexShrink: 0,
//   //   },
//   // },
//   app: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   main: {
//     flex: 1,
//     padding: theme.spacing(6, 4),
//     background: '#eaeff1',
//   },
//   footer: {
//     padding: theme.spacing(2),
//     background: '#eaeff1',
//   },
// }));

// const History = (props) => {
//   const classes = useStyles();
//
//   return (
//     <ThemeProvider theme={theme}>
//       <div className={classes.root}>
//         <CssBaseline />
//         <div className={classes.app}>
//           <main className={classes.main}>
//             <Content />
//           </main>
//         </div>
//       </div>
//     </ThemeProvider>
//   )
// }

const History = (props) => {
  return(
    <div>
      <div style={{top: "5rem", marginTop:"5rem"}}>
        Hello from History
      </div>
      <div>
        down
      </div>
    </div>
  )
}

export default History;