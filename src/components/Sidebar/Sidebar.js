import React, { Component } from "react";
import injectSheet from 'react-jss'
import color from '../../utils/colors'

const styles = {
    sidebar: {
        width: 256,
        opacity: 0.65,
        background: '#1E2B41',
        height: '100%',
        position: 'fixed',
        zIndex: 1,
        top: 0,
        left: 0,
        overflowX: 'hidden',
        paddingTop: 20,
      },
    ul: {
        margin: '50px 30px',
        textAlign: 'left'
    },
    li: {
        listStyle: 'none',
        padding: '20px 0',
        margin: '0 0',
    },
    a: {
        textDecoration: 'none',
        color: color.COLOR_WHITE,
        opacity: 1
    }
}

const SidebarUnstyled = ({ classes, children }) => (<div className={classes.sidebar}>
    <ul className={classes.ul}>

        <li className={classes.li}><a className={classes.a} href="#"><i class="fa fa-line-chart"></i>Analytics</a></li>

        <li className={classes.li}><a className={classes.a} href="#"><i class="fa fa-folder-open"></i>Reports</a></li>

        <li className={classes.li}><a className={classes.a} href="#"><i class="fa fa-wrench"></i>Settings</a></li>

    </ul>
</div>);

const Sidebar = injectSheet(styles)(SidebarUnstyled)

export default Sidebar;
