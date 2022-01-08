import React from 'react';
import classes from './Topbar.module.css';

const Topbar = () => {
    return(
        <header className="App-header">
            <nav className={classes.Topbar}>
          <img src="https://logo-logos.com/wp-content/uploads/2016/12/Amazon_logo_logotype.png" alt="Amazon Logo"/>
        </nav>
        </header>
        
    );
}

export default Topbar;