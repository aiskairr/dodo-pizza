import css from "./Navbar.module.css"
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="container">
            <div className={css.container}>
                <div className={css.left}>
                    <Link to=''>Пицца</Link>
                    <Link to=''>Комбо </Link>
                    <Link to=''>Закуски</Link>
                    <Link to=''>Десерты</Link>
                    <Link to=''>Напитки</Link>
                    <Link to=''>Другие</Link>
                    <Link to=''>товары</Link>
                    <Link to=''>Акции</Link>
                    <Link to=''>Контакты</Link>
                    <Link to=''>О нас</Link>
                    <Link to=''>Прямой эфир</Link>
                </div>
                <div className={css.right}>
                    <button className="btn">Корзина</button>
                </div>
            </div>
        </div>
    )
}
