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
        if (data) {
            setName(data.name)
            setBio(data.bio)
            setRole(data.role)
            setImage(data.images.png)
        }
    }

    useEffect(() => {
        if (crew.length === 0) return
        if (currentCrew === "Douglas Hurley") updateStates(crew[0])
        else if (currentCrew === "Mark Shuttleworth") updateStates(crew[1])
        else if (currentCrew === "Victor Glover") updateStates(crew[2])
        else if (currentCrew === "Anousheh Ansari") updateStates(crew[3])
    }, [currentCrew])



    return (
        <>
            <div style={backgroundImageStyle} className=" pt-24  min-h-screen  md:pt-0 md:px-10  lg:px-[7rem] lg:pt-[10rem] lg:hidden ">

                <div className="flex flex-col items-center justify-between md:min-h-screen md:pt-32 ">

                    <div className="pb-8 md:order-1 w-full ">
                        <h5 className="text-white "> <span className="text-white/30 font-bold">02</span> Meet your Crew</h5>
                    </div>

                    <div className=" w-[90%] h-56 flex justify-center border-b-2 border-b-white/30  md:h-[572px] md:shrink-0 md:order-3 lg:max-w-[34%]">
                        <img className="h-full" src={image} alt="" />
                    </div>


                    <div className="flex flex-col items-center justify-between md:order-2  lg:mb-[5rem] lg:h-[500px] ">


                        <div className=" order-2 flex flex-col items-center md:order-1 lg:ml-8 lg:h-[260px]">
                            <h4 className="heading text-white/50">{role}</h4>
                            <h3 className="heading text-white py-4 md:py-2 lg:mb-4 ">{name}</h3>
                            <p className="w-[90%] max-w-350px md:h-[84px] lg:max-w-[444px]">{bio}</p>
                        </div>

                        <div className="flex order-1 my-8 gap-5 md:order-2 lg:ml-8 lg:mb-5">
                            <button onClick={() => { setCurrentCrew("Douglas Hurley") }} className={`w-4 h-4 rounded-full  ${currentCrew === "Douglas Hurley" ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}></button>
                            <button onClick={() => { setCurrentCrew("Mark Shuttleworth") }} className={`w-4 h-4 rounded-full  ${currentCrew === "Mark Shuttleworth" ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}></button>
                            <button onClick={() => { setCurrentCrew("Victor Glover") }} className={`w-4 h-4 rounded-full  ${currentCrew === "Victor Glover" ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}></button>
                            <button onClick={() => { setCurrentCrew("Anousheh Ansari") }} className={`w-4 h-4 rounded-full  ${currentCrew === "Anousheh Ansari" ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}></button>
                        </div>

                    </div>


                </div>



            </div>

            <div style={backgroundImageStyle} className="min-h-screen px-[7rem] pt-[10rem] hidden lg:grid">

                <div className="flex  justify-between">
                    <div className="flex flex-col justify-between  pb-8 ">

                        <div>
                            <h5 className="text-white"> <span className="opacity-25 font-bold">02</span> Meet your Crew</h5>
                        </div>

                        <div className=" h-[260px]">
                            <h4 className="heading text-white opacity-50">{role}</h4>
                            <h3 className="heading text-white py-4">{name}</h3>
                            <p className="w-[444px] h-[128px]">{bio}</p>
                        </div>

                        <div className="flex gap-5 ml-8 mb-9">
                            <button onClick={() => { setCurrentCrew("Douglas Hurley") }} className={`w-4 h-4 rounded-full  ${currentCrew === "Douglas Hurley" ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}></button>
                            <button onClick={() => { setCurrentCrew("Mark Shuttleworth") }} className={`w-4 h-4 rounded-full  ${currentCrew === "Mark Shuttleworth" ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}></button>
                            <button onClick={() => { setCurrentCrew("Victor Glover") }} className={`w-4 h-4 rounded-full  ${currentCrew === "Victor Glover" ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}></button>
                            <button onClick={() => { setCurrentCrew("Anousheh Ansari") }} className={`w-4 h-4 rounded-full  ${currentCrew === "Anousheh Ansari" ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}></button>
                        </div>

                    </div>

                    <div className=" max-w-[32%]  flex items-end">
                        <img className="" src={image} alt="" />
                    </div>

                </div>



            </div></>
    )
}