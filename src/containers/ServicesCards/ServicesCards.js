import { Link } from 'react-router-dom';

import './ServicesCards.scss';


import cardIcon1 from '../../assets/images/icon/icon-bottom-card1.png'
import cardIcon2 from '../../assets/images/icon/icon-bottom-card2.png'
import cardIcon3 from '../../assets/images/icon/icon-bottom-card3.png'
import cardIcon4 from '../../assets/images/icon/icon-bottom-card4.png'
import cardIcon5 from '../../assets/images/icon/icon-bottom-card5.png'
import cardIcon6 from '../../assets/images/icon/icon-bottom-card6.png'



const ServicesCards = ({ LinkText, iconArrow }) => {
	return (

		<section className="services-card container">
			<p className="services-card__suptitle">OUR SERVICES</p>
			<h1 className="services-card__title">Our Core Services</h1>
			<p className="services-card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>


			<div className="services-card-wrapper">
				<div className="services-card-wrapper-item">
					<div className="services-card-wrapper-item-icon">
						<img src={cardIcon1} alt="img" width="60" height="60" />
					</div>

					<h4 className="services-card-wrapper-item__title">Documents Translation</h4>
					<p className="services-card-wrapper-item__subtitle">Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam, maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.</p>
					<Link to={`/services`} className="services-card-wrapper-item__link">{LinkText}
						<span className="services-card-wrapper-item__link-icon">{iconArrow}</span>
					</Link>
				</div>

				<div className="services-card-wrapper-item">
					<div className="services-card-wrapper-item-icon">
						<img src={cardIcon2} alt="img" width="60" height="60" />
					</div>

					<h4 className="services-card-wrapper-item__title">Apostile & Legalization</h4>
					<p className="services-card-wrapper-item__subtitle">Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam, maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.</p>
					<Link to={`/services`} className="services-card-wrapper-item__link">{LinkText}
						<span className="services-card-wrapper-item__link-icon">{iconArrow}</span>
					</Link>
				</div>

				<div className="services-card-wrapper-item">
					<div className="services-card-wrapper-item-icon">
						<img src={cardIcon3} alt="img" width="60" height="60" />
					</div>

					<h4 className="services-card-wrapper-item__title">Localization Services</h4>
					<p className="services-card-wrapper-item__subtitle">Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam, maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.</p>
					<Link to={`/services`} className="services-card-wrapper-item__link">{LinkText}
						<span className="services-card-wrapper-item__link-icon">{iconArrow}</span>
					</Link>
				</div>


				<div className="services-card-wrapper-item">
					<div className="services-card-wrapper-item-icon">
						<img src={cardIcon4} alt="img" width="60" height="60" />
					</div>

					<h4 className="services-card-wrapper-item__title">Website Translation</h4>
					<p className="services-card-wrapper-item__subtitle">Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam, maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.</p>
					<Link to={`/services`} className="services-card-wrapper-item__link">{LinkText}
						<span className="services-card-wrapper-item__link-icon">{iconArrow}</span>
					</Link>
				</div>


				<div className="services-card-wrapper-item">
					<div className="services-card-wrapper-item-icon">
						<img src={cardIcon5} alt="img" width="60" height="60" />
					</div>

					<h4 className="services-card-wrapper-item__title">Personal Translation</h4>
					<p className="services-card-wrapper-item__subtitle">Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam, maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.</p>
					<Link to={`/services`} className="services-card-wrapper-item__link">{LinkText}
						<span className="services-card-wrapper-item__link-icon">{iconArrow}</span>
					</Link>
				</div>


				<div className="services-card-wrapper-item">
					<div className="services-card-wrapper-item-icon">
						<img src={cardIcon6} alt="img" width="60" height="60" />
					</div>

					<h4 className="services-card-wrapper-item__title">Interpreting Services</h4>
					<p className="services-card-wrapper-item__subtitle">Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam, maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.</p>
					<Link to={`/services`} className="services-card-wrapper-item__link">{LinkText}
						<span className="services-card-wrapper-item__link-icon">{iconArrow}</span>
					</Link>
				</div>
			</div>


		</section>
	)
}

export default ServicesCards