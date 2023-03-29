import React from 'react';
import eng from '../assets/images/eng.png'
import esp from '../assets/images/esp.png'
import styles from './Language.module.css'

export function EngWave() {
    return (
        <img className={styles.wave} src={eng} alt='eng'></img>
    );
}

export function EspWave() {
    return (
        <img className={styles.wave} src={esp} alt='esp'></img>
    );
}