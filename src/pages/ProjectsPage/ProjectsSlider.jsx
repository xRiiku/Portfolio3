import React from 'react';
import ReactCardSlider from "react-card-slider-component";
import styles from './ProjectsSlider.module.css'
import { useTranslation } from 'react-i18next';

export function ProjectsSlider () {

    const { t } = useTranslation()

    const portfoliov1 = (slider)=>{
        window.open('https://www.rikudev.com/PortfolioV1/index.html', '_blank')
    }
    
    const portfoliov2 = (slider)=>{
        window.open('https://www.rikudev.com/PortfolioV2/index.html', '_blank')
    }
    
    const coinbase = (slider)=>{
        window.open('https://www.rikudev.com/Coinbase/html/proyecto.html', '_blank')
    }
    
    const pokedex = (slider)=>{
        window.open('https://www.rikudev.com/Pokedex/index.html', '_blank')
    }
    
    const puzzle = (slider)=>{
        window.open('https://www.rikudev.com/Puzzle/index.html', '_blank')
    }
    
    const watch = (slider)=>{
        window.open('https://rikudev.com/Watch/index.html', '_blank')
    }
    
    
    const slides = [
        {image:"https://www.rikudev.com/SliderImages/PortfolioV1.png",title:t('projects.portfoliov1') ,description:t('projects.portfoliov1Desc'),clickEvent:portfoliov1},
        {image:"https://www.rikudev.com/SliderImages/PortfolioV2.png",title:t('projects.portfoliov2') ,description:t('projects.portfoliov2Desc'),clickEvent:portfoliov2},
        {image:"https://www.rikudev.com/SliderImages/Coinbase.png",title:t('projects.clone') ,description:t('projects.cloneDesc'),clickEvent:coinbase},
        {image:"https://www.rikudev.com/SliderImages/Pokedex.png",title:t('projects.pokedex') ,description:t('projects.pokedexDesc'),clickEvent:pokedex},
        {image:"https://www.rikudev.com/SliderImages/Puzzle.png",title:t('projects.puzzle') ,description:t('projects.puzzleDesc'),clickEvent:puzzle},
        {image:"https://www.rikudev.com/SliderImages/watch.png",title:t('projects.watch') ,description:t('projects.watchDesc'),clickEvent:watch},
    ]

        return (
            <section className={styles.container} id="projects">

                <div className={styles.title}>
                    <h1>{t('projects.title')}</h1>
                </div>

                <div id='body' className={styles.slider}>
                    <ReactCardSlider slides={slides}/>
                </div>

            </section>
    );
}

export default ProjectsSlider;
