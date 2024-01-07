import { useEffect } from "react";
import picture from "../../assets/home/background-home-desktop.jpg"
import { useSpaceContext } from "../../context/spaceContext";
import {Link} from "react-router-dom"

export default function Home() {

    const { hideNavigation} = useSpaceContext()

    const backgroundImageStyle = {
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',  // Adjust as needed
        backgroundPosition: 'center',  // Adjust as needed
    };

    useEffect(()=>{
        const outerButton = document.getElementById('outer')
        const innerButton = document.getElementById('inner')
        innerButton.addEventListener('mouseenter', ()=>{
            outerButton.classList.add("bg-white/10")
        })
        innerButton.addEventListener('mouseleave', ()=>{
            outerButton.classList.remove("bg-white/10")
        })
    },[])

    return (
        <div className="flex flex-col justify-around  h-screen" style={backgroundImageStyle} onClick={hideNavigation}>
            <div className="flex flex-col items-center h-[70%]  justify-around  lg:flex-row lg:h-[85vh] lg:items-end">

                <div className="md:items-center md:flex md:flex-col lg:w-[40%] lg:max-w-[445px] lg:mb-20 ">
                    <h5 >SO, YOU WANT TO TRAVEL TO</h5>
                    <h1 className="heading my-4 text-white md:my-6" >SPACE </h1>
                    <p className="w-[327px] md:w-[444px] ">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>

                <div className="flex lg:items-end">
                    <div id="outer" className=" rounded-full grid place-items-center lg:w-[450px] transition-all duration-500 lg:h-[450px]  ">
                    <Link to="/destination" id="inner" className="w-[150px] h-[150px] cursor-pointer bg-white rounded-full md:mt-10 lg:mt-0 grid place-items-center visible md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] ">
                        <h4 className="heading  text-black">Explore</h4>
                    </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
// 