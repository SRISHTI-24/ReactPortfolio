
import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"
export default function profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.linkedin.com/in/srishti24/'>
                                <i className='fa fa-linkedin-square'>

                                </i>
                            </a>
                            <a href='https://www.instagram.com/srishti_2424/'>
                                <i className='fa fa-instagram'>

                                </i>
                            </a>
                            <a href='https://github.com/SRISHTI-24'>
                                <i className='fa fa-github-square'>

                                </i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Srishti</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        'Full Stack Developer ',
                                        1900,
                                        'Enthusiastic Dev ',
                                        1700,
                                        'Problem Solver  ',
                                        1800,
                                        'Mern Stack Dev ',
                                        1600,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Passionate of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <a href='https://www.linkedin.com/in/srishti24/'>
                                    <button className='btn primary-btn'>
                            Hire Me
                        </button>
                        </a>
                        
                        <a href='https://drive.google.com/file/d/1Ieh2nDE-1zkCqeVgEirK_fJ-2cO7RGtf/view?usp=sharing' download='Srishti resume.pdf'>
                            <button className='btn highlighted-btn'>
                                Get resume
                            </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div >
    )
}
