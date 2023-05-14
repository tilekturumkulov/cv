import cv from '../CV.pdf'

const Header = () => {
    return (
        <div className="greeting">
            <div className="container">
                <div className="greeting__content">
                    <div className="greeting__info">
                        <h2 className="greeting__info-title">Тилек Турумкулов</h2>
                        <p className="greeting__info-subtitle">Frontend Developer</p>
                        <div className="greeting__info-btns">
                            <a href={cv}>
                                <button className="greeting__info-btns_download">Скачать</button>
                            </a>
                            <a href="https://github.com/tilekturumkulov">
                                <button className="greeting__info-btns_git">GitHub</button>
                            </a>
                        </div>
                    </div>
                    <div className="greeting__img">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header