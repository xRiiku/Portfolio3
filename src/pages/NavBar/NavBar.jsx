import React from 'react';
import styles from './NavBar.module.css'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EngWave } from '../../components/Language'
import { EspWave } from '../../components/Language'
import DarkMode from '../../components/DarkMode/DarkMode';
import { NavMenu } from './NavMenu';

export function NavBar() {

    const { i18n } = useTranslation();
    const [language, setLenguage] = useState('es');

    const onChangeLanguage = () => {
        i18n.changeLanguage(language);
            if (language === 'en') {
                setLenguage('es');
            } else {
                setLenguage('en');
            }
    };

    


    return (
        <section className={styles.NavBar}>

        <div className={styles.logo}>
            <p>RikuDev</p>
        </div>

        <div className={styles.NavbarMenu}>
            <NavMenu/>
        </div>

        <div className={styles.icons}>
            <span onClick={onChangeLanguage}> {language === 'en' ? <EngWave /> : <EspWave />}</span>

            <DarkMode/>
        </div>
            
        </section>
    );
}
