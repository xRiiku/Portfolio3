import React from 'react';
import iaPhoto from '../../assets/images/IAPhoto.png'
import styles from './Intro.module.css'
import { SocialMedia } from './SocialMedia';

export function Intro() {
    return (
        <div className={styles.introPage}>

            <div>
                <SocialMedia/>
            </div>

            <div className={styles.photo}>
                <img src={iaPhoto} alt=''/>
                <p>Imagen generada con IA</p>
            </div>

            <div className={styles.info}>
                <p>¡Hola! Soy</p>
                <span className={styles.typingDemo}>Daniel Ramon 'Rikudev'</span>
                <p>Estudiante autodidacta de programación Front-end. Actualmente en búsqueda de mi primera experiencia laboral dentro del mundo del desarollo web.</p>
            </div>


            
        </div>
    );
}

