import { useState } from 'react';
import './Slider.css'
import { useTranslation } from 'react-i18next';

export function Slider() {

    const { t } = useTranslation()

    const slidesData = [
        {
            id: 1,
            title: t('projects.pokedex'),
            description: t('projects.pokedexDesc'),
            imageUrl: 'https://www.rikudev.com/SliderImages/Pokedex.png',
            link: 'https://www.rikudev.com/Pokedex/index.html'
        },
        {
            id: 2,
            title: t('projects.clone'),
            description: t('projects.cloneDesc') ,
            imageUrl: 'https://www.rikudev.com/SliderImages/Coinbase.png',
            link: 'https://www.rikudev.com/Coinbase/html/proyecto.html'
        },
        {
            id: 3,
            title: t('projects.githubProfileSearch'),
            description: t('projects.githubProfileSearchDesc'),
            imageUrl: 'https://www.rikudev.com/SliderImages/githubProfileSearch.png',
            link: 'https://rikudev.com/githubProfileFinder/index.html'
        },
        {
            id: 4,
            title: t('projects.calculator'),
            description: t('projects.calculatorDesc'),
            imageUrl: 'https://www.rikudev.com/SliderImages/Calculator.png',
            link: 'https://rikudev.com/Calculator/index.html'
        },
        {
            id: 5,
            title: t('projects.musicplayer'),
            description: t('projects.musicplayerDesc'),
            imageUrl: 'https://www.rikudev.com/SliderImages/MusicPlayer.png',
            link: 'https://rikudev.com/MusicPlayer/index.html'
        },
        {
            id: 10,
            title: t('projects.portfoliov1'),
            description: t('projects.portfoliov1Desc'),
            imageUrl: 'https://www.rikudev.com/SliderImages/PortfolioV1.png',
            link: 'https://www.rikudev.com/PortfolioV1/index.html'
        },
        {
            id: 11,
            title: t('projects.portfoliov2'),
            description: t('projects.portfoliov2Desc'),
            imageUrl: 'https://www.rikudev.com/SliderImages/PortfolioV2.png',
            link: 'https://www.rikudev.com/PortfolioV2/index.html'
        },
        {
            id: 12,
            title: t('projects.puzzle'),
            description: t('projects.puzzleDesc'),
            imageUrl: 'https://www.rikudev.com/SliderImages/Puzzle.png',
            link: 'https://www.rikudev.com/Puzzle/index.html'
        },
        {
            id: 13,
            title: t('projects.watch'),
            description: t('projects.watchDesc'),
            imageUrl: 'https://www.rikudev.com/SliderImages/watch.png',
            link: 'https://rikudev.com/Watch/index.html'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToNextSlide = () => {
        const newIndex = (currentSlide + 1) % slidesData.length;
        setCurrentSlide(newIndex);
    };

    const goToPrevSlide = () => {
        const newIndex = (currentSlide - 1 + slidesData.length) % slidesData.length;
        setCurrentSlide(newIndex);
    };

    return (
        <div className='slider-container' id='projects'>
        <div>
            <h2 className='title'>{t('projects.title')}</h2>
        </div>
        <div
            className='slider-wrapper'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
            {slidesData.map((slide) => (
            <div className='slide-card' key={slide.id}>
                <a href={slide.link}>
                <img src={slide.imageUrl} alt={slide.title} />
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                </a>
            </div>
            ))}
        </div>
        <div className='slider-controls'>
            <button onClick={goToPrevSlide} className='prev'>Prev</button>
            <button onClick={goToNextSlide} className='next'>Next</button>
        </div>
        <div className='slider-dots'>
            {slidesData.map((slide, index) => (
            <span
                key={slide.id}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
            ></span>
            ))}
        </div>
        </div>
    );
    }


