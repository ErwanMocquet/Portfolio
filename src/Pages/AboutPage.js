import Photo from '../img/picture-Jol-and-me.jpg'
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import LinkedIn from '../img/linkedin.png'
export default function AboutPage() {

    return(
        <section>
            <section id='first-part-about'>
            <h1 className="titles">About me</h1>
            <p className="body-text text-grid">
                Hey!<br></br> My name is Erwan Mocquet, I am from France and I am a young lad of 23. I am living in Rodskov with my partner and our dog, Tyr. I have been in Denmark for almost 3 years now and I am a student at Business Academy Aarhus who aspire to become a Frontend Developer.
            </p>
            <div className='photo-container'>
                <img src={Photo} alt="me and Jol" className='photo-jol'></img>
            </div>
            <p className='body-text text-grid'>
            I love programming new stuff, discovering new technics and technologies and trying to overcome coding issues! I have been said to be quite good at teamworking, discussing design patterns and trying to find the best fit for my clients as well. I can also work under pressure and respect deadlines.
            </p>
            <div className='icons-wrapper'>
                <a href='https://www.facebook.com/erwan.moquet/'>
                    <img className='icons' src={Facebook} alt='facebook icon'></img>
                </a>
                <a href='https://www.instagram.com/mocqueterwan/'>
                    <img className='icons' src={Instagram} alt='instagram icon'></img>
                </a>
                <a href='https://www.linkedin.com/in/erwan-mocquet-02baa1192/'>
                    <img className='icons' src={LinkedIn} alt='linkedin icon'></img>
                </a>
            </div>
            </section>
            <section id='second-part-about'>
                <h1 className='titles'>Some say about me:</h1>
                <div className='wrapper-testi'>
                    <div className='body-text'>
                        <p>I was so lucky to be placed on the same table as Erwan during our first week of school. We instantly clicked and ended up working on several projects together. I found him to be incredibly hardworking, responsible and organised and always up for a laugh! He would definitely be an asset to any new organisation or workplace.</p>
                        <h2 className='name-text'>- Marissa, classmate</h2>
                    </div>
                    <div className='body-text'>
                        <p>Erwan is positive and open-minded individual, cooperative and willing to help whenever it's needed! During our projects he was always open to new ideas and eager to work. With his technical mind, he was always curious how to solve different issues. I'm sure that Erwan can greatly contribute to any team and strenghen it with his skills and attitude. I highly recommend him!</p>
                        <h2 className='name-text'>- Igor, classmate</h2>
                    </div>
                    <div className='body-text'>
                        <p>I had the pleasure of working in a team with Erwan multiple times. He is helpful, time efficient, and prioritizes his tasks. I can confidently say I would work with him again and know that the work would be thorough and efficient.</p>
                        <h2 className='name-text'>- Kristy, classmate</h2>
                    </div>
                    <div className='body-text'>
                        <p>Erwan is a team player who adds humor and friendliness to any project process. He is smart, dedicated and hard-working and determined to find a good solution. Erwan will prove a welcome addition to any workplace, because he will add a good working atmosphere, hard work and imaginative suggestions to anything he does.</p>
                        <h2 className='name-text' id='margin-end'>- Line, Senior Lecturer</h2>
                    </div>
                </div>
            </section>
        </section>
    )
}