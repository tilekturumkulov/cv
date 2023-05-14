import Telegram from './images/telegram.png'
import Github from './images/github.png'
import Gmail from './images/gmail.png'
import Linkedin from './images/linkedin.png'

const About = () => {
    return (
        <div className="about" id='about'>
            <div className="container">
                <div className="about__content">
                    <h2 className="about__title">О себе</h2>
                    <p className="about__text">Привет, меня зовут Тилек Турумкулов мне 22 года и я начинающий fullstack разработчик! Начинал я свой путь в сфере IT в 2020 году, тогда я изучил Css, Html и немного Js, после чего я работал верстальщиком в компании Tengri Home в городе Алматы. Проработав там 11 месяцев я приехал обратно продолжить свое обучение, но по некоторым причинам я отложил свое обучение. Я продолжил изучать frontend на курсах It-Run в январе этого года и сейчас заканчиваю изучение react и буду изучать node.js. На данный момент я пишу на JavaScript, Css, Scss, Html умею работать с различными библиотеками для стилей, React, владею Git и Ajax</p>
                    <div className="about__messengers">
                        <a href='https://t.me/tilek2109' className="about__messengers-item">
                            <img src={Telegram} alt="" className="about__messengers-item_icon" />
                            <a href="" className="about__messengers-item_link">@tilek2109</a>
                            <h3 className="about__messengers-item_title">Telegram</h3>
                        </a>
                        <a href='mailto:turumkuloff@gmail.com' className="about__messengers-item">
                            <img src={Gmail} alt="" className="about__messengers-item_icon" />
                            <a href="" className="about__messengers-item_link">turumkuloff@gmail.com</a>
                            <h3 className="about__messengers-item_title">Gmail</h3>
                        </a>
                        <a href='https://www.linkedin.com/in/tilek-turumkulov-115abb212/' className="about__messengers-item">
                            <img src={Linkedin} alt="" className="about__messengers-item_icon" />
                            <a href="" className="about__messengers-item_link">Tilek Turumkulov</a>
                            <h3 className="about__messengers-item_title">Linkedin</h3>
                        </a>
                        <a href='https://github.com/tilekturumkulov' className="about__messengers-item">
                            <img src={Github} alt="" className="about__messengers-item_icon" />
                            <a href="" className="about__messengers-item_link">tilekturumkulov</a>
                            <h3 className="about__messengers-item_title">GitHub</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About