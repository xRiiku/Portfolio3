import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from './NavMenuMobile.module.css'
import { useTranslation } from "react-i18next";

export function NavMenuMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const { t } = useTranslation()

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    return (

        <div className={styles.NavMenuMobile}>
            <FaBars onClick={toggleMenu} />
            {isMenuOpen &&(
            <ul>
                <li><a href='#home'>{t('navbar.home')}</a></li>
                <li><a href='#skills'>{t('navbar.skills')}</a></li>
                <li><a href='#projects'>{t('navbar.projects')}</a></li>
                <li><a href='#contact'>{t('navbar.contact')}</a></li>
            </ul>
        )}
        </div>
        );
};

