import HeroBgk from "../components/HeroBgk/HeroBgk"
import AboutAgency from "../containers/AboutAgency/AboutAgency"
import TeamCard from "../containers/TeamCard/TeamCard"
import WorkPraces from "../containers/WorkPraces/WorkPraces"




const AboutUs=()=>{
	
	return(
		<div className="aboutus">

			<HeroBgk
				title={'About Us'}

			/>
			<AboutAgency/>

			
			<WorkPraces/>

			<TeamCard/>
		</div>
	)
}



export default AboutUs;