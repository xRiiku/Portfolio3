import React from 'react';
import iaPhoto from '../../assets/images/IAPhoto.png'
import styles from './Intro.module.css'
import { SocialMedia } from './SocialMedia';
import { useTranslation } from 'react-i18next';

export function Intro() {

    const { t } = useTranslation()

    return (
        <div className={styles.introPage}>

            <div>
                <SocialMedia/>
            </div>

            <div className={styles.photo}>
                <img src={iaPhoto} alt=''/>
                <p>{t('introPage.IAimg')}</p>
            </div>

            <div className={styles.info}>
                <p>{t('introPage.greeting')}</p>
                <span className={styles.typingDemo}>Daniel Ramon 'Rikudev'</span>
                <p>{t('introPage.info')}</p>
            </div>


            
        </div>
    );
}

