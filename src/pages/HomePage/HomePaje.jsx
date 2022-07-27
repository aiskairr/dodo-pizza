import Slider from "react-slick";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NabBar";
import NewSlider from "../../components/newSlider/newSlider";
import Pizza from "../../components/pizza/pizza";
import { SlideList } from "../../components/SliderCard/SliderList";
import SliderPage2 from '../../components/SliderPage/SliderPage'
import css from './homepage.module.css'

function SampleNextArrow(props) {
    const { className,  onClick } = props;
    return (
        <span className={className} onClick={onClick}>
            <img width={"40px"} src="drop-down-arrow-orange.svg" alt="imgicoins" />
        </span>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style , onClick } = props;
    return (
        <span className={className}  onClick={onClick}>
            <img id={css.img}  style={{...style, width: '40px', }}  src="drop-down-arrow-orange.svg" alt="imgicoins" />
        </span>
    );
  }

export default function HomePage() {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow:  <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <Header />
            <NavBar />
            
            <div className="container">
                <Slider {...settings}>
                    {
                        SlideList.map((items) => <SliderPage2 key={items.id} {...items} />)
                    }
                </Slider>
            </div>
            <NewSlider />
            <Pizza />
        </>
    )
}