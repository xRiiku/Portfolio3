import React from 'react';
import style from './Footer.module.css'

export function Footer() {
    return (
        <div className={style.footer}>
            <p>© RikuDev Portfolio {new Date().getFullYear()}</p>
        </div>
    );
}

export default Footer;
