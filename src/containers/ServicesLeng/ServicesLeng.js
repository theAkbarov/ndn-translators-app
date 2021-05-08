
import { Link } from 'react-router-dom';

import './ServicesLeng.scss';


const ServicesLeng = () => {
	return (

		<section className="servicesleng container">
			<div className="servicesleng-left">
				<span className="servicesleng-left__suptitle">Professional Languages Translation</span>
				<h4 className="servicesleng-left__title">Languages We Cover</h4>
				<p className="servicesleng-left__text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit eum illum tempora? Ducimus eum culpa voluptates dolorem dolorum et sit nisi, mollitia animi porro fuga sequi, molestias repellat except.
				</p>
				<Link to={`/contacts`} className="servicesleng-left__button">
					Get Quote
				</Link>
			</div>
			<div className="servicesleng-right">
				<div className="servicesleng-right-left">
					<div className="servicesleng-right-left-card">
						<Link to={`/contacts`} className="servicesleng-right-left-card__title">English Languages</Link>
						<p className="servicesleng-right-left-card__text"> Iterative approaches to corporate strategy foster collaborative thinkin </p>
					</div>
					<div className="servicesleng-right-left-card">
						<Link to={`/contacts`}  className="servicesleng-right-left-card__title">German Languages</Link>
						<p className="servicesleng-right-left-card__text"> Iterative approaches to corporate strategy foster collaborative thinkin </p>
					</div>
					<div className="servicesleng-right-left-card">
						<Link to={`/contacts`}  className="servicesleng-right-left-card__title">French Languages</Link>
						<p className="servicesleng-right-left-card__text"> Iterative approaches to corporate strategy foster collaborative thinkin </p>
					</div>
				</div>

				<div className="servicesleng-right-right">
					<div className="servicesleng-right-right-card">
						<Link to={`/contacts`}  className="servicesleng-right-right-card__title">Spanish Languages</Link>
						<p className="servicesleng-right-right-card__text"> Iterative approaches to corporate strategy foster collaborative thinkin </p>
					</div>
					<div className="servicesleng-right-right-card">
						<Link to={`/contacts`}  className="servicesleng-right-right-card__title">Swedish Languages</Link>
						<p className="servicesleng-right-right-card__text"> Iterative approaches to corporate strategy foster collaborative thinkin </p>
					</div>
					<div className="servicesleng-right-right-card">
						<Link to={`/contacts`}  className="servicesleng-right-right-card__title">Japanese Languages</Link>
						<p className="servicesleng-right-right-card__text"> Iterative approaches to corporate strategy foster collaborative thinkin </p>
					</div>
				</div>
			</div>
		</section>
	)
}


export default ServicesLeng;