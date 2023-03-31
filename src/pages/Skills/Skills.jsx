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

export function Skills() {
    return (
        <div className={styles.skillsDiv}>
            <div>
                <h1>ACTUAL SKILLS</h1>
            </div>

            <div className={styles.actualSkills}>
                <img src={html} alt='' />
                <img src={css} alt='' />
                <img src={javascript} alt='' />
                <img src={react} alt='' />
                <img src={sass} alt='' />
                <img src={git} alt='' />
                <img src={github} alt='' />
            </div>

            <div>
                <h1>FUTURE SKILLS</h1>
            </div>

            <div className={styles.futureSkills}>
                <img src={nextjs} alt='' />
                <img src={mongodb} alt='' />
                <img src={nodejs} alt='' />
                <img src={typescript} alt='' />
                <img src={bootstrap} alt='' />
            </div>

        </div>
    );
}


