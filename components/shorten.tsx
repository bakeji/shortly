"use client"
import { useState } from "react";
import Links from "./shortenedLinks";
export default function Shorten(){

    const [link, setLink] = useState('')
    const [isEMpty, setIsEmpty] = useState(false)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value)
    }

        const shotenLinkBtn=()=>{
            if(link === ''){
                setIsEmpty(true)
              }else{
                setIsEmpty(false)
              }

            console.log(link)
        }
    return(
        <div className="w-[100%] mb-[80px] flex relative  flex-col items-center justify-center ">
            <div className="w-[80%] flex-col  p-[20px] rounded-lg box-border absolute bottom-[0px] h-[170px] bg-auto bg-center bg-no-repeat flex my-0 mx-[auto] justify-center gap-[10px] bg-[#232127] bg-[url('/bg-shorten-desktop.svg')]  
            sm:w-[90%] sm:h-[138px] sm:bg-[url('/bg-shorten-mobile.svg') ">
                <div className="flex gap-[20px] items-center justify-center sm:flex-col sm:gap-[5px] "> 
                    <div className="w-[70%] sm:w-[100%]"> 

                    <input className="w-[100%] h-[70px] rounded-[12px] outline-[0] p-[20px] box-border sm:h-[30px] sm:rounded-[6px]"   
                    type= "url"
                     placeholder="Shorten a link here..." 
                    onChange={handleChange}
                    value={link}
                    id="link"
                    />
                       {isEMpty && <p className="text-[#f46262] text-[18px] font-[400] my-0 mx-[auto] italic sm:text-[12px] ">please add a link here</p>  }
                    </div>
                    <button onClick={shotenLinkBtn} className={`w-[16%] ${isEMpty? "mb-6": ""} h-[60px] bg-[#2acfcf] rounded-[10px] text-[white] text-[18px] font-[700] sm:w-[100%] sm:mb-0 sm:mt-2 sm:h-[40px] sm:rounded-[6px]`}>Shorten it!</button>
                </div> 

            </div>

            <Links />
        </div>
    )
}