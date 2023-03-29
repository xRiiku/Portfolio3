import React from 'react';
import iaPhoto from '../../assets/images/IAPhoto.png'
import styles from './Intro.module.css'

export function Intro() {
    return (
        <section className={styles.introPage}>
            <img className={styles.iaPhoto} src={iaPhoto} alt=''/>
            
        </section>
    );
}

