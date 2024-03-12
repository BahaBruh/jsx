import React from 'react'

const work = () => {
    const[notes, setNotes] = React.useState(['Чиланзар', 'Чиланзар', 'Чиланзар','Чиланзар','Чиланзар','Чиланзар','Чиланзар','Чиланзар','Чиланзар'])
    return (
    <div className="wrapper">
        <div className="work">
        <div className="container">
            <h2 className="work__name">Мои работы</h2>


            <ul className="list">
                {notes.map((note, i) => (

                <li key={i} className='work__list'>
                    <img src="/src/componets/img/Rectangle15" alt="" />
                    <h2>{note}</h2>
                    <p>Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году </p>
                    <a href="#" className='li__button'>Посмотреть</a>
                </li>

                ))}
            </ul>
        </div>
        </div>
    </div>
    )
}

export default work