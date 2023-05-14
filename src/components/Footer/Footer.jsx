// import Top from './images/top.png'
import Telegram from '../About/images/telegram.png'
import Github from '../About/images/github.png'
import Gmail from '../About/images/gmail.png'
import Linkedin from '../About/images/linkedin.png'
import Phone from './images/phone.png'

const Footer = () => {
    return (
        <footer className="footer" id='footer'>
            <div className="container">
                <div className="footer__content">
                    <h2 className="footer__logo">Turumkulov</h2>
                    {/* <a href="#header" onClick={
                        scroll()
                    } className="footer__top">
                        <img src={Top} className="footer__top-item"/>
                    </a> */}
                    <div className="footer__links">
                        <a href="https://t.me/tilek2109" className="footer__links-item">
                            <img src={Telegram} alt="" className="footer__links-item_icon" />
                        </a>
                        <a href="https://github.com/tilekturumkulov" className="footer__links-item">
                            <img src={Github} alt="" className="footer__links-item_icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/tilek-turumkulov-115abb212/" className="footer__links-item">
                            <img src={Linkedin} alt="" className="footer__links-item_icon" />
                        </a>
                        <a href="mailto:turumkuloff@gmail.com" className="footer__links-item">
                            <img src={Gmail} alt="" className="footer__links-item_icon" />
                        </a>
                        <a href="tel:+996501238097" className="footer__links-item">
                            <img src={Phone} alt="" className="footer__links-item_icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer