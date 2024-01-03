import { useEffect, useState } from "react";
import bgDesktop from "../../assets/technology/background-technology-desktop.jpg"
import { useSpaceContext } from "../../context/spaceContext";

export default function Technology() {

    const {technology} = useSpaceContext()

    const [currentTechnology, setCurrentTechnology] = useState("Launch vehicle")

    const [name, setName] = useState("Launch vehicle")
    const [image, setImage] = useState("/assets/technology/image-launch-vehicle-portrait.jpg")
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
        setImage(data.images.portrait)
        setDescription(data.description)
    }

    return (
        <div style={backgroundImageStyle} className="h-screen pl-[7rem] pt-[10rem] pb-[4rem]">
            <div className=" border-2 border-red-500 h-full">
                <div>
                    <h5 className="text-white"> <span className="opacity-25 font-bold">03</span> Space Launch 101</h5>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-8 ml-8">
                        <button onClick={()=>{setCurrentTechnology("Launch vehicle")}} className={`rounded-[50%] h-[80px] w-[80px] border-2 ${currentTechnology==="Launch vehicle"? "bg-white text-darkBlue border-white": "bg-transparent border-white/30 text-white hover:border-white/50"}`}><h4 className="heading">1</h4></button>
                        <button onClick={()=>{setCurrentTechnology("Spaceport")}} className={`rounded-[50%] h-[80px] w-[80px] border-2 ${currentTechnology==="Spaceport"? "bg-white text-darkBlue border-white": "bg-transparent border-white/30 text-white hover:border-white/50"}`}><h4 className="heading">2</h4></button>
                        <button onClick={()=>{setCurrentTechnology("Space capsule")}} className={`rounded-[50%] h-[80px] w-[80px] border-2 ${currentTechnology==="Space capsule"? "bg-white text-darkBlue border-white": "bg-transparent border-white/30 text-white hover:border-white/50"}`}><h4 className="heading">3</h4></button>
                    </div>
                    <div className=" max-w-[470px]">
                        <p className="nav-text text-lightBlue">THE TERMINOLOGY</p>
                        <h3 className="heading text-white py-4">{name}</h3>
                        <p className="max-w-[444px]">{description}</p>
                    </div>
                    <div className=" ">
                        <img src={image} className="max-w-[450px]" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}