import { useEffect, useState } from "react";
import bgDesktop from "../../assets/destination/background-destination-desktop.jpg"
import { useSpaceContext } from "../../context/spaceContext";

export default function Destination() {
    const { destinations } = useSpaceContext()

    const [currentDestination, setCurrentDestination] = useState("moon")
    const [name, setName] = useState("moon")
    const [image, setImage] = useState("/assets/destination/image-moon.png")
    const [distance, setDistance] = useState("384,400 KM")
    const [travel, setTravel] = useState("3 DAYS")
    const [description, setDescription] = useState("See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.")

    useEffect(( ) => {
        if( destinations.length === 0) return

        if(currentDestination === "moon") {
            updateStates(destinations[0])
        }
        else if(currentDestination === "mars")  {
            updateStates(destinations[1])
        }
        else if(currentDestination === "europa")  {
            updateStates(destinations[2])
        }
        else if(currentDestination === "titan")  {
            updateStates(destinations[3])
        }
    },[currentDestination])

    const updateStates = (data) => {
            setName(data.name)
            setDistance(data.distance)
            setTravel(data.travel)
            setDescription(data.description)
            setImage(data.images.png)
       
    }

    const backgroundImageStyle = {
        backgroundImage: `url(${bgDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }; 

    return (
        <div style={backgroundImageStyle} className="h-screen px-[7rem] pt-[10rem] overflow-y-hidden" >
            <div> <h5 className="text-white"> <span className="opacity-25 font-bold">01</span>  Pick Your Destination </h5> </div>
            <div className="flex h-full items-center py-10 justify-around">
                <div className="w-[40%]">
                    <img className="w-[350px] " src={image}  alt="moon" />
                </div>
                <div className="w-[40%]">
                    <ul className="flex items-center gap-8 w-full mb-5" >
                        <li className={`nav-text text-white border-b-2  pb-3 ${currentDestination ==="moon"? "border-b-white": "border-b-transparent hover:border-b-white/30"} `}><button onClick={ ()=>{setCurrentDestination("moon")} }>MOON</button></li>
                        <li className={`nav-text text-white border-b-2  pb-3 ${currentDestination ==="mars"? "border-b-white": "border-b-transparent hover:border-b-white/30"} `}><button onClick={ ()=>{setCurrentDestination("mars")} } >MARS</button></li>
                        <li className={`nav-text text-white border-b-2  pb-3 ${currentDestination ==="europa"? "border-b-white": "border-b-transparent hover:border-b-white/30"} `}><button onClick={ ()=>{setCurrentDestination("europa")} }>EUROPA</button></li>
                        <li className={`nav-text text-white border-b-2  pb-3 ${currentDestination ==="titan"? "border-b-white": "border-b-transparent hover:border-b-white/30"} `}><button onClick={ ()=>{setCurrentDestination("titan")} }>TITAN</button></li>
                    </ul>
                    <h2 className="heading  text-white">{name}</h2>
                    <p>{description}</p>
                    <div className="flex gap-20 mt-[2rem] border-t-2 border-t-white/30 pt-7 ">
                        <div >
                            <div className="sub-heading2 text-lightBlue">AVG. DISTANCE</div>
                            <div className="sub-heading1 text-white">{distance}</div>
                        </div>
                        
                        <div >
                            <div className="sub-heading2 text-lightBlue">EST. TRAVEL TIME</div>
                            <div className="sub-heading1 text-white">{travel}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}