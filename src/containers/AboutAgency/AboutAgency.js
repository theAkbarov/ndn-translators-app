import { Link } from 'react-router-dom';

import './AboutAgency.scss';


import aboutCardImg from '../../assets/images/images1.png'
import { useTranslation } from "react-i18next";

const AboutAgency = () => {
  const { t } = useTranslation();

	return (
    <section className="about-campany">
      <div className="about-campany-inner container">
        <div className="about-campany-inner-left">
          <img
            src={aboutCardImg}
            alt=""
            className="about-campany-inner-left__img"
          />
        </div>
        <div className="about-campany-inner-right">
          <p className="about-campany-inner-right__suptitle">
            {t("agency.upper_title")}
          </p>
          <h1 className="about-campany-inner-right__title">
            {t("agency.title")}
          </h1>
          <p className="about-campany-inner-right__subtitle">
            {t("agency.text")}
          </p>

          <div className="about-campany-inner-right-cards">
            <div className="about-campany-inner-right-cards-item">
              <Link
                to={`/services`}
                className="about-campany-inner-right-cards-item__title"
              >
                {t("agency.1.title")}
              </Link>
              <p className="about-campany-inner-right-cards-item__subtitle">
                {t("agency.1.text")}
              </p>
            </div>

            <div className="about-campany-inner-right-cards-item">
              <Link
                to={`/services`}
                className="about-campany-inner-right-cards-item__title"
              >
                {t("agency.2.title")}
              </Link>
              <p className="about-campany-inner-right-cards-item__subtitle">
                {t("agency.2.text")}
              </p>
            </div>

            <div className="about-campany-inner-right-cards-item">
              <Link
                to={`/services`}
                className="about-campany-inner-right-cards-item__title"
              >
                {t("agency.3.title")}
              </Link>
              <p className="about-campany-inner-right-cards-item__subtitle">
                {t("agency.3.text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutAgency;