import bgDesktop from "../../assets/technology/background-technology-desktop.jpg"
import launchvehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg"

export default function Technology() {
    const backgroundImageStyle = {
        backgroundImage: `url(${bgDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div style={backgroundImageStyle} className="h-screen pl-[7rem] pt-[10rem] pb-[4rem]">
            <div className=" border-2 border-red-500 h-full">
                <div>
                    <h5 className="text-white heading"> <span className="opacity-25">03</span> Space Launch 101</h5>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-6 ml-8">
                        <button className="rounded-[50%] h-[80px] w-[80px] border-2 border-white/30 text-white"><h4 className="heading">1</h4></button>
                        <button className="rounded-[50%] h-[80px] w-[80px] border-2 border-white/30 text-white"><h4 className="heading">2</h4></button>
                        <button className="rounded-[50%] h-[80px] w-[80px] border-2 border-white/30 text-white"><h4 className="heading">3</h4></button>
                    </div>
                    <div className=" max-w-[470px]">
                        <p className="nav-text text-lightBlue">THE TERMINOLOGY</p>
                        <h3 className="heading text-white py-4">LAUNCH VEHICLE</h3>
                        <p className="max-w-[444px]">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
                    <div className=" ">
                        <img src={launchvehicle} className="max-w-[450px]" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}