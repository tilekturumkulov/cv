const Header = ({scroll}) => {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="header__content">
                    <h1 className="header__logo">Turumkulov</h1>
                    <div className="header__links">
                        <a href="#about" onClick={scroll()} className="header__links-item">О себе</a>
                        <a href="#project" onClick={scroll()} className="header__links-item">Проекты</a>
                        <a href="#footer" onClick={scroll()} className="header__links-item">Контакты</a>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header