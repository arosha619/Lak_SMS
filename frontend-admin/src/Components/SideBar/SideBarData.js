import React from 'react';
import '../SideBar/sidebar.css'
// import GroupAddIcon from '@material-ui/icons/GroupAdd';
// import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
// import PieChartSharpIcon from '@material-ui/icons/PieChartSharp';
// import MailSharpIcon from '@material-ui/icons/MailSharp';




export const SideBarData = [
    {
        
        icon :   <img id='icon' src={require('../images/admin.png')} alt='img'/>,
        link : "/Add-Admin"
    },

    {

        icon :    <img id='icon' src={require('../images/smsbundle.png')} alt='img'/>,
        link : "/Add-Bundles"
    },

    {

        icon :    <img id='icon' src={require('../images/user.png')} alt='img'/>,
        link : "/View-Users"
    },
    {
  
        icon :    <img id='icon' src={require('../images/report.png')} alt='img'/>,
        link : "/Reports"
    },
    
];