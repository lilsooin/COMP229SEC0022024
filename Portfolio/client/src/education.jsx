import pet1 from './assets/pet1.jpg'
import pet2 from './assets/pet2.jpg'
import pet3 from './assets/pet3.jpg'
import pet4 from './assets/pet4.jpg'


/**
 * Filename: education.jsx
 * Student’s Name: Suin Lee 
 * StudentID: 301369995
 * Date: 2024-09-24
 */
export default function Education() {
    return (
        <>
            <header>
                <p>
                    <b>2+ years of experience</b> as a software engineer,
                    with Java and Kotlin as their main languages.
                    I have significant experience in Android app development,
                    as well as working on backend projects.

                    <p><h3>examples of project</h3></p>
                    <img src={pet1} width={200}></img>
                    <img src={pet2} width={200}></img>
                    <img src={pet3} width={200}></img>
                    <img src={pet4} width={200}></img>
                    <hr />
                </p>
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
            </section>
        </>
    );
}
