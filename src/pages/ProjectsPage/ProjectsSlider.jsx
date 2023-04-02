import React from 'react';
import ReactCardSlider from "react-card-slider-component";
import styles from './ProjectsSlider.module.css'

export function ProjectsSlider () {

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
        {image:"https://www.rikudev.com/SliderImages/PortfolioV1.png",title:"Portfolio V1",description:"Portfolio i did to practise html, css and javascript",clickEvent:portfoliov1},
        {image:"https://www.rikudev.com/SliderImages/PortfolioV2.png",title:"Portfolio V2",description:"Portfolio did to practise React.",clickEvent:portfoliov2},
        {image:"https://www.rikudev.com/SliderImages/Coinbase.png",title:"CoinBase Clone",description:"Coinbase clone, did after html-css course.",clickEvent:coinbase},
        {image:"https://www.rikudev.com/SliderImages/Pokedex.png",title:"Pokedex",description:"Pokedex did with React to practise hooks and fetch",clickEvent:pokedex},
        {image:"https://www.rikudev.com/SliderImages/Puzzle.png",title:"Game: Puzzle",description:"Puzzle made with html, css and JavaScript!",clickEvent:puzzle},
        {image:"https://www.rikudev.com/SliderImages/watch.png",title:"Watch practice",description:"Watch made with JavaScript to practice dates",clickEvent:watch},
    ]

        return (
            <div className={styles.container}>

                <div className={styles.title}>
                    <h1>PROYECTS</h1>
                </div>

                <div id='body' className={styles.slider}>
                    <ReactCardSlider slides={slides}/>
                </div>

            </div>
    );
}

export default ProjectsSlider;
