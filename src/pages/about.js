import React from 'react';
import ReactMarkdown from 'react-markdown';
import aboutpage from "../pages/content/about.md"

const About = () => {
    return (  
        <div>
            <div>About</div>
            <ReactMarkdown children={aboutpage} skipHtml={false}/>
        </div>
    );
}
 
export default About;