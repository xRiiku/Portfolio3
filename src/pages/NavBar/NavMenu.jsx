import React from 'react';
import { useTranslation } from 'react-i18next';

export function NavMenu(){

    const { t } = useTranslation()

    return (
        <ul>
            <li><a href='#home'>{t('navbar.home')}</a></li>
            <li><a href='#skills'>{t('navbar.skills')}</a></li>
            <li><a href='#projects'>{t('navbar.projects')}</a></li>
            <li><a href='#contact'>{t('navbar.contact')}</a></li>
        </ul>  
    );
}

