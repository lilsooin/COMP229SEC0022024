import { Link } from 'react-router-dom';

/**
 * Filename: Home.jsx
 * Student’s Name: Suin Lee 
 * StudentID: 301369995
 * Date: 2024-09-24
 */

export default function Home() {
     return (
         <>
             <header>
                 <h2><p>Hello I am Suin Lee!</p></h2>
                 I am a student in centennial collge.<br />
                 I like Programming.<br />
                 To details here is <Link to="/about">About Me</Link><br />
                 If you are interested please check my <Link to="/contact">Contact</Link>
             </header>
             <section>
                 <h3>SKills</h3>
                 <ul>
                     <li>Java</li>
                     <li>Android</li>
                     <li>Kotlin</li>
                     <li>Database</li>
                     <li>React</li>
                     <li>Git</li>
                 </ul>
 
                 <hr />
 
 
                 <p>Mission statement:</p>
                 <><b>As a software engineer, </b>
                     my mission is to design and develop innovative, reliable,
                     and efficient solutions that empower users and drive business growth.
                     I am committed to continuous learning,
                     leveraging the latest technologies,
                     and fostering collaboration to create high-quality software that solves real-world problems with precision and integrity
 
                 </>
             </section>
         </>
 
     );
 
 }
 