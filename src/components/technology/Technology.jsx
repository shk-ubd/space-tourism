import { useEffect, useState } from "react";
import bgDesktop from "../../assets/technology/background-technology-desktop.jpg"
import { useSpaceContext } from "../../context/spaceContext";

export default function Technology() {

    const {technology} = useSpaceContext()

    const [currentTechnology, setCurrentTechnology] = useState("Launch vehicle")
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
    const [name, setName] = useState("Launch vehicle")
    const [imagePortrait, setImagePortrait] = useState("/assets/technology/image-launch-vehicle-portrait.jpg")
    const [imageLandscape, setImageLandscape] = useState("/assets/technology/image-launch-vehicle-landscape.jpg")
    const [description, setDescription] = useState("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!")

    const backgroundImageStyle = {
        backgroundImage: `url(${bgDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    useEffect(()=>{
        if(technology.length === 0) return
        
        if(currentTechnology ==="Launch vehicle") updateStates(technology[0])
        else if(currentTechnology ==="Spaceport") updateStates(technology[1])
        else if(currentTechnology ==="Space capsule") updateStates(technology[2])
    },[currentTechnology])

    const updateStates = (data)=>{
        setName(data.name)
        setImageLandscape(data.images.landscape)
        setImagePortrait(data.images.portrait)
        setDescription(data.description)
    }

    return (
        <div style={backgroundImageStyle} className="pt-24 min-h-screen md:pt-32  lg:pl-[7rem] lg:h-screen lg:pt-[10rem]">
            <div className=" lg:flex lg:flex-col lg:justify-between">
                <div className="mb-8 md:mb-14 md:px-10 lg:mb-0 lg:p-0">
                    <h5 className="text-white"> <span className="text-white/30 font-bold">03</span> Space Launch 101</h5>
                </div>

                <div className="flex flex-col justify-between  items-center lg:flex-row lg:h-full">

                    <div className="flex order-2 mt-8 mb-6 lg:flex-col gap-8 md:mb-11 lg:ml-0 xl:ml-8 lg:order-1 lg:my-0">
                        <button onClick={()=>{setCurrentTechnology("Launch vehicle")}} className={`rounded-[50%] grid place-items-center h-10 w-10 md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] border-2 ${currentTechnology==="Launch vehicle"? "bg-white text-darkBlue border-white": "bg-transparent border-white/30 text-white hover:border-white/50"}`}><h4 className="heading">1</h4></button>
                        <button onClick={()=>{setCurrentTechnology("Spaceport")}} className={`rounded-[50%]  grid place-items-center h-10 w-10 md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] border-2 ${currentTechnology==="Spaceport"? "bg-white text-darkBlue border-white": "bg-transparent border-white/30 text-white hover:border-white/50"}`}><h4 className="heading">2</h4></button>
                        <button onClick={()=>{setCurrentTechnology("Space capsule")}} className={`rounded-[50%] grid place-items-center h-10 w-10 md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] border-2 ${currentTechnology==="Space capsule"? "bg-white text-darkBlue border-white": "bg-transparent border-white/30 text-white hover:border-white/50"}`}><h4 className="heading">3</h4></button>
                    </div>

                    <div className="flex items-center flex-col order-3 max-w-[470px] lg:order-2 xl:mr-20">
                        <p className="nav-text text-lightBlue">THE TERMINOLOGY</p>
                        <h3 className="heading text-white pb-4 pt-1 md:pb-4 md:pt-2">{name}</h3>
                        <p className="w-[90%] max-w-330px md:w-[458px] lg:max-w-[444px]">{description}</p>
                    </div>

                    <div className="order-1 w-full md:mb-[60px]   lg:order-3 lg:m-0 lg:w-auto lg:max-w-[300px] xl:max-w-max">
                        <img src={window.innerWidth > 1023? imagePortrait : imageLandscape} className=" w-full lg:max-w-[450px]" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}