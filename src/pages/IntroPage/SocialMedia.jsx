import React from 'react';
import githubBlue from '../../assets/images/githubBlue.svg'
import twitter from '../../assets/images/twitter.svg'
import linkedin from '../../assets/images/linkedin.svg'
import styles from './SocialMedia.module.css'

export function SocialMedia() {

    return (
        <div className={styles.SocialMedia}>
        <a href='https://github.com/xRiiku' target='_blank' rel='noopener noreferrer'><img src={githubBlue} alt='Github logo'></img></a>
        <a href='https://www.linkedin.com/in/danielramoncampos/' target='_blank' rel='noopener noreferrer'><img src={linkedin} alt='Linkedin logo'></img></a>
        <a href='https://twitter.com/xRikuDev' target='_blank' rel='noopener noreferrer'><img src={twitter} alt='Twitter logo'></img></a>
        </div>
    );
}
