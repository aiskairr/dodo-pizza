import css from './BasketModel.module.css'

export default function BasketModel({active, setActive}){
    return(
        <div className={active ?   css.active  : css.modal} onClick={()=> setActive(true)}>
            <div className={css.modal__content} onClick={e=>e.stopPropagation()}>
                <div className={active ? css.active : css.image}>
                    <img src="https://cdn.dodostatic.net/site-static/dist/121df529925b0f43cc73.svg" alt="dogPizza" />
                </div>
            </div>
        </div>
    )
}