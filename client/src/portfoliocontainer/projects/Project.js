import React from 'react'
import img3 from '../../portfoliocontainer/images/chats.jpg'
import img4 from '../../portfoliocontainer/images/game.jpg'
import img2 from '../../portfoliocontainer/images/portfolio.jpg'
import img1 from '../../portfoliocontainer/images/tavelling.jpg'
import './Project.css'
export default function Project() {
    return (
        <div className='projects-container'>
            <div className='projects-header'>
                <h2>Projects</h2>
                <h4>My Top Projects</h4>
            </div>
            <div className='projects-content'>
                <article className='projects-item'>
                    <div className='projects-image'>
                        <img src={img1} alt='' />
                    </div>
                    <h4>'Travello-'A travelling website''</h4>
                    <a href='https://github.com/SRISHTI-24/Travello_WebApp_Project' className='btn'>
                        <button className='btn primary-btn'>
                            Github
                        </button>
                    </a>
                    <a href='https://ashu2206.github.io/Travello_WebApp_Project/'>
                        <button className='btn highlighted-btn'>
                            Live-Demo
                        </button>
                    </a>
                </article>
                <article className='projects-item'>
                    <div className='projects-image'>
                        <img src={img2} alt='' />
                    </div>
                    <h4>'Portfolio Website'</h4>
                    <a href='https://github.com/SRISHTI-24/ReactPortfolio' >
                        <button className='btn primary-btn'>
                            Github
                        </button>
                    </a>
                    <a href='https://react-portfolio-crch.onrender.com/'>
                        <button className='btn highlighted-btn'>
                            Live-Demo
                        </button>
                    </a>
                </article>
                <br></br>
                <article className='projects-item'>
                    <div className='projects-image'>
                        <img src={img3} alt='' />
                    </div>
                    <h4>'Chat Application'</h4>
                    <a href='https://github.com/SRISHTI-24/chatapplication/tree/main' >
                        <button className='btn primary-btn'>
                            Github
                        </button>
                    </a>
                    <a href='https://chat-application1-e437.onrender.com/' >
                        <button className='btn highlighted-btn'>
                            Live-Demo
                        </button>
                    </a>
                </article>
                <article className='projects-item'>
                    <div className='projects-image'>
                        <img src={img4} alt='' />
                    </div>
                    <h4>'Snake Water Gun'</h4>
                    <a href='https://github.com/SRISHTI-24/snake-water-gun'>
                        <button className='btn primary-btn'>
                            Github
                        </button>
                    </a>
                    <a href='https://srishti-24.github.io/snake-water-gun/'>
                        <button className='btn highlighted-btn'>
                            Live-Demo
                        </button>
                    </a>
                </article>
            </div>
        </div>
    )
}
