import bgDesktop from "../../assets/crew/background-crew-desktop.jpg"
import commander from "../../assets/crew/image-douglas-hurley.png"

export default function Crew() {
    const backgroundImageStyle = {
        backgroundImage: `url(${bgDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div style={backgroundImageStyle} className=" grid h-screen px-[7rem] pt-[10rem]  overflow-hidden">

            <div className="flex  justify-between border-4 border-yellow-500">
                <div className="flex flex-col justify-between  mb-[5rem] w-[45%] border-4 border-green-500">

                    <div>
                        <h5 className="text-white"> <span className="opacity-25">02</span> Meet your Crew</h5>
                    </div>

                    <div className="ml-8">
                        <h4 className="heading text-white opacity-50">Commander</h4>
                        <h3 className="heading text-white py-4">Douglas Hurley</h3>
                        <p className="max-w-[444px]">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                    </div>

                    <div className="flex gap-5 ml-8 mb-5">
                        <button className="w-4 h-4 rounded-full bg-white/30"></button>
                        <button className="w-4 h-4 rounded-full bg-white/30"></button>
                        <button className="w-4 h-4 rounded-full bg-white/30"></button>
                        <button className="w-4 h-4 rounded-full bg-white/30"></button>
                    </div>

                </div>

                <div className=" max-w-[34%]  flex items-end  border-4 border-red-500">
                    <img className=""  src={commander} alt="" />
                </div>

            </div>



        </div>
    )
}