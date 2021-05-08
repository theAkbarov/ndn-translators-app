
import './WorkPraces.scss'


import CardIcon1 from '../../assets/images/icon/card-icon1.png'
import CardIcon2 from '../../assets/images/icon/card-icon2.png'
import CardIcon3 from '../../assets/images/icon/card-icon3.png'
import CardIcon4 from '../../assets/images/icon/card-icon4.png'

const WorkPraces = () => {
	return (
		<section className="work-process container">

			<p className="work-process__minTitle">How it works</p>
			<h2 className="work-process__title">How it works</h2>

			<p className="work-process__text">
				Lorem ipsum dolor sit amet, consectetur elit. Eius consequuntur ipsam blanditiis temporibus nostrum praesentium voluptatem amet aliquid laborum in.
					</p>

			<div className="work-process-inner">

				<div className="work-process-inner-card" data-aos="fade-up">
					<span className="work-process-inner-card-step">01</span>

					<div className="work-process-inner-card-icon">
						<img src={CardIcon1} alt="icon-firs" className="work-process-inner-card-icon__img" />
					</div>

					<h4 className="work-process-inner-card__title">Order Translations</h4>
					<p className="work-process-inner-card__subTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>

				<div className="work-process-inner-card" data-aos="fade-up">
					<span className="work-process-inner-card-step">02</span>

					<div className="work-process-inner-card-icon">
						<img src={CardIcon2} alt="icon-firs" className="work-process-inner-card-icon__img" />
					</div>

					<h4 className="work-process-inner-card__title">Choose Package</h4>
					<p className="work-process-inner-card__subTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>


				<div className="work-process-inner-card" data-aos="fade-up">
					<span className="work-process-inner-card-step">03</span>

					<div className="work-process-inner-card-icon">
						<img src={CardIcon3} alt="icon-firs" className="work-process-inner-card-icon__img" />
					</div>

					<h4 className="work-process-inner-card__title">Check Translation</h4>
					<p className="work-process-inner-card__subTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>

				<div className="work-process-inner-card" data-aos="fade-up">
					<span className="work-process-inner-card-step">04</span>

					<div className="work-process-inner-card-icon">
						<img src={CardIcon4} alt="icon-firs" className="work-process-inner-card-icon__img" />
					</div>

					<h4 className="work-process-inner-card__title">Confirm Delivery</h4>
					<p className="work-process-inner-card__subTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>


		</section>
	)
}

export default WorkPraces;