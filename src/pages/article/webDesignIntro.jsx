import './article.css'

const WebIntro = () => {
    return (
        <section className='article'>
        <div className='articleWrap'>
            <h1 className='headerTxt'>The Art and Science of Web Design: Building Experiences That Matter</h1>
            <h1 className='fs-200'>15 minutes read</h1>
            
            <img src="https://www.dezven.com/images/blog/what-is-meant-by-web-designer.jpg"
            alt="price monitoring bot" className='.articleImg articleContentMargin'/>

            <p className='mb2'>In today’s digital-first world, a website is often the first impression a business makes. It’s the digital storefront, the welcome mat, and in many cases, the deciding factor in whether a visitor stays—or leaves.</p>

            <h1>What Is Web Design?</h1>

            <p className='mb2'>Web design is the process of planning, conceptualizing, and arranging content online. But modern web design goes beyond aesthetics. 
            It includes the site’s structure, user interface (UI), user experience (UX), functionality, accessibility, and responsiveness across devices.
            At its core, web design seeks to answer one question: How can we best serve the user while meeting business goals?</p>

            <h1> Key Elements of Effective Web Design </h1>
            <ul className='mb2'>
                <li>User-Centered Design The best websites are built with users in mind. Designers research user behavior, create personas, and design experiences that are easy to navigate and fulfill user expectations.</li>
                <li>Visual Hierarchy Strategic use of size, color, spacing, and typography guides users through the site. The goal is to highlight important elements like calls-to-action, headings, and featured content.</li>
                <li>Responsive Design With over half of global traffic coming from mobile devices, responsive design ensures a seamless experience on all screen sizes—whether desktop, tablet, or smartphone.</li>
                <li>Consistency A consistent visual language (colors, buttons, typography) creates familiarity and trust. It also strengthens brand identity.</li>
                <li>Fast Load Times Users expect pages to load within 2–3 seconds. Optimized images, clean code, and fast hosting can dramatically improve performance and reduce bounce rates.</li>
                <li>Accessibility Good web design is inclusive. Following accessibility standards (like WCAG) ensures that people with disabilities can navigate and interact with the website using assistive technologies.</li>
            </ul>


            <h1>The Web Design Process</h1>
            <ul className='mb2'>
                <li>Discovery & Research Understand the client’s goals, target audience, competitors, and brand.</li>
                <li>Wireframing & Prototyping Sketch the structure and flow of pages before adding visual elements. Tools like Figma or Adobe XD are commonly used here.</li>
                <li>Visual Design This is where the layout, colors, typography, and imagery come together into a polished visual interface.</li>
                <li>Development Turning the design into a working website using HTML, CSS, JavaScript, and potentially a CMS like WordPress or Webflow.</li>
                <li>Testing & Launch Cross-browser testing, performance checks, and user feedback help identify and fix issues before going live.</li>
                <li>Maintenance Ongoing updates, bug fixes, and content changes ensure the site stays fresh, secure, and functional.</li>
            </ul>

            <h1>Trends in Modern Web Design (2025)</h1>
            <ul className='mb2'>
                <li>Dark Mode Options</li>
                <li>Micro-interactions and Animations.</li>
                <li>Minimalist Layouts</li>
                <li>Bold Typography</li>
                <li>AI-Powered Personalization</li>
                <li>Voice Search Optimization</li>
            </ul>

            <h1>Why Web Design Matters</h1>
            <h1>Whether you're building a personal portfolio, an e-commerce store, or a SaaS product, design is not just how it looks—it’s how it works. A well-designed website can:</h1>
            <ul className='mb2'>
                <li>Boost engagement</li>
                <li>Increase conversions</li>
                <li>Strengthen brand trust.</li>
                <li>Improve SEO and accessibility</li>
                <li>Deliver a better user experience.</li>
            </ul>


        </div>
        </section>
    )
}

export default WebIntro