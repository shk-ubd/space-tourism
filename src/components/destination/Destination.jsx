import bgDesktop from "../../assets/destination/background-destination-desktop.jpg"
//  import bgMobile from "../../assets/destination/background-destination-mobile.jpg"
//  import bgTablet from "../../assets/destination/background-destination-tablet.jpg"
import moon from "../../assets/destination/image-moon.png"
export default function Destination() {
    const backgroundImageStyle = {
        backgroundImage: `url(${bgDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };



    return (
        <div style={backgroundImageStyle} className="h-screen px-[7rem] pt-[10rem]" >
            <div> <h5 className="text-white"> <span className="opacity-25">01</span>  Pick Your Destination </h5> </div>
            <div className="flex h-full items-center py-10 justify-around">
                <div className="w-[40%]">
                    <img className="w-[350px] " src={moon}  alt="moon" />
                </div>
                <div className="w-[40%]">
                    <ul className="flex items-center gap-8 w-full mb-5" >
                        <li className="nav-text text-white border-2 border-transparent hover:border-b-white/30 pb-3"><button>MOON</button></li>
                        <li className="nav-text text-white border-2 border-transparent hover:border-b-white/30 pb-3"><button>MARS</button></li>
                        <li className="nav-text text-white border-2 border-transparent hover:border-b-white/30 pb-3"><button>EUROPA</button></li>
                        <li className="nav-text text-white border-2 border-transparent hover:border-b-white/30 pb-3"><button>TITAN</button></li>
                    </ul>
                    <h2 className="heading  text-white">MOON</h2>
                    <p>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <div className="flex gap-20 mt-[2rem] border-t-2 border-t-white/30 pt-7 ">
                        <div >
                            <div className="sub-heading2 text-lightBlue">AVG. DISTANCE</div>
                            <div className="sub-heading1 text-white">384,400 km</div>
                        </div>
                        
                        <div >
                            <div className="sub-heading2 text-lightBlue">EST. TRAVEL TIME</div>
                            <div className="sub-heading1 text-white">3 DAYS</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}