import { useEffect, useState } from "react";
import Slider from "react-slick";
import BeverasherCard from "../../components/beveragesCard/BeverahesCard";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NabBar";
import NewSlider from "../../components/newSlider/newSlider";
import Pizza from "../../components/pizza/pizza";
import { SlideList } from "../../components/SliderCard/SliderList";
import SliderPage2 from '../../components/SliderPage/SliderPage'
import css from './homepage.module.css'


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <span className={className} onClick={onClick}>
            <img width={"40px"} src="drop-down-arrow-orange.svg" alt="imgicoins" />
        </span>
    )
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <span className={className} onClick={onClick}>
            <img id={css.img} style={{ ...style, width: '40px', }} src="drop-down-arrow-orange.svg" alt="imgicoins" />
        </span>
    );
}

export default function HomePage() {
    const [pizzas , setPizzas] = useState([])
    const [drinks, setDrinks] = useState([])
    const [isloading, setLoading] = useState(true)
    
    useEffect(()=>{
        
        Promise.all([
            fetch("https://61dd7484f60e8f0017668817.mockapi.io/pizza-card"),
            fetch("https://62d4fcd85112e98e485608f4.mockapi.io/pizza"),
        ]).then((res)=>{
            Promise.all(res.map((item)=>item.json()))
            .then((data)=>{
                console.log(data);
                setLoading(false)
                setPizzas(data[0])
                setDrinks(data[1])
            })
        })
    },[])

    if(isloading){
        return <div className={css.loading}><img src="https://www.yrendague.com.py/assets/img/loading.gif" alt="loading" /></div>
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <SampleNextArrow />,
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
            <Pizza pizzas={pizzas} />
            <div className="container">
                <h1>Напитки</h1>
                <div className={css.Drinks}>
                {
                    drinks.map((item)=><BeverasherCard key={item.id} {...item}/>)
                }
                </div>
            </div>
        </>
    )
} 