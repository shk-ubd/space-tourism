import picture from "../../assets/home/background-home-desktop.jpg"

export default function Home() {


    const backgroundImageStyle = {
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',  // Adjust as needed
        backgroundPosition: 'center',  // Adjust as needed
    };

    return (
        <div className=" h-screen" style={backgroundImageStyle} >
            <div className="flex justify-around items-end h-[85vh]">

                <div className=" w-[40%] max-w-[445px] ">
                    <h5 >SO, YOU WANT TO TRAVEL TO</h5>
                    <h1 className="heading text-white" >SPACE </h1>
                    <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>

                <div className="flex items-end">
                    <div className="bg-white w-[274px] h-[274px] rounded-full grid place-items-center">
                        <h4 className="heading  text-black">Explore</h4>
                    </div>
                </div>

            </div>
        </div>
    );
}
