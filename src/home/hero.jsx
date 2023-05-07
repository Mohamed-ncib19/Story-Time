import CalendarIcon from "./calendarIcon";
import heroPic from '../assets/images/hero.jpeg';
import '../css/animation.css'
const Hero = () => {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const d = new Date();
    let year = d.getFullYear()
    let month = months[d.getMonth()];
    let day = d.getDate()
    let date = month + ' ' + day + ',' + year; 



    return ( 
        <div id="back-in-up" className=" flex flex-col md:flex-row justify-around items-center flex-wrap p-12 m-auto md:h-auto bg-[#262A2E] float-left">
            <div id="text" className="flex flex-col w-full md:w-[40%]  m-auto space-x-1 gap-3 ">
                <h1 className="text-[40px] text-white hover:underline hover:underline-offset-8 hover:decoration-[#64429e] transition-all duration-500">Never let your memories be greater than your dreams </h1>
                <p className="text-[18px] text-white ">Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening.</p>
                <div id="date" className="flex flex-row space-x-4">
                    <i className="text-gray-500">
                    <CalendarIcon />
                    </i>
                    <p className="text-[12px] text-gray-500">{date}</p>
                    
                </div>
            </div>
            <img src={heroPic} alt="image not found" className="w-full h-[80%] m-auto rounded-3xl border-8 border-gray-900 hover:scale-105 transition-all duration-500 cursor-pointer md:w-[40%] md:h-[40%]" />
            
        </div>
     );
}
 
export default Hero;