import { useTranslation } from "react-i18next"
import HeroBgk from "../components/HeroBgk/HeroBgk"
import AboutAgency from "../containers/AboutAgency/AboutAgency"
import TeamCard from "../containers/TeamCard/TeamCard"
import WorkPraces from "../containers/WorkPraces/WorkPraces"




const AboutUs=()=>{
const [ y ] = useTranslation()	
	return (
    <div className="aboutus">
      <HeroBgk home={y("about.home")} title={y("about.title")} />

      <AboutAgency />

      <WorkPraces />

      <TeamCard />
    </div>
  );
}



export default AboutUs;