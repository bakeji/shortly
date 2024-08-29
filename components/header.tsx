"use client"
import { PageContext } from "@/context/pageContext"
import Image from "next/image"
import { useContext } from "react"
export default function Header(){

    const {showMobileNavButton} = useContext(PageContext)
    return (
        <header className="w-[80%] mx-auto flex items-center justify-between p-[20px] box-border sm:w-[90%] ">
                <div className="flex items-center justify-center gap-x-20  ">
                    <div >
                        <Image src="/logo.svg" alt="logo" width={121} height={33} />
                    </div>

                    <nav className="md:hidden" >
                        <ul className="flex items-center justify-center gap-[20px]  text-[#bfbfbf]  text-[18px] font-medium ">
                            <li className="hover:text-black"><a href="#">Features</a></li>
                            <li className="hover:text-black"><a href="#">Pricing</a></li>
                            <li className="hover:text-black"><a href="#">Resources</a></li>
                        </ul>
                    </nav>
             </div>

             <div className="flex items-center justify-center gap-[30px] text-[18px] font-medium  md:hidden">
                <button>Login</button>
                <button className="w-[120px] h-[40px] bg-[#2acfcf] rounded-full text-[white] ">Sign Up</button>
             </div>

             <div  className="hidden md:flex">

                <button onClick={showMobileNavButton}><Image src="/ham.png" alt="hamburger" width={24} height={24} /></button>
             </div>
        </header>
    )
}