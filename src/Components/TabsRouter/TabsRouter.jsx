import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ItemList from '../ItemList/ItemList';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './TabsRouter.css';

import {
  HashRouter,
  Route,
  Link,
  useLocation,
  Redirect
} from "react-router-dom";


function TabPanel(props) {
  const { children, value, active, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== active}
      id={`tabs-router-${index}`}
      aria-labelledby={`tabs-router-${index}`}
      {...other}
    >
      {value === active && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `tabs-router-tab-${index}`,
    'aria-controls': `tabs-router-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabsBar = () => {

  // If you provide an array of routes (which is the normal use case)
  // then you need to provide them in descendant order.
  // This means that if you have nested routes like users,
  // users/new, users/edit, etc.
  // Then the order would be ['users/add', 'users/edit', 'users'].
  //const routeMatch = useRouteMatch(["/inbox/:id", "/drafts", "/trash"]);
  //const currentTab = routeMatch?.path;
  const classes = useStyles();

  const location = useLocation();
  let currentTab = location.pathname;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={currentTab}
        >
          <Tab
            label="CATALOGO"
            value="/products"
            to="/products"
            component={Link}
            {...a11yProps(0)}
          />
          <Tab
            label="NOVEDADES"
            value="/news"
            to="/news"
            component={Link}
            {...a11yProps(1)}
          />
          <Tab
            label="NOSOTROS"
            value="/about"
            to="/about"
            component={Link}
            {...a11yProps(2)}
          />
          <Tab
            label="CARRITO"
            value="/cart"
            to="/cart"
            component={Link}
            {...a11yProps(3)}

          />
        </Tabs>
      </AppBar>
      <TabPanel value={currentTab} active="/products" index={0}>
        <ItemListContainer>
          <ItemList />
        </ItemListContainer>
      </TabPanel>
      <TabPanel value={currentTab} active="/news" index={1}>
        <Typography>NOVEDADES</Typography>
      </TabPanel>
      <TabPanel value={currentTab} active="/about" index={2}>
        <Typography>NOSOTROS</Typography>
      </TabPanel>
      <TabPanel value={currentTab} active="/cart" index={3}>
        <Typography>CARRITO</Typography>
      </TabPanel>
    </div>
  );
}

const TabsRouter = () => {
  return (
    <div>
      <HashRouter>
        {/* <Route>
          {({ location }) => (
            <Typography gutterBottom>
              Current route: {location.pathname}
            </Typography>
          )}
        </Route> */}
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <TabsBar />
      </HashRouter>
    </div>
  );
}
export default TabsRouter;