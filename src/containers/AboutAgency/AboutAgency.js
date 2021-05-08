import { Link } from 'react-router-dom';

import './AboutAgency.scss';


import aboutCardImg from '../../assets/images/images1.png'

const AboutAgency = () => {
	return (
		<section className="about-campany">

			<div className="about-campany-inner container">
				<div className="about-campany-inner-left">
					<img src={aboutCardImg} alt="" className="about-campany-inner-left__img" />
				</div>
				<div className="about-campany-inner-right">
					<p className="about-campany-inner-right__suptitle">High Professional Translators Agency</p>
					<h1 className="about-campany-inner-right__title">Order Professional Translations & Interpreting in Just a Few Clicks</h1>
					<p className="about-campany-inner-right__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Aut ab voluptatem mollitia quibusdam? Consectetur expedita inventore voluptate velit laudantium mollitia quibusdam? Consectetur</p>



					<div className="about-campany-inner-right-cards">

						<div className="about-campany-inner-right-cards-item">
							<Link to={`/services`} className="about-campany-inner-right-cards-item__title">Fast & Competitive Prices </Link>
							<p  className="about-campany-inner-right-cards-item__subtitle">Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit ipsum dolor sit amet ipsum dolor si</p>
						</div>

						<div className="about-campany-inner-right-cards-item">
							<Link to={`/services`} className="about-campany-inner-right-cards-item__title">Worldwide Translation Service</Link>
							<p  className="about-campany-inner-right-cards-item__subtitle">Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit ipsum dolor sit amet ipsum dolor si</p>
						</div>
						
						<div className="about-campany-inner-right-cards-item">
							<Link to={`/services`} className="about-campany-inner-right-cards-item__title">Dedicated Professional Team</Link>
							<p  className="about-campany-inner-right-cards-item__subtitle">Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit ipsum dolor sit amet ipsum dolor si</p>
						</div>


					</div>



				</div>
			</div>

		</section>
	)
}

export default AboutAgency;