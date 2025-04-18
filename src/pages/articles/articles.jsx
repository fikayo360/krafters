import { Link } from "react-router-dom"
import './articles.css'
const Articles = () => {

    return (
        <section id="articles">
            <div id='articlesWrap'>
                <h1 className="fs-500">Engineering blog</h1>
                
                    <Link to='/article/web design for business'>
                    <div className='articles'>
                        <div className="articlesUp">
                            <img src="https://colorwhistle.com/wp-content/uploads/2017/04/Why-you-need-a-website.webp" 
                            style={{ width: '100%',height:'100%' }} />
                        </div>
                        <div className="down">
                            <h1 className="fs-500">Why Great Web Design Is Your Business’s Secret Weapon</h1>
                            <p className="truncate">
                            Think about your favorite websites. What keeps you coming back? It’s not just the content—it’s how the site makes you feel. A great design builds trust, simplifies navigation, and guides users toward taking action. 
                            Whether that’s making a purchase, booking a call, or signing up for a newsletter, design plays a silent yet powerful role in that journey.
                            </p>
                            <div className="downBio"> <img src='logo.png'/><h1 className="fs-200">Krafters</h1></div>
                        </div>
                    </div>
                    </Link>  

                    <Link to='/article/intro to web design'>
                    <div className='articles'>
                        <div className="articlesUp">
                            <img src="https://www.dezven.com/images/blog/what-is-meant-by-web-designer.jpg" 
                            style={{ width: '100%',height:'100%' }} />
                        </div>
                        <div className="down">
                            <h1 className="fs-500">Intro to web design </h1>
                            <p className="truncate">
                            In today’s digital-first world, a website is often the first impression a business makes. It’s the digital storefront,
                             the welcome mat, and in many cases, the deciding factor in whether a visitor stays—or leaves. 
                             That’s where web design comes in: the art and science of crafting user experiences that are not only visually appealing but also intuitive, 
                             functional, and goal-driven.
                            </p>
                            <div className="downBio"> <img src='logo.png'/><h1 className="fs-200">Krafters</h1></div>
                        </div>
                    </div>
                    </Link> 

                </div>
        </section>
    )
}

export default Articles