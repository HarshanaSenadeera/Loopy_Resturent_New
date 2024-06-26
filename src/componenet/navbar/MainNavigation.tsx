import { Link } from 'react-router-dom';
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Assessment, Settings} from "@material-ui/icons";
import {MenuBook, Receipt, SupportAgent, TableBar, WavingHand} from "@mui/icons-material";

interface ListItemWithLinkProps {
    to: string;
    icon: React.ReactNode;
    text: string;
}

const ListItemWithLink: React.FC<ListItemWithLinkProps> = ({ to, icon, text }) => (
    <ListItem disablePadding component={Link} to={to}>
        <ListItemButton>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} sx={{color:'#606060'}}  />

        </ListItemButton>
    </ListItem>
);

const MainNavigation: React.FC = () => (
    <div>
<Toolbar/>
        <Divider />
        <List>
            {[
                { text: 'Dashboard', to: '/' },
                { text: 'Dishes', to: '/dish' },
                { text: 'Byers', to: '/byer' },
                { text: 'Invoices', to: '/invoiceData' },
                { text: 'Reports', to: '/report' },
                { text: 'Tables', to: '/orderTable' },

            ].map(({ text, to }, index) => (
                <ListItemWithLink key={text} to={to} text={text} icon={index === 0 ? <DashboardIcon />  : index === 1 ? <MenuBook />  : index === 2 ? <SupportAgent/> :
                    index === 3 ? <Receipt/>: index === 4 ? <Assessment/>: <TableBar />} />
            ))}
        </List>
        <Divider />
        <List>
            {[
                { text: 'Settings', to: 'setting'},
                /*{ text: 'Trash', to: ''},
                { text: 'Spam', to: ''},*/

            ].map(({ text, to }, index) => (
                <ListItemWithLink
                    key={text}
                    to={to}
                    text={text}
                    icon={index === 0 ? <Settings /> : <MailIcon />}
                />
            ))}
        </List>
    </div>
);

export default MainNavigation;
