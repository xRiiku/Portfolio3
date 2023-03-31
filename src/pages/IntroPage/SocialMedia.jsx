import React from 'react';
import github from '../../assets/images/github.png'
import twitter from '../../assets/images/twitter.png'
import linkedin from '../../assets/images/linkedin.png'
import styles from './SocialMedia.module.css'

export function SocialMedia() {
    return (
        <div className={styles.SocialMedia}>
        <a href='https://github.com/xRiiku'><img src={github} alt=''></img></a>
        <a href='https://www.linkedin.com/in/daniel-ram%C3%B3n-campos-0ab4b4254/'><img src={linkedin} alt=''></img></a>
        <a href='https://twitter.com/Riku0h'><img src={twitter} alt=''></img></a>
            
        </div>
    );
}
