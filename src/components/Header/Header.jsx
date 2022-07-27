import css from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <div className={css.containerl}>
        <div className={css.left}>
          
            <img src="https://smmdesant.ru/img/partner31.png" alt="iamege1" />
          
          <div>
            <h2>Доставка пиццы Бишкек</h2>
            <p>37 мин 4.61	&#11088;</p>
          </div>
          <div>
            <h2>0(551)-550-550</h2>
            <p>Звонок по телефону</p>
          </div>
        </div>
        <div className={css.right}>
          <div>
            <h4>Додкоины</h4>
          </div>
          <Link className="btn" to="/">войти</Link>
        </div>
      </div>
    </div>
  );
}
