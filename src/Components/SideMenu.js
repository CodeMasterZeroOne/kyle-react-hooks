import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from '../logo.svg'
import L01useState from '../Lessons/L01useState/L01useState';
import L02useEffect from '../Lessons/L02useEffect/L02useEffect';
import L03useContext from '../Lessons/L03useContext/L03useContext';
import L04useRef from '../Lessons/L04useRef/L04useRef';
import L05useMemo from '../Lessons/L05useMemo/L05useMemo';
import L06useCallback from '../Lessons/L06useCallback/L06useCallback';
import L07useReducer from '../Lessons/L07useReducer/L07useReducer';
import L08useTransition from '../Lessons/L08useTransition/L08useTransition';
import L09useDeferredValue from '../Lessons/L09useDeferredValue/useDeferredValue';
import L10useLayoutEffect from '../Lessons/L10useLayoutEffect/L10useLayoutEffect';
import L11useDebugValue from '../Lessons/L11useDebugValue/L11useDebugValue';
import L12useImperativeHandle from '../Lessons/L12useImperativeHandle/L12useImperativeHandle';
import L13useId from '../Lessons/L13useId/L13useId';
import L14localStorage from '../Lessons/L14localStorage/L14localStorage';
import L15customHooks1to5 from '../Lessons/L15customHooks1to5/L15customHooks1to5';
import L16customHooks6to10 from '../Lessons/L16customHooks5to10/L16customHooks6to10';
import L17customHooks11to15 from '../Lessons/L17customHooks11to15/L17customHooks11to15';
import L18customHooks16to20 from '../Lessons/L18customHooks16to20/L18customHooks16to20';
import L19customHooks21to25 from '../Lessons/L19customHooks21to25/L19customHooks21to25';
import L20customHooks26to30 from '../Lessons/L20customHooks26to30/L20customHooks26to30';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export default function SideMenu() {
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const [content, setContent] = useState('');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDisplayContent = (displayThisContent) => {
        setContent(displayThisContent)
        handleDrawerClose()
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        React Hooks
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <p style={{ margin: 0, padding: 0, fontSize: '0.5em' }}>Must Know</p>
                <List>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useState')}><ListItemIcon><img src={logo} alt='useState' /></ListItemIcon><ListItemText primary='useState' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useEffect')}><ListItemIcon><img src={logo} alt='useEffect' /></ListItemIcon><ListItemText primary='useEffect' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useContext')}><ListItemIcon><img src={logo} alt='useContext' /></ListItemIcon><ListItemText primary='useContext' /></ListItemButton></ListItem>
                </List>
                <Divider />
                <p style={{ margin: 0, padding: 0, fontSize: '0.5em' }}>Lesser used</p>
                <List>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useRef')}><ListItemIcon><img src={logo} alt='useRef' /></ListItemIcon><ListItemText primary='useRef' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useMemo')}><ListItemIcon><img src={logo} alt='useMemo' /></ListItemIcon><ListItemText primary='useMemo' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useCallback')}><ListItemIcon><img src={logo} alt='useCallback' /></ListItemIcon><ListItemText primary='useCallback' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useReducer')}><ListItemIcon><img src={logo} alt='useReducer' /></ListItemIcon><ListItemText primary='useReducer' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useTransition')}><ListItemIcon><img src={logo} alt='useTransition' /></ListItemIcon><ListItemText primary='useTransition' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useDeferredValue')}><ListItemIcon><img src={logo} alt='useDeferredValue' /></ListItemIcon><ListItemText primary='useDeferredValue' /></ListItemButton></ListItem>
                </List>
                <Divider />
                <p style={{ margin: 0, padding: 0, fontSize: '0.5em' }}>Optional</p>
                <List>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useLayoutEffect')}><ListItemIcon><img src={logo} alt='useLayoutEffect' /></ListItemIcon><ListItemText primary='useLayoutEffect' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useDebugValue')}><ListItemIcon><img src={logo} alt='useDebugValue' /></ListItemIcon><ListItemText primary='useDebugValue' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useImperativeHandle')}><ListItemIcon><img src={logo} alt='useImperativeHandle' /></ListItemIcon><ListItemText primary='useImperativeHandle' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useId')}><ListItemIcon><img src={logo} alt='useId' /></ListItemIcon><ListItemText primary='useId' /></ListItemButton></ListItem>
                </List>
                <Divider />
                <p style={{ margin: 0, padding: 0, fontSize: '0.5em' }}>Custom</p>
                <List>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('useLocalStorage')}><ListItemIcon><img src={logo} alt='useLocalStorage' /></ListItemIcon><ListItemText primary='useLocalStorage' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('customHooks1to5')}><ListItemIcon><img src={logo} alt='customHooks1to5' /></ListItemIcon><ListItemText primary='customHooks 1 to 5' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('customHooks6to10')}><ListItemIcon><img src={logo} alt='customHooks6to10' /></ListItemIcon><ListItemText primary='customHooks 6 to 10' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('customHooks11to15')}><ListItemIcon><img src={logo} alt='customHooks11to15' /></ListItemIcon><ListItemText primary='customHooks 11 to 15' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('customHooks16to20')}><ListItemIcon><img src={logo} alt='customHooks16to20' /></ListItemIcon><ListItemText primary='customHooks 16 to 20' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('customHooks21to25')}><ListItemIcon><img src={logo} alt='customHooks21to25' /></ListItemIcon><ListItemText primary='customHooks 21 to 25' /></ListItemButton></ListItem>
                    <ListItem disablePadding><ListItemButton onClick={() => handleDisplayContent('customHooks26to30')}><ListItemIcon><img src={logo} alt='customHooks26to30' /></ListItemIcon><ListItemText primary='customHooks 26 to 30' /></ListItemButton></ListItem>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <div>
                    {content === 'useState' ? <L01useState /> : null}
                    {content === 'useEffect' ? <L02useEffect /> : null}
                    {content === 'useContext' ? <L03useContext /> : null}
                    {content === 'useRef' ? <L04useRef /> : null}
                    {content === 'useMemo' ? <L05useMemo /> : null}
                    {content === 'useCallback' ? <L06useCallback /> : null}
                    {content === 'useReducer' ? <L07useReducer /> : null}
                    {content === 'useTransition' ? <L08useTransition /> : null}
                    {content === 'useDeferredValue' ? <L09useDeferredValue /> : null}
                    {content === 'useLayoutEffect' ? <L10useLayoutEffect /> : null}
                    {content === 'useDebugValue' ? <L11useDebugValue /> : null}
                    {content === 'useImperativeHandle' ? <L12useImperativeHandle /> : null}
                    {content === 'useId' ? <L13useId /> : null}
                    {content === 'useLocalStorage' ? <L14localStorage /> : null}
                    {content === 'customHooks1to5' ? <L15customHooks1to5 /> : null}
                    {content === 'customHooks6to10' ? <L16customHooks6to10 /> : null}
                    {content === 'customHooks11to15' ? <L17customHooks11to15 /> : null}
                    {content === 'customHooks16to20' ? <L18customHooks16to20 /> : null}
                    {content === 'customHooks21to25' ? <L19customHooks21to25 /> : null}
                    {content === 'customHooks26to30' ? <L20customHooks26to30 /> : null}

                </div>
            </Main>
        </Box>
    );
}