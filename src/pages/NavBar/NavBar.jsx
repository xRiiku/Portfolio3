import React, { useState } from "react";
import { EngWave, EspWave } from "../../components/Language";
import DarkMode from "../../components/DarkMode/DarkMode.js";
import { NavMenu } from "./NavMenu";
import { NavMenuMobile } from "./NavMenuMobile";
import styles from "./NavBar.module.css";
import stylesMobile from './NavMenuMobile.module.css'
import { useTranslation } from "react-i18next";

export function NavBar() {
    const { i18n } = useTranslation();
    const [language, setLenguage] = useState("es");
    const [showIconsAndLogo, setShowIconsAndLogo] = useState(true);

    const onChangeLanguage = () => {
        i18n.changeLanguage(language);
        if (language === "en") {
        setLenguage("es");
        } else {
        setLenguage("en");
        }
    };

    const toggleShowIconsAndLogo = () => {
        setShowIconsAndLogo(!showIconsAndLogo);
    };

    return (
        <section className={showIconsAndLogo ? styles.NavBar : stylesMobile.NavBarMobile}>
        {showIconsAndLogo && (
            <div className={styles.logo}>
            <p>RikuDev</p>
            </div>
        )}

        <div className={styles.NavbarMenu}>
            <NavMenu />
        </div>

        <div className={stylesMobile.NavMenuMobile}>
            <NavMenuMobile
            toggleShowIconsAndLogo={toggleShowIconsAndLogo}
            showIconsAndLogo={showIconsAndLogo}
            />
        </div>

        {showIconsAndLogo && (
            <div className={styles.icons}>
            <span onClick={onChangeLanguage}>
                {language === "en" ? <EngWave /> : <EspWave />}
            </span>

            <DarkMode />
            </div>
        )}
        </section>
    );
    }
