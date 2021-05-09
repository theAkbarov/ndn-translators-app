
import HeroBgk from "../components/HeroBgk/HeroBgk"
import ServicesCards from "../containers/ServicesCards/ServicesCards"


import SvImg  from '../assets/images/sv-img.png'
import ServicesLeng from "../containers/ServicesLeng/ServicesLeng"
import { useTranslation } from "react-i18next"
const Services = () => {
	const { t } = useTranslation();

	return (
    <div className="services">
      <HeroBgk
        home={t("services.breadcrum.1")}
        title={t("services.breadcrum.2")}
      />

      <ServicesCards />

      <section className="services-section">
        <div className="services-section-inner container">
          <div className="services-section-inner-left">
            <img
              src={SvImg}
              alt=""
              className="services-section-inner-left__img"
            />
          </div>

          <div className="services-section-inner-right">
            <span className="services-section-inner-right__suptitle">
              {t("services.banner.upper_title")}
            </span>
            <h4 className="services-section-inner-right__title">
              {t("services.banner.title")}
            </h4>
            <p className="services-section-inner-right__text">
              {t("services.banner.title")}
            </p>

            <div className="services-section-inner-right-check">
              <div className="services-section-inner-right-check-item">
                <div className="services-section-inner-right-check-item__info">
                  {t("services.banner.1")}
                </div>
              </div>

              <div className="services-section-inner-right-check-item">
                <div className="services-section-inner-right-check-item__info">
                  {t("services.banner.2")}
                </div>
              </div>

              <div className="services-section-inner-right-check-item">
                <div className="services-section-inner-right-check-item__info">
                  {t("services.banner.3")}
                </div>
              </div>

              <div className="services-section-inner-right-check-item">
                <div className="services-section-inner-right-check-item__info">
                  {t("services.banner.4")}
                </div>
              </div>

              <div className="services-section-inner-right-check-item">
                <div className="services-section-inner-right-check-item__info">
                  {t("services.banner.5")}
                </div>
              </div>

              <div className="services-section-inner-right-check-item">
                <div className="services-section-inner-right-check-item__info">
                  {t("services.banner.6")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesLeng />
    </div>
  );
}



export default Services;