import React from "react";
import styles from './Footer.module.css';
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import BoschLogo from '../../assets/boschLogo.svg'

export default function Footer(){
    return (
        <div className={styles.finally}>
            <div className={styles.all_image}>
                <Facebook style={{ color: '#fff' }}/>
                <Twitter style={{ color: '#fff' }}/>
                <LinkedIn style={{ color: '#fff' }}/>
                <Instagram style={{ color: '#fff' }}/>
            </div>
            <div className="gtranslate_wrapper"></div>
            {/* 
            <script>
                window.gtranslateSettings = {"default_language":"PT","languages":["en","es","de","br"],"wrapper_selector":".gtranslate_wrapper","flag_size":16,"alt_flags":{"en":"usa","es":"mexico", "ge":"germany","br":"brazil"}}
            </script>
            <script src="https://cdn.gtranslate.net/widgets/latest/flags.js" defer></script> 
            */}
            <div className={styles.second_image}>
                <img src={BoschLogo} alt="imagem da logo da bosch"/>
            </div>
        </div>
    );
}
