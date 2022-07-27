import css from './HomePage.module.css'

export default function SliderPage2({img}){ 
  
    return (
        <div className={css.slidercard}>
            <img src={img} alt="imagess" />
        </div>
    )
}