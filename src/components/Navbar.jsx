import React from 'react'

const Navbar = () => {
    return (
    <div className="wrapper">
         <div className="nav">
        <div className="container">
            <h1 >
                <a href="#" className="nav__logo">PROWEB</a>
            </h1>
            
                <ul className="list">
                    <li ><a href="#" className='link'>Обо мне </a></li>
                    <li ><a href="#" className='link'>Мои работы</a></li>
                    <li ><a href="#" className='link'>Контакты</a></li>
                </ul>
            
        </div>
    </div>
    <div className="call">
        <div className="container">
        <h2 className="call__name">
        Добро пожаловать на мой сайт
        </h2>
        <a href="#" className="call__button">
        Позвонить
        </a>
        </div>
    </div>
    </div>
    )
    
}

export default Navbar