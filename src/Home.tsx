import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// export interface Home {
//     children: React.ReactNode;
// }

  const drawerWidth = 240;

  const useStyles = makeStyles((theme: Theme) =>
      createStyles({
          root: {
              display: 'flex',
          },
          appBar: {
              zIndex: theme.zIndex.drawer + 1,
              transition: theme.transitions.create(['width', 'margin'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
              }),
          },
          appBarShift: {
              marginLeft: drawerWidth,
              width: `calc(100% - ${drawerWidth}px)`,
              transition: theme.transitions.create(['width', 'margin'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
              }),
          },
          menuButton: {
              marginRight: 36,
          },
          hide: {
              display: 'none',
          },
          drawer: {
              width: drawerWidth,
              flexShrink: 0,
              whiteSpace: 'nowrap',
          },
          drawerOpen: {
              width: drawerWidth,
              transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
              }),
          },
          drawerClose: {
              transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
              }),
              overflowX: 'hidden',
              width: theme.spacing(7) + 1,
              [theme.breakpoints.up('sm')]: {
                  width: theme.spacing(9) + 1,
              },
          },
          toolbar: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: theme.spacing(0, 1),
              // necessary for content to be below app bar
              ...theme.mixins.toolbar,
          },
          content: {
              flexGrow: 1,
              padding: theme.spacing(3),
          },
          topLink: {
            color: 'white',
            textDecoration: "none",
          },
          link: {
              textDecoration: "none",
              color: theme.palette.text.secondary,
          },
      }),
  );

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                    <Link to="/" className={classes.topLink}>計算問題PDFジェネレーター</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link to="/" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="HOME" />
                        </ListItem>
                    </Link>
                    <Link to="/mix" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <Filter1Icon />
                            </ListItemIcon>
                            <ListItemText primary="足し算引き算かけ算" />
                        </ListItem>
                    </Link>
                    <Link to="/plus-only" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <Filter2Icon />
                            </ListItemIcon>
                            <ListItemText primary="足し算だけ" />
                        </ListItem>
                    </Link>
                    <Link to="/minus-only" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <Filter3Icon />
                            </ListItemIcon>
                            <ListItemText primary="引き算だけ" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
            </main>
        </div>
        </>
    )
}

export default Home
