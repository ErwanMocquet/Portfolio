import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export default function HomePage() {
    return(
        <section className="page" id='home-page'>
            <div className='body-home'>
                <h1 id='hi-home'>HI !</h1>
                <div className='typewriter'>
                    <Typewriter
                        options={{
                        strings: ['MY NAME IS ERWAN MOCQUET.', 'I LOVE CODING.', 'I LIKE TEAMWORKING.', 'I LIKE DESIGN.'],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        cursorClassName: "cursorColor",
                        }} />
                </div>
            </div>
            <div id='button-home-wrap'>
                <Link to="/about">
                    <button type='button' className='button' id='button-home'>Discover me {'>>'}</button>
                </Link>
            </div>
        </section>
    )
}