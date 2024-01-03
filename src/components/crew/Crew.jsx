import { useEffect, useState } from "react";
import bgDesktop from "../../assets/crew/background-crew-desktop.jpg"
import { useSpaceContext } from "../../context/spaceContext";

export default function Crew() {

    const { crew } = useSpaceContext()

    const [currentCrew, setCurrentCrew] = useState("Douglas Hurley")
    const [name, setName] = useState("Douglas Hurley")
    const [bio, setBio] = useState("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.")
    const [role, setRole] = useState("Commander")
    const [image, setImage] = useState("/assets/crew/image-douglas-hurley.png")

    const backgroundImageStyle = {
        backgroundImage: `url(${bgDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const updateStates = (data) => {
        if(data) {
        setName(data.name)
        setBio(data.bio)
        setRole(data.role)
        setImage(data.images.png)
    }}

    useEffect(()=>{
        if(crew.length === 0) return
        if(currentCrew === "Douglas Hurley") updateStates(crew[0])
        else if (currentCrew ==="Mark Shuttleworth") updateStates(crew[1])
        else if (currentCrew ==="Victor Glover") updateStates(crew[2])
        else if (currentCrew ==="Anousheh Ansari") updateStates(crew[3])
    },[currentCrew])



    return (
        <div style={backgroundImageStyle} className=" grid h-screen px-[7rem] pt-[10rem]  overflow-hidden">

            <div className="flex  justify-between border-4 border-yellow-500">
                <div className="flex flex-col justify-between  mb-[5rem] h-[500px] border-4 border-green-500">

                    <div>
                        <h5 className="text-white"> <span className="opacity-25 font-bold">02</span> Meet your Crew</h5>
                    </div>

                    <div className="ml-8 h-[260px]">
                        <h4 className="heading text-white opacity-50">{role}</h4>
                        <h3 className="heading text-white py-4">{name}</h3>
                        <p className="max-w-[444px]">{bio}</p>
                    </div>

                    <div className="flex gap-5 ml-8 mb-5">
                        <button onClick={()=>{ setCurrentCrew("Douglas Hurley")}} className={`w-4 h-4 rounded-full  ${currentCrew ==="Douglas Hurley"? "bg-white":"bg-white/30 hover:bg-white/50"}`}></button>
                        <button onClick={ ()=>{setCurrentCrew("Mark Shuttleworth")}} className={`w-4 h-4 rounded-full  ${currentCrew ==="Mark Shuttleworth"? "bg-white":"bg-white/30 hover:bg-white/50"}`}></button>
                        <button onClick={ ()=>{setCurrentCrew("Victor Glover")}} className={`w-4 h-4 rounded-full  ${currentCrew ==="Victor Glover"? "bg-white":"bg-white/30 hover:bg-white/50"}`}></button>
                        <button onClick={()=>{ setCurrentCrew("Anousheh Ansari")}} className={`w-4 h-4 rounded-full  ${currentCrew ==="Anousheh Ansari"? "bg-white":"bg-white/30 hover:bg-white/50"}`}></button>
                    </div>

                </div>

                <div className=" max-w-[34%]  flex items-end  border-4 border-red-500">
                    <img className=""  src={image} alt="" />
                </div>

            </div>



        </div>
    )
}