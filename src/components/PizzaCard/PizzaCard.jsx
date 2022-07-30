import css from "./PizzaCard.module.css"


export default function PizzaCard({img,name,description,price}){
    return(
        <div className={css.PizzaCard}>
            <div className={css.image}>
                <img src={img || "https://cdn.dodostatic.net/site-static/dist/611f501db3a3369fac31.svg"} alt="PizzaCard" />
            </div>
            <div className={css.name}>
                <p id={css.p}>{name}</p>
            </div>
            <div className={css.description}>
                <p>{description}</p>
            </div>
            <div className={css.price}>
                <p>от {price} сом</p>
                <button className="btn2">выбрать</button>
            </div>
        </div>
    )
}