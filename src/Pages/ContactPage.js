import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import LinkedIn from '../img/linkedin.png'

export default function ContactPage() {
    return(
        <section className="page">
            <div className='full-contact-container'>
                <h1 id='title-contact'>Let's talk !</h1>
                <div class='text-contact-container'>
                    <p className='text-contact'>I'm available for an internship with you!</p>
                    <p className='text-contact'>Drop me a message if you think we should work together.</p>
                </div>
                <div className='links-contact-container'>
                    <a className='links-contact' href="tel:+45 5069 0166">+45 5069 0166</a>
                </div>
                <div id='last-contact'>
                    <a className='links-contact' href='mailto: erwan.mocquet52@hotmail.fr'>erwan.mocquet52@hotmail.fr</a>
                </div>
            </div>
            <div className='icons-wrapper' id='icons-contact'>
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
    )
}