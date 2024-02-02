import { useEffect, useState } from "react";
import bgDesktop from "../../assets/destination/background-destination-desktop.jpg"
import { useSpaceContext } from "../../context/spaceContext";

export default function Destination() {
    const {hideNavigation} = useSpaceContext()

    const { destinations } = useSpaceContext()

    const [currentDestination, setCurrentDestination] = useState("moon")
    const [name, setName] = useState("moon")
    const [image, setImage] = useState("/assets/destination/image-moon.webp")
    const [distance, setDistance] = useState("384,400 KM")
    const [travel, setTravel] = useState("3 DAYS")
    const [description, setDescription] = useState("See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.")

    useEffect(() => {
        if (destinations.length === 0) return

        if (currentDestination === "moon") {
            updateStates(destinations[0])
        }
        else if (currentDestination === "mars") {
            updateStates(destinations[1])
        }
        else if (currentDestination === "europa") {
            updateStates(destinations[2])
        }
        else if (currentDestination === "titan") {
            updateStates(destinations[3])
        }
    }, [currentDestination])

    const updateStates = (data) => {
        setName(data.name)
        setDistance(data.distance)
        setTravel(data.travel)
        setDescription(data.description)
        setImage(data.images.webp)

    }

    const backgroundImageStyle = {
        backgroundImage: `url(${bgDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div style={backgroundImageStyle} className="pt-24 md:pt-32 md:px-10 md:min-h-screen  lg:min-h-screen lg:px-[7rem] lg:pt-[10rem] " onClick={hideNavigation} >

            <div>
                <h5 className="text-white"> <span className="text-white/30 font-bold">01</span> Pick Your Destination </h5>
            </div>

            <div className="flex flex-col h-full items-center py-8 justify-around md:pt-14 md:pb-0 lg:flex-row lg:items-start">

                <div className="mb-4 lg:w-[40%] lg:m-0 ">
                    <img className=" w-[50vw] md:max-w-[300px] lg:w-[350px] lg:max-w-[545px] " src={image} alt={name} />
                </div>


                <div className="flex flex-col items-center justify-between w-[80%] my-4 md:my-10 lg:m-0 lg:w-[40%] lg:items-start">

                    <ul className="flex justify-evenly items-center  w-full mb-5 md:max-w-[300px] lg:gap-8" >
                        <li className={`nav-text text-white border-b-2 transition-all pb-3 ${currentDestination === "moon" ? "border-b-white" : "border-b-transparent hover:border-b-white/30"} `}><button onClick={() => { setCurrentDestination("moon") }}>MOON</button></li>
                        <li className={`nav-text text-white border-b-2 transition-all pb-3 ${currentDestination === "mars" ? "border-b-white" : "border-b-transparent hover:border-b-white/30"} `}><button onClick={() => { setCurrentDestination("mars") }} >MARS</button></li>
                        <li className={`nav-text text-white border-b-2 transition-all pb-3 ${currentDestination === "europa" ? "border-b-white" : "border-b-transparent hover:border-b-white/30"} `}><button onClick={() => { setCurrentDestination("europa") }}>EUROPA</button></li>
                        <li className={`nav-text text-white border-b-2 transition-all pb-3 ${currentDestination === "titan" ? "border-b-white" : "border-b-transparent hover:border-b-white/30"} `}><button onClick={() => { setCurrentDestination("titan") }}>TITAN</button></li>
                    </ul>

                    <h2 className="heading  text-white">{name}</h2>

                    <p className="w-[90%] min-h-32 max-w-[327px] md:max-w-[570px] lg:w-[444px] lg:h-[128px] ">{description}</p>

                    <div className="flex flex-col w-full gap-8  mt-[2rem] border-t-2 border-t-white/30 pt-7  md:mt-0 md:flex-row md:justify-evenly lg:gap-20 lg:justify-normal lg:mt-14 ">

                        <div className="flex flex-col items-center gap-3 lg:items-start lg:min-w-[170px]">
                            <div className="sub-heading2 text-lightBlue">AVG. DISTANCE</div>
                            <div className="sub-heading1 text-white">{distance}</div>
                        </div>

                        <div className="flex flex-col items-center gap-3 lg:items-start">
                            <div className="sub-heading2 text-lightBlue">EST. TRAVEL TIME</div>
                            <div className="sub-heading1 text-white">{travel}</div>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}