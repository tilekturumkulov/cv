const Form = () => {
    return (
        <div className="form" id="form">
            <div className="container">
                <h2 className="form__title">Оставьте отзыв</h2>
                <form action="https://formspree.io/f/xlekvlav"
  method="POST" className="form__content">
                    <input type="text" name="name" id="" className="form__content-inp" required placeholder="Имя"/>
                    <input type="text" name="surname" id="" className="form__content-inp" placeholder="Фамилие"/>
                    <input type="email" name="email" id="" className="form__content-inp" required placeholder="Email"/>
                    <input type="number" name="number" id="" className="form__content-inp" required placeholder="Номе телефона"/>
                    <input type="text" name="massage" id="" className="form__content-inp_massage" placeholder="Сообщение"/>
                    <button className="form__content-btn" type="submit">Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Form