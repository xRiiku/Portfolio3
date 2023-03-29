import React from 'react';
import { useTranslation } from 'react-i18next';

export function NavMenu(){

    const { t } = useTranslation()

    return (
        <ul>
            <li><a href='/Home'>{t('navbar.home')}</a></li>
            <li><a href='/Skills'>{t('navbar.skills')}</a></li>
            <li><a href='/Projects'>{t('navbar.projects')}</a></li>
            <li><a href='/Contact'>{t('navbar.contact')}</a></li>
        </ul>  
    );
}

