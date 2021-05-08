import { Link } from "react-router-dom";
import HeroBgk from "../components/HeroBgk/HeroBgk"


import callImg from '../assets/images/call-img.webp'
const Contacts = () => {

	return (
		<div className="contacts">
			<div className="contacts-top">
				<HeroBgk
					title={'Contact Us'}
				/>
			</div>

			<div className="contacts-inner container">

				<div className="contacts-inner-left">
					<img src={callImg} alt="" className="contacts-inner-left__img" />
				</div>

				<div className="contacts-inner-right">
					<span className="contacts-inner-right__suptitle">Contact Us</span>
					<h1 className="contacts-inner-right__title">Get  in  Touch</h1>
					<p className="contacts-inner-right__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
					</p>

					<div className="contacts-inner-right-card">
						<h3 className="contacts-inner-right-card__name">Address</h3>
						<span className="contacts-inner-right-card__link">
							8500, Lorem Street, Chicago, IL, 55030
						</span>
					</div>
					<div className="contacts-inner-right-card">
						<h3 className="contacts-inner-right-card__name">Email</h3>
						<a href="mailto:translatorsuzbekistan@gmail.com" className="contacts-inner-right-card__link">translatorsuzbekistan@gmail.com</a>
					</div>
					<div className="contacts-inner-right-card">
						<h3 className="contacts-inner-right-card__name">Phone</h3>
						<a href="tel:+998935805259" className="contacts-inner-right-card__link">+998935805259</a>
					</div>
				</div>
			</div>
		</div>
	)
}



export default Contacts;




