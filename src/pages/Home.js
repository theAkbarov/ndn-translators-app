import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


import Loader from "../components/Loader/Loader"
import './pages.scss'




import AboutAgency from '../containers/AboutAgency/AboutAgency'
import ServicesCards from '../containers/ServicesCards/ServicesCards'
import TeamCard from '../containers/TeamCard/TeamCard'
import WorkPraces from '../containers/WorkPraces/WorkPraces'
import ServicesLeng from '../containers/ServicesLeng/ServicesLeng'


const Home = () => {
  const { t, i18n } = useTranslation();

	// window.addEventListener('onload' , ()=>{
	// 	if(window.onload == true){
	// 		console.log('tugadiiii');
	// 	}else{
	// 		console.log('nimagappppp');
	// 	}
	// })

	// window.addEventListener('load' function() {

	// })


	window.addEventListener('scroll', () => {
		const cardAnimation = document.querySelectorAll('.work-process-inner-card')
		if (window.scrollY > 400) {

			cardAnimation.forEach((element) => {
				element.removeAttribute('data-aos', 'fade-up');

			})
		} else {
			cardAnimation.forEach((element) => {
				element.setAttribute('data-aos', 'fade-up');

			})
		}
	})

	return (
    <main className="home">
      <Loader />
      <div className="home-inner">
        <div className="hero-section">
          <div className="hero-section-bgk"></div>
          <div className="hero-section-inner container">
            <h3 className="hero-section-inner__subTitle">
              {t("hero.uptitle")}
            </h3>

            <h1 className="hero-section-inner__title">{t("hero.title")}</h1>

            <p className="hero-section-inner__text">{t("hero.subtitle")}</p>

            <div className="hero-section-inner-buttons">
              <Link to="/contacts" className="hero-section-inner-buttons__link">
                {t("hero.contact_btn")}
              </Link>
              <Link to="/about-us" className="hero-section-inner-buttons__link">
                {t("hero.learn_btn")}
              </Link>
            </div>
          </div>
        </div>

        {/* how it work  esction-firs  cards        */}

        <WorkPraces />

        <div className="home-big-section-js">
          <div className="pt">
            <AboutAgency />
          </div>

          <ServicesLeng />

          <ServicesCards
            LinkText={"Read More"}
            iconArrow={
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M0.803597 5.30357L11.4107 5.30357L9.08038 7.63393C8.75895 7.95536 8.75895 8.4375 9.08038 8.75893C9.40181 9.08036 9.88395 9.08036 10.2054 8.75893L13.9018 5.0625C14.2232 4.74107 14.2232 4.25893 13.9018 3.9375L10.2054 0.241071C9.88396 -0.0803579 9.40181 -0.080358 9.08038 0.241071C8.75896 0.5625 8.75896 1.04464 9.08038 1.36607L11.4107 3.69643L0.803597 3.69643C0.401811 3.69643 2.52311e-05 4.01786 2.51889e-05 4.5C2.51468e-05 4.98214 0.401811 5.30357 0.803597 5.30357Z"
                    fill="#4089ED"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="14.1429"
                      height="9"
                      fill="white"
                      transform="translate(14.1429 9) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
          />
        </div>
        <TeamCard />
      </div>
    </main>
  );
}

export default Home;