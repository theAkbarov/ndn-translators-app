import { Link } from 'react-router-dom';

import './ServicesCards.scss';


import cardIcon1 from '../../assets/images/icon/icon-bottom-card1.png'
import cardIcon2 from '../../assets/images/icon/icon-bottom-card2.png'
import cardIcon3 from '../../assets/images/icon/icon-bottom-card3.png'
import cardIcon4 from '../../assets/images/icon/icon-bottom-card4.png'
import cardIcon5 from '../../assets/images/icon/icon-bottom-card5.png'
import cardIcon6 from '../../assets/images/icon/icon-bottom-card6.png'
import { useTranslation } from 'react-i18next';



const ServicesCards = ({ LinkText, iconArrow }) => {
	const { t } = useTranslation();

	return (
    <section className="services-card container">
      <p className="services-card__suptitle"></p>
      <h1 className="services-card__title">{t("services.cards.title")} </h1>
      <p className="services-card__subtitle">{t("services.cards.subtitle")}</p>

      <div className="services-card-wrapper">
        <div className="services-card-wrapper-item">
          <div className="services-card-wrapper-item-icon">
            <img src={cardIcon1} alt="img" width="60" height="60" />
          </div>

          <h4 className="services-card-wrapper-item__title">
            {t("services.cards.1.title")}
          </h4>
          <p className="services-card-wrapper-item__subtitle">
            {t("services.cards.1.text")}
          </p>
          <Link to={`/services`} className="services-card-wrapper-item__link">
            {LinkText}
            <span className="services-card-wrapper-item__link-icon">
              {iconArrow}
            </span>
          </Link>
        </div>

        <div className="services-card-wrapper-item">
          <div className="services-card-wrapper-item-icon">
            <img src={cardIcon2} alt="img" width="60" height="60" />
          </div>

          <h4 className="services-card-wrapper-item__title">
            {t("services.cards.2.title")}
          </h4>
          <p className="services-card-wrapper-item__subtitle">
            {t("services.cards.2.text")}
          </p>
          <Link to={`/services`} className="services-card-wrapper-item__link">
            {LinkText}
            <span className="services-card-wrapper-item__link-icon">
              {iconArrow}
            </span>
          </Link>
        </div>

        <div className="services-card-wrapper-item">
          <div className="services-card-wrapper-item-icon">
            <img src={cardIcon3} alt="img" width="60" height="60" />
          </div>

          <h4 className="services-card-wrapper-item__title">
            {t("services.cards.3.title")}
          </h4>
          <p className="services-card-wrapper-item__subtitle">
            {t("services.cards.3.text")}
          </p>
          <Link to={`/services`} className="services-card-wrapper-item__link">
            {LinkText}
            <span className="services-card-wrapper-item__link-icon">
              {iconArrow}
            </span>
          </Link>
        </div>

        <div className="services-card-wrapper-item">
          <div className="services-card-wrapper-item-icon">
            <img src={cardIcon4} alt="img" width="60" height="60" />
          </div>

          <h4 className="services-card-wrapper-item__title">
            {t("services.cards.4.title")}
          </h4>
          <p className="services-card-wrapper-item__subtitle">
            {t("services.cards.4.text")}
          </p>
          <Link to={`/services`} className="services-card-wrapper-item__link">
            {LinkText}
            <span className="services-card-wrapper-item__link-icon">
              {iconArrow}
            </span>
          </Link>
        </div>

        <div className="services-card-wrapper-item">
          <div className="services-card-wrapper-item-icon">
            <img src={cardIcon5} alt="img" width="60" height="60" />
          </div>

          <h4 className="services-card-wrapper-item__title">
            {t("services.cards.5.title")}
          </h4>
          <p className="services-card-wrapper-item__subtitle">
            {t("services.cards.5.text")}
          </p>
          <Link to={`/services`} className="services-card-wrapper-item__link">
            {LinkText}
            <span className="services-card-wrapper-item__link-icon">
              {iconArrow}
            </span>
          </Link>
        </div>

        <div className="services-card-wrapper-item">
          <div className="services-card-wrapper-item-icon">
            <img src={cardIcon6} alt="img" width="60" height="60" />
          </div>

          <h4 className="services-card-wrapper-item__title">
            {t("services.cards.5.title")}
          </h4>
          <p className="services-card-wrapper-item__subtitle">
            {t("services.cards.5.text")}
          </p>
          <Link to={`/services`} className="services-card-wrapper-item__link">
            {LinkText}
            <span className="services-card-wrapper-item__link-icon">
              {iconArrow}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesCards