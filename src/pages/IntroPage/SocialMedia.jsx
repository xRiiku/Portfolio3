import React from 'react';
import github from '../../assets/images/github.png'
import twitter from '../../assets/images/twitter.png'
import linkedin from '../../assets/images/linkedin.png'
import styles from './SocialMedia.module.css'
import { useTranslation } from 'react-i18next';

export function SocialMedia() {

    const { t } = useTranslation()

    return (
        <div className={styles.SocialMedia}>
        <a href='https://github.com/xRiiku' target='_blank' rel='noopener noreferrer'>{t('socialmedia.github')}<img src={github} alt='Github logo'></img></a>
        <a href='https://www.linkedin.com/in/daniel-ram%C3%B3n-campos-0ab4b4254/' target='_blank' rel='noopener noreferrer'>{t('socialmedia.linkedin')}<img src={linkedin} alt='Linkedin logo'></img></a>
        <a href='https://twitter.com/Riku0h' target='_blank' rel='noopener noreferrer'>{t('socialmedia.twitter')}<img src={twitter} alt='Twitter logo'></img></a>
            
        </div>
    );
}
