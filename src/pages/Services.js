
import HeroBgk from "../components/HeroBgk/HeroBgk"
import ServicesCards from "../containers/ServicesCards/ServicesCards"


import SvImg  from '../assets/images/sv-img.png'
import ServicesLeng from "../containers/ServicesLeng/ServicesLeng"
const Services = () => {
	return (
		<div className="services">
			<HeroBgk
				title={'Services'}
			/>

			<ServicesCards />

			<section className="services-section">
				<div className="services-section-inner container">
					<div className="services-section-inner-left">
						<img src={SvImg} alt=""  className="services-section-inner-left__img"/>
					</div>

					<div className="services-section-inner-right">
						<span className="services-section-inner-right__suptitle">Our Translation Professional Agency</span>
						<h4 className="services-section-inner-right__title">Let’s create something new and awesome togeather</h4>
						<p className="services-section-inner-right__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad, ipsam labore. Sunt iste a velit officia aperiam quod inventore sit amet, consectetur adipisicing elit. Ipsum ad,.</p>


						<div className="services-section-inner-right-check">

							<div className="services-section-inner-right-check-item">
								<div className="services-section-inner-right-check-item__info">Excellent quality</div>
							</div>


							<div className="services-section-inner-right-check-item">
								<div className="services-section-inner-right-check-item__info">Professional Team</div>
							</div>

							<div className="services-section-inner-right-check-item">
								<div className="services-section-inner-right-check-item__info">Competitive Prices</div>
							</div>

							<div className="services-section-inner-right-check-item">
								<div className="services-section-inner-right-check-item__info">24/7 Expert Support</div>
							</div>

							<div className="services-section-inner-right-check-item">
								<div className="services-section-inner-right-check-item__info">Express Post Delivery</div>
							</div>

							<div className="services-section-inner-right-check-item">
								<div className="services-section-inner-right-check-item__info">Turnaround by Email</div>
							</div>

						</div>
					</div>
				</div>
			</section>

			<ServicesLeng/>
			
		</div>
	)
}



export default Services;