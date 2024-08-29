"use client"
import { PageContext } from "@/context/pageContext"
import { useContext } from "react"

export default function NavModal(){
    const {showMobileNav} = useContext(PageContext)
    return(
        <div className={`absolute left-0 right-0 sm:${showMobileNav? "flex" : ""} hidden  sm:flex-col gap-[12px] h-[350px] rounded-[12px] w-[90%] bg-[#3b3054] items-center p-8 justify-between my-0 mx-[auto]`}>
            <nav className="m" >
                <ul className="flex flex-col items-center justify-center gap-[30px]  text-[white]  text-[18px] font-medium ">
                    <li className="hover:text-black"><a href="#">Features</a></li>
                    <li className="hover:text-black"><a href="#">Pricing</a></li>
                    <li className="hover:text-black"><a href="#">Resources</a></li>
                </ul>
            </nav>
                <hr className="w-[100%] border-[#bfbfbf]" />
            <div className="flex w-[100%] items-center justify-center gap-[10px] text-[18px] font-medium  flex-col">
                <button className="text-white">Login</button>
                <button className="w-[100%] h-[50px] bg-[#2acfcf] rounded-full text-[white] ">Sign Up</button>
             </div>
        </div>
    )
}