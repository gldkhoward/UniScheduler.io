import Hero from "@/features/hero/hero";
import { MdOutlineSmartToy } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { MdMemory } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";



export default function Home() {
    
    return(
        <div className="p-10">
            <Hero />
            <div className="flex flex-col items-center justify-center text-center my-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-5">
                    Eliminate the stress of planning your semester
                </h2>
                <div className="flex flex-row justify-around items-start w-full">
                    <div className="w-1/3 justify-center text-center p-10">
                        <div className="flex justify-center">
                            <IoTimerOutline size={40} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Instant Scheduling</h3>
                        <p>
                            Simply enter your courses and preferences, and our algorithm will generate a schedule that works for you.
                        </p>
                    </div>
                    <div className="w-1/3 p-10">
                        <div className="flex justify-center">
                            <RiLightbulbFlashLine size={40} />
                        </div>                          
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Designed by students for students</h3>
                        <p>
                            We know how stressful it can be to plan your semester. That's why we've designed UniScheduler.io to be as simple and intuitive as possible.
                        </p>
                    </div>
                    <div className="w-1/3 p-10">
                        <div className="flex justify-center">
                            <MdMemory size={40} />
                        </div>                        
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Optimized Learning</h3>
                        <p>
                            Balance your workload with an optimized schedule that factors in your learning preferences, peak productivity times, and daily schedule.
                        </p>
                    </div>
                    
                </div>
            </div>

        </div>
        

    )
    }