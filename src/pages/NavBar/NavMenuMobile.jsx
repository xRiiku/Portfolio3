import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './NavMenuMobile.module.css';
import { useTranslation } from 'react-i18next';

export function NavMenuMobile({ toggleShowIconsAndLogo }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [, setMenuSelected] = useState(false);


    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        toggleShowIconsAndLogo();
    };

    const handleMenuSelect = () => {
        setMenuSelected(true);
        toggleMenu();
    };

    return (
            <div className={isMenuOpen ? styles.NavBarMobile : styles.NavMenuMobile}>
                <div className={styles.NavMenuMobile}>
                
                <FaBars className={styles.burguerMenu} size={35} onClick={toggleMenu} />
                {isMenuOpen && (
                    <ul>
                    <li>
                        <a href='#home' onClick={handleMenuSelect}>{t('navbar.home')}</a>
                    </li>
                    <li>
                        <a href='#skills' onClick={handleMenuSelect}>{t('navbar.skills')}</a>
                    </li>
                    <li>
                        <a href='#projects' onClick={handleMenuSelect}>{t('navbar.projects')}</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={handleMenuSelect}>{t('navbar.contact')}</a>
                    </li>
                    </ul>
                )}
                </div>
            </div>
    );
    }
