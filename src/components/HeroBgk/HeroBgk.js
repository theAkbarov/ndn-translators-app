import { Link } from 'react-router-dom';


import './HeroBgk.scss';

const HeroBgk = ({ title })=>{
	return(
		<section className="herobgk">
			<span className="bgk-collor"></span>
			<h1 className="herobgk__title">{title}</h1>

			<div className="herobgk-link">
				<Link className="herobgk-link__item" to={`/`}>Home</Link>

				<Link className="herobgk-link__item" >{title}</Link>
			</div>

		</section>
	)
}

export default HeroBgk;