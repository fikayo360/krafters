import { Link } from 'react-router-dom';
import './hero.css'
import { useState,useEffect,useRef } from 'react'
import AutoPlay from '../track/track';

const Hero = () => {
    const [isNavActive, setIsNavActive] = useState(false)

    const toggleNav = () => {
        setIsNavActive((prev) => !prev)
    }

    return (
        <section id='hero'>
            
            { isNavActive? <div id='navMobile'>
                <div id='nMobileWrap'>
                    <div id='nMobileHead'>
                    <div className='heroLogo'> 
                            <img src="logo.png" className='logo'/>
                            <h1 className='fs-400'>Krafters</h1>
                    </div>
                    <img src='close.png' onClick={toggleNav}/></div>
                    <ul>
                    <li className='fs-700'><Link to="/articles">articles</Link></li>
                    <li className='fs-700'><a href="#projects">projects</a></li>
                    <li className='fs-700'><a href='#skills'>skills</a></li>
                    </ul>
                </div>
            </div>:null }

            <div id='heroWrap'>
                <nav>
                    <div id='navWrap'>
                        <div className='heroLogo'> 
                            <img src="logo.png" className='logo'/>
                            <h1 className='fs-400'>Krafters</h1>
                        </div>
                        <ul>
                            <li><Link to="/articles">articles</Link></li>
                            <li><a href="#projects">projects</a></li>
                            <li><a href='#skills'>skills</a></li>
                        </ul>
                        <img src='burger.png' className='burger' onClick={toggleNav}/>
                    </div>

                </nav>
                
                <div class="text-track-container">
                <div class="text-track">E-commerce Stores <span className='fadeTrack'> Business Websites </span>Portfolio websites <span className='fadeTrack'>Landing pages </span>
                Booking & Scheduling Sites <span className='fadeTrack'>Blogs & Content Platforms </span>  Membership Sites <span className='fadeTrack'> Course & eLearning Platforms </span> 
                Event & Conference Pages <span className='fadeTrack'></span>Personal Brand Websites </div> Nonprofit & Charity Sites
                </div>

                <h1 id='heroMain'>Websites That Work as Hard as You Do</h1>

                <p className='fs-800'>
                Whether you’re a small business owner, a growing brand, or a solo creative, your website should do more than just look good — it 
                should work for you. We craft strategic, high-performing websites that not only reflect your brand but also drive engagement, generate leads, 
                and convert visitors into loyal customers. 
                From sleek portfolios to robust e-commerce platforms, we build every site with purpose, precision, and your goals at the center
                </p>

            </div>
        </section>
    )
}

export default Hero