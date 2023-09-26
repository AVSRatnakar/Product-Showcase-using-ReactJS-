import React from 'react';

import classes from './topbar.module.css'
const Topbar = () => {
    return(
        <header>
        <nav className={classes.topbar}>
        <img src="https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png" alt="Amazon Logo"/>
        </nav>
      </header>
    )
}

export default Topbar;