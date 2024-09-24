import picture1 from './assets/picture resize.jpg'
import resume from './assets/Suin Lee Resume.pdf'


/**
 * Filename: about.jsx
 * Student’s Name: Suin Lee 
 * StudentID: 301369995
 * Date: 2024-09-24
 */
export default function About() {
    return (
        <>
            <header>
                <h3>Legal name: Suin Lee</h3>
                <img src={picture1} width='100px'></img>
                <br />

                I have experience in successfully developing and launching products
                for various services such as shopping mall, dashcam, kiosks, and lawn financial service.
                <br />
                I am very interested in improving the development culture and processes within companies.
                <br />
                In fact, I have reduced development time by creating and applying modular projects.
                <br />
                I have a keen interest in programming and enjoy learning about technology in my spare time, as well as discussing programming-related topics.
                <br />
                <h3><a href={resume}>Resume PDF file</a></h3>
            </header>
        </>

    );
}
