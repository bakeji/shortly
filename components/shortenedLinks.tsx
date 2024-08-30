"use client"

import { useState } from "react"

interface LinksProps {
    shortenedLinks: { link: string, shortLink: string }[],
    link: string
  }

export default function Links({shortenedLinks, link}:LinksProps){
    const [copied, setCopied] = useState(false)
    // copy function
    function copyToClipboard(){
    //     if(shortenendLinks.shortLink!==""){
    //     setCopied(true)
    // navigator.clipboard.writeText(shorturl)
    //         setTimeout(()=>{
    //             setCopied(false)
    //         }, 1000)
    //     }
    }
    

    return(
        <>
      {link && <div className="w-[80%] relative flex flex-col justify-center items-center mx-[auto] my-0 gap-[20px] sm:w-[90%] ">
        {shortenedLinks.map((shortenedLink, index)=>(
       <div key={index} className="w-[100%] flex justify-between items-center h-[30px] bg-[#ffffff] p-[35px] rounded-[8px] shadow-md sm:flex-col sm:h-[140px] sm:p-0 sm:items-start sm:justify-center">
                <div className="w-[50%]" >
                    <p className="text-[black] text-[18px] max-w-fit break-words truncate overflow-hidden whitespace-nowrap font-[500] sm:p-[10px] box-border" > {shortenedLink.link}</p>
                </div>
                <hr className="hidden sm:flex sm:w-[100%] sm:border-[1px] sm:border-solid sm:border-[#bfbfbf] " />

                <div className="flex items-center justify-center  gap-[12px] sm:flex-col sm:gap-[8px]  sm:p-[10px] sm:w-[100%] sm:items-start">
                    <a className="text-[#2acfcf] text-[18px] w-[80%] break-words truncate overflow-hidden whitespace-nowrap font-[500]  " href="">{shortenedLink.shortLink}</a>
                    <button onClick={copyToClipboard} className={`w-[90px] h-[40px] bg-[#2acfcf] ${copied? "bg-[#3b3054]":"bg-[#2acfcf]" }  rounded-[10px] text-[white] text-[18px] font-[700] sm:w-[100%]`}>
                        {copied? "copied!" : "copy"}</button>
                </div>
               

            </div>
        ))}

        </div>
}
      
      </>
    )
}