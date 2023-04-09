import React from 'react';
import styles from './skills.module.css'
import html from '../../assets/images/html5.svg'
import css from '../../assets/images/css3.svg'
import javascript from '../../assets/images/javascript.svg'
import react from '../../assets/images/react.svg'
import sass from '../../assets/images/sass.svg'
import git from '../../assets/images/git.svg'
import github from '../../assets/images/github.svg'
import nextjs from '../../assets/images/nextjs.png'
import mongodb from '../../assets/images/mongodb.png'
import nodejs from '../../assets/images/nodejs.svg'
import typescript from '../../assets/images/typescript.svg'
import bootstrap from '../../assets/images/bootstrap.svg'
import { useTranslation } from 'react-i18next';

export function Skills() {

    const { t } = useTranslation()

    return (
        <section className={styles.skillsDiv} id='skills'>
            <div className={styles.title}>
                <h2>{t('skills.current')}</h2>
            </div>

            <div className={styles.actualSkills}>
                <img src={html} alt='Logo de html5' />
                <img src={css} alt='Logo de css3' />
                <img src={javascript} alt='Logo de javascript' />
                <img src={react} alt='Logo de react' />
                <img src={sass} alt='Logo de sass' />
                <img src={git} alt='Logo de git' />
                <img src={github} alt='Logo de github' />
            </div>

            <div className={styles.title}>
                <h2>{t('skills.future')}</h2>
            </div>

            <div className={styles.futureSkills}>
                <img src={nextjs} alt='Logo de nextjs' />
                <img src={mongodb} alt='Logo de mongodb' />
                <img src={nodejs} alt='Logo de nodejs' />
                <img src={typescript} alt='Logo de typescript' />
                <img src={bootstrap} alt='Logo de bootstrap' />
            </div>

        </section>
    );
}


