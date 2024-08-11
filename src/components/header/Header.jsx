import React from "react";
import styles from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../../assets/ec.png'

export default function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.header_left}>
                <img src={Logo} alt="logo"/>
            <div className={styles.header_search}>
                <SearchIcon/>
                <input type="text"/>
            </div>
            </div>
    
            <div className={styles.header_right}>
                <div className={styles.headerOption}>
                    <HomeIcon/>
                </div>
                <div className={styles.headerOption}>
                    <PersonIcon/>
                </div>
        
            </div>
        </div> 
    )
}