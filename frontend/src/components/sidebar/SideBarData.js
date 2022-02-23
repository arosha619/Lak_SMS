import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';


export const SideBarData = [
    {
        title : "Home",
        icon : <HomeIcon/>,
        link : "/home"
    },

    {
        title : "Create Message",
        icon : <EmailIcon/>,
        link : "/create-message"
    },

    {
        title : "Profile",
        icon : <AccountBoxIcon/>,
        link : "/profile"
    },
    {
        title : "Contacts",
        icon : <AccountCircleIcon/>,
        link : "/contacts"
    },
    {
        title : "Settings",
        icon : <SettingsIcon/>,
        link : "/settings"
    },
    {
        title : "SMS Bundles",
        icon : <AccountBalanceWalletIcon/>,
        link : "/SMS-Bundles"
    },
    {
        title : "Contact us",
        icon : <PhoneInTalkIcon/>,
        link : "/contact-us"
    }
];
