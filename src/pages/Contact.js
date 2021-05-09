import { Link } from "react-router-dom";
import HeroBgk from "../components/HeroBgk/HeroBgk"


import callImg from '../assets/images/call-img.webp'
import { useTranslation } from "react-i18next";
const Contacts = () => {
const [ y ] = useTranslation()
	return (
    <div className="contacts">
      <div className="contacts-top">
        <HeroBgk home={y("contacts.home")} title={y("contacts.title")} />
      </div>

      <div className="contacts-inner container">
        <div className="contacts-inner-left">
          <img src={callImg} alt="" className="contacts-inner-left__img" />
        </div>

        <div className="contacts-inner-right">
          <span className="contacts-inner-right__suptitle">
            {y("contacts.card.title")}
          </span>
          <h1 className="contacts-inner-right__title">
            {y("contacts.card.heading")}
          </h1>
          <p className="contacts-inner-right__text">
            {y("contacts.card.text")}
          </p>

          <div className="contacts-inner-right-card">
            <h3 className="contacts-inner-right-card__name">
              {y("contacts.card.address")}
            </h3>
            <span className="contacts-inner-right-card__link">
              8500, Lorem Street, Chicago, IL, 55030
            </span>
          </div>
          <div className="contacts-inner-right-card">
            <h3 className="contacts-inner-right-card__name">
              {y("contacts.card.mail")}
            </h3>
            <a
              href="mailto:translatorsuzbekistan@gmail.com"
              className="contacts-inner-right-card__link"
            >
              translatorsuzbekistan@gmail.com
            </a>
          </div>
          <div className="contacts-inner-right-card">
            <h3 className="contacts-inner-right-card__name">
              {y("contacts.card.phone")}
            </h3>
            <a
              href="tel:+998935805259"
              className="contacts-inner-right-card__link"
            >
              +998935805259
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Contacts;




