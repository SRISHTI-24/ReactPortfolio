import React from 'react'
import Typical from 'react-typical'
import './About.css'
export default function About() {
    return (
        <div className='about-container'>
            <div className='aboutme'>
                <h3>About Me</h3>
                <h5>Why choose Me?</h5>
            </div>

            <div className='aboutphoto'>
                <div className='about-content'>
                    <h3><Typical
                        loop={Infinity}
                        steps={[
                            ' hlo....',
                            1000,
                            ' ',
                            1500,

                        ]}
                    /></h3>

                    <div className='content-2'>
                        <p>Full Stack Web Developer with background
                            knowledge of MERN stack with redux along with a knack
                            of building applications with utmost efficiency.
                            Strong professional with a Btech wiiling to be an asset
                            for an organisation</p>
                        <br></br>
                        <p>
                            Here are a Few Highlights:
                            <br></br>
                            <ul>
                                <li>Full Stack Web Development</li>
                                <li>Interactive Front End as per the Design</li>
                                <li>React and React Native</li>
                                <li>Building Rest API</li>
                                <li>Managing Database</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='about-profile-picture'>

                    <div className='about-profile-picture-background'>

                    </div>

                </div>

            </div>
            <div className='buttons'>
                <div className='btn1'>
                    <a href='https://www.linkedin.com/in/srishti24/'>
                        <button className='btn primary-btn'>
                        Hire Me
                    </button>
                    </a>
                    
                </div>
                &emsp;&emsp;
                <div className='btn2'>
                    <a href='srishti+updated+resume+23+July+2023.pdf' download='Srishti resume.pdf'>
                        <button className='btn highlighted-btn'>
                            Get resume
                        </button>
                    </a>

                </div>
            </div>
        </div>


    )
}
