import React from 'react';
import clsx from 'clsx';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EventSeat from '@material-ui/icons/EventSeat';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: 'black',
    height: '100%'
  },
  fullList: {
    width: 'auto',
    backgroundColor: 'black'
  },
  listItem: {
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: '#2A2828'
    },
    '&:first-child': {
      marginTop: '50px'
    },
  },
  menuBttn: {
    width: '100%',
    padding: '25px 0px',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white',
    textDecoration: 'none'
  },
  menuMainBttn: {
    color: 'white',
    fontSize: 40,
    marginLeft: '20px'
  },
  icon: {
    color: 'white'
  },
});

type Anchor = 'left';

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const itemsList = [
    {
      text: 'Dynamic',
      icon: <ViewModuleIcon />,
      path: '/new/rect',
    },
    {
      text: 'Static',
      icon: <EventSeat />,
      path: '/new/seat',
    },
    {
      text: 'Log out',
      icon: <ExitToAppIcon />,
      path: '/',
    },
  ];
  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {itemsList.map(({ text, icon, path }) => (
          <ListItem button key={text} className={clsx(classes.listItem)}>
            <Link to={path} className={clsx(classes.menuBttn)}>
              <ListItemIcon className={clsx(classes.icon)}>{icon}</ListItemIcon>
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {(['left'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className={clsx(classes.menuMainBttn)}
            onClick={toggleDrawer(anchor, true)}>
            <MenuIcon/>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
