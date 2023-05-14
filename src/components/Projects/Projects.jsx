import as from './images/as.png'
import baiterek from './images/baiterek.png'
import bezshma from './images/bezshuma.png'
import ramnet from './images/ramnet.png'
import santeco from './images/santeco.png'
import savab from './images/savab.png'
import wr from './images/wr.png'
// import Img8 from './images/'
// import Img9 from './images/'



const Project = () => {
    return (
        <div className="project" id='project'>
            <div className="container">
                <h2 className="project__title">Мои проекты</h2>
                <div className="project__row">
                    <a target='_blanck' href='https://as-dental.1kgz.com/' className="project__row-item">
                        <img src={as} alt="" className="project__row-img" />
                        <h3 className="project__row-title">As-Dental</h3>
                        <p className="project__row-desc">Стомотологический центр в г.Алматы</p>
                    </a>
                    <a target='_blanck' href='https://baiterek-stroy.1kgz.com/' className="project__row-item">
                        <img src={baiterek} alt="" className="project__row-img" />
                        <h3 className="project__row-title">Baiterek-Stroy</h3>
                        <p className="project__row-desc">Строительная компания Байтерек</p>
                    </a>
                    <a target='_blanck' href='https://savcom.kz/' className="project__row-item">
                        <img src={savab} alt="" className="project__row-img" />
                        <h3 className="project__row-title">Savab</h3>
                        <p className="project__row-desc">Метталопродукция на заказ в Казахстане</p>
                    </a>
                    <a target='_blanck' href='https://bezshuma.kz/' className="project__row-item">
                        <img src={bezshma} alt="" className="project__row-img" />
                        <h3 className="project__row-title">Bezshuma</h3>
                        <p className="project__row-desc">Шумаизоляция автомобилей</p>
                    </a>
                    <a target='_blanck' href='https://ramnet.kz/' className="project__row-item">
                        <img src={ramnet} alt="" className="project__row-img" />
                        <h3 className="project__row-title">Ramnet</h3>
                        <p className="project__row-desc">Производство светопрозрачных конструкция по Казахстану</p>
                    </a>
                    <a target='_blanck' href='https://santeco-room.kz/' className="project__row-item">
                        <img src={santeco} alt="" className="project__row-img" />
                        <h3 className="project__row-title">Santeco</h3>
                        <p className="project__row-desc">Продажа душевых кабинок в г. Шымкент</p>
                    </a>
                    <a target='_blanck' href='https://vrprogress.kz/' className="project__row-item">
                        <img src={wr} alt="" className="project__row-img" />
                        <h3 className="project__row-title">VR Progress</h3>
                        <p className="project__row-desc">Аренда Vr очков в г. Алматы</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project