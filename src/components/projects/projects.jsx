import Carousel from "../carousel/carousel"
import './projects.css'
import projectImages from "../../images"
import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <section id="projects">
            <div id="projectsWrap">
                <h1>Our Projects</h1>
                <div className='project'>
                    <div className='projectUp'>
                        <h1>tosan du photography</h1>
                        <div><a href="https://github.com/fikayo360/web-scrapping-projects/blob/main/glassdoor.js">github</a><img /></div>
                   </div>
                   <div className="projectDown">
                        <div className="pdWrap">
                            <div className="pdWrapLeft">
                                <h1>#Web scrapping #browser automation</h1>
                                <p className="fs-400">
                                Description: Built a bot using Puppeteer to peridoically scrape job listings, from Glassdoor.com 
                                it ascrapes attributes including job titles, companies, salaries, and descriptions. and saves it in a spreadsheet file.
                                </p> 
                                 <Link to='article/job scrapping bot'>Read more</Link>
                            </div>
                            <Carousel images={projectImages[0].images}/>
                        </div>
                   </div>
                </div>

                <div className='project'>
                    <div className='projectUp'>
                        <h1>Bot alpha</h1>
                        <div><a href="https://github.com/fikayo360/fintechAppServer">github</a><img /></div>
                   </div>
                   <div className="projectDown">
                        <div className="pdWrap">
                            <div className="pdWrapLeft">
                                <h1>#Api's #node js #express js #postgres #database transactions</h1>
                                <p className="fs-400">
                                Description: Designed and implemented a robust API to handle digital wallet functionalities, 
                                including user authentication, wallet balance management, transaction tracking, and fund transfers.
                                </p>
                               
                            </div>
                            <Carousel images={projectImages[1].images} />
                        </div>
                   </div>
                </div>

            

                <div className='project'>
                    <div className='projectUp'>
                        <h1>fkbytes</h1>
                        <div><a href="https://github.com/fikayo360/web-scrapping-projects/blob/main/realEstateListings.js">github</a><img /></div>
                   </div>
                   <div className="projectDown">
                        <div className="pdWrap">
                            <div className="pdWrapLeft">
                            <h1>#Web scrapping #browser automation</h1>
                                <p className="fs-400">
                                Description: peridoically extract data from real estate sites like Realtor.com, capturing property details such as price, location, and features.
                                and tabulates the results in a spreadsheet.
                                </p>
                               
                            </div>
                            <Carousel images={projectImages[2].images}/>
                        </div>
                   </div>
                </div> 

                <div className='project'>
                    <div className='projectUp'>
                        <h1>k8 studious </h1>
                        <div><a href="https://github.com/fikayo360/web-scrapping-projects/blob/main/priceMonitor.js">github</a><img /></div>
                   </div>
                   <div className="projectDown">
                        <div className="pdWrap">
                            <div className="pdWrapLeft">
                                <h1>#Web scrapping #browser automation</h1>
                                <p className="fs-400">
                                Description: Created a bot to track and monitor prices of products across e-commerce platforms. the bot periodically checks for the prices of competing products 
                                it then compares the prices with the existing prices in the db to see if there is a change in the price.it also identifies other useful trends in the data.
                                </p> 
                            <Link to='article/Building a price monitoring bot'>Read more</Link>
                               
                            </div>
                            <Carousel images={projectImages[3].images}/>
                        </div>
                   </div>
                </div> 

            </div>
        </section>
    )
}

export default Projects