import picture from "../../assets/home/background-home-desktop.jpg"

export default function Home() {


    const backgroundImageStyle = {
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',  // Adjust as needed
        backgroundPosition: 'center',  // Adjust as needed
    };

    return (
        <div className="flex flex-col justify-around  h-screen" style={backgroundImageStyle} >
            <div className="flex flex-col items-center h-[70%]  justify-around  lg:flex-row lg:h-[85vh] lg:items-end">

                <div className="md:items-center md:flex md:flex-col lg:w-[40%] lg:max-w-[445px] lg:mb-20 ">
                    <h5 >SO, YOU WANT TO TRAVEL TO</h5>
                    <h1 className="heading my-4 text-white md:my-6" >SPACE </h1>
                    <p className="w-[327px] md:w-[444px] ">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>

                <div className="flex lg:items-end">
                    <div className="w-[150px] h-[150px] bg-white rounded-full grid place-items-center md:mt-10 md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] lg:mb-24">
                        <h4 className="heading  text-black">Explore</h4>
                    </div>
                </div>

            </div>
        </div>
    );
}
