const Skills = () => {
    return (
        <div className="skills">
            <div className="container">
                <h2 className="skills__title">Мои навыки</h2>
                <div className="skills__content">
                    <div className="skills__content-item">
                        <h2 className="skills__content-item_procent">90%</h2>
                        <p className="skills__content-item_name">HTML</p>
                    </div>
                    <div className="skills__content-item">
                        <h2 className="skills__content-item_procent">80%</h2>
                        <p className="skills__content-item_name">CSS</p>
                    </div>
                    <div className="skills__content-item">
                        <h2 className="skills__content-item_procent">50%</h2>
                        <p className="skills__content-item_name">Java Script</p>
                    </div>
                    <div className="skills__content-item">
                        <h2 className="skills__content-item_procent">30%</h2>
                        <p className="skills__content-item_name">React</p>
                    </div>
                    {/* <div className="skills__content-item">
                        <h2 className="skills__content-item_procent">0%</h2>
                        <p className="skills__content-item_name">Node js</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Skills