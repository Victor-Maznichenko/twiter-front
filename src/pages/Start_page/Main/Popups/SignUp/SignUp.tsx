import React from 'react';

interface ModalProps {
    title: string;
    children: React.ReactNode;
}

const SignUp = () => {


    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false);
    };

    return (
        <form action="#" className="popup">
                <div className="popup__inner">
                    <button className="popup-close" onClick={handleClickClose}>
                        <img src="./images/ico/close-btn.svg" alt=""/>
                    </button>
                    <div className="popup__img">
                        <svg viewBox="0 0 24 24" aria-label="Твиттер">
                            <g>
                                <path
                                    d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                            </g>
                        </svg>
                    </div>
                    <h3 className="popup__title">Создайте учетную запись</h3>
                    <div className="popup__inputs">
                        <label className="popup__label">
                            <span className="popup__label-placeholder">Имя</span>
                            <input type="name" className="popup__input"/>
                        </label>
                        <label className="popup__label">
                            <span className="popup__label-placeholder">Адрес электронной почты</span>
                            <input type="email" className="popup__input"/>
                        </label>
                        <label className="popup__label">
                            <span className="popup__label-placeholder">Пароль</span>
                            <input type="password" className="popup__input"/>
                        </label>
                    </div>
                    <div className="popup__date">
                        <h5 className="popup__date-name">Дата рождения</h5>
                        <p className="popup__date-description">Эта информация не будет общедоступной. Подтвердите свой
                            возраст, даже если эта учетная запись предназначена для компании, домашнего животного и т.
                            д.</p>
                        <div className="popup__selects">
                            <div className="popup__select-wrapper mounth">
                                <span>Месяц</span>
                                <select className="popup__select">
                                    <option value="" className="popup__select-item" disabled selected></option>
                                    <option value="1" className="popup__select-item">января</option>
                                    <option value="2" className="popup__select-item">февраля</option>
                                    <option value="3" className="popup__select-item">марта</option>
                                    <option value="4" className="popup__select-item">апреля</option>
                                    <option value="5" className="popup__select-item">мая</option>
                                    <option value="6" className="popup__select-item">июня</option>
                                    <option value="7" className="popup__select-item">июля</option>
                                    <option value="8" className="popup__select-item">августа</option>
                                    <option value="9" className="popup__select-item">сентября</option>
                                    <option value="10" className="popup__select-item">октября</option>
                                    <option value="11" className="popup__select-item">ноября</option>
                                    <option value="12" className="popup__select-item">декабря</option>
                                </select>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="popup__select-arrow">
                                    <g>
                                        <path
                                            d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="popup__select-wrapper year">
                                <span>Год</span>
                                <select className="popup__select">
                                    <option value="" className="popup__select-item" disabled selected></option>
                                    <option value="2021" className="popup__select-item">2021</option>
                                    <option value="2005" className="popup__select-item">2005</option>
                                </select>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="popup__select-arrow">
                                    <g>
                                        <path
                                            d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="popup__select-wrapper day">
                                <span>День</span>
                                <select className="popup__select">
                                    <option value="" className="popup__select-item" disabled selected></option>
                                    <option value="1" className="popup__select-item">1</option>
                                    <option value="2" className="popup__select-item">2</option>
                                    <option value="3" className="popup__select-item">3</option>
                                    <option value="4" className="popup__select-item">4</option>
                                    <option value="5" className="popup__select-item">5</option>
                                    <option value="6" className="popup__select-item">6</option>
                                    <option value="7" className="popup__select-item">7</option>
                                    <option value="8" className="popup__select-item">8</option>
                                    <option value="9" className="popup__select-item">9</option>
                                    <option value="10" className="popup__select-item">10</option>
                                    <option value="11" className="popup__select-item">11</option>
                                    <option value="12" className="popup__select-item">12</option>
                                    <option value="13" className="popup__select-item">13</option>
                                    <option value="14" className="popup__select-item">14</option>
                                    <option value="15" className="popup__select-item">15</option>
                                    <option value="16" className="popup__select-item">16</option>
                                    <option value="17" className="popup__select-item">17</option>
                                    <option value="18" className="popup__select-item">18</option>
                                    <option value="19" className="popup__select-item">19</option>
                                    <option value="20" className="popup__select-item">20</option>
                                    <option value="21" className="popup__select-item">21</option>
                                    <option value="22" className="popup__select-item">22</option>
                                    <option value="23" className="popup__select-item">23</option>
                                    <option value="24" className="popup__select-item">24</option>
                                    <option value="25" className="popup__select-item">25</option>
                                    <option value="26" className="popup__select-item">26</option>
                                    <option value="27" className="popup__select-item">27</option>
                                    <option value="28" className="popup__select-item">28</option>
                                    <option value="29" className="popup__select-item">29</option>
                                    <option value="30" className="popup__select-item">30</option>
                                    <option value="31" className="popup__select-item">31</option>
                                </select>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="popup__select-arrow">
                                    <g>
                                        <path
                                            d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <input className="popup__btn blue-btn" type="submit" value="Регистрация"/>
                </div>
            </form>
    );
}

export default SignUp;
