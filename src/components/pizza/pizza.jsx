import PizzaCard from '../PizzaCard/PizzaCard'
import css from './pizza.module.css'


export default function Pizza({pizzas}) {
    return (
        <div className='container'>
            <div className={css.container}>
                <div className={css.numberstart}>
                    <div className={css.halalPage}>
                        <img src="https://cdn.dodostatic.net/site-static/dist/f30f1ab8cd7a7a54476d.svg" alt="" />
                        <div>
                            <p>Без свинины</p>
                            <p>Мы готовим из цыпленка и говядины</p>
                        </div>
                    </div>
                </div>
                <div className={css.numbercenter}>
                    <h1>Пицца</h1>
                </div>
                <div className={css.Pizza_Page}>
                    {
                        pizzas.map((item)=> <PizzaCard key={item.id} {...item}/>)
                    }
                </div>
            </div>
        </div>
    )
}