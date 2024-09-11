"use client"
import { useState } from "react";
import Links from "./shortenedLinks";
import Loading from "./loading";
export default function Shorten(){

    const [link, setLink] = useState('')
    const [isEMpty, setIsEmpty] = useState(false)
    const [shortUrl, setShortUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [shortenedLinks, setShortenedLinks] = useState<{ link: string; shortLink: string }[]>([])
   

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value)
    }

    //  api to shorten link

    async function fetchApi(){
        const options={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                url: link
            })
        }
           try{
            const response = await fetch('api/v1/shorten', options)
            const data = await response.json()
            setShortUrl(data.result_url)

            setShortenedLinks(prev=>[
                ...prev,
                {link: link, shortLink: data.result_url}
            ])
            
            console.log(shortUrl)
        
    }
        catch(error){
            console.log(error)

        }
        finally{
            setLoading(false)
        }
    }
    // check for valid url
    function isValidUrl(url:string) {
        try {
          new URL(url);
          return true;
        } catch (e) {
          return false;
        }
      }

    // shorten link button
        function shotenLinkBtn(){
            if(link !== '' && isValidUrl(link)){
                setLoading(true)
                setIsEmpty(false)
                fetchApi()  
              } else{
                setIsEmpty(true)
              }
            
        }


    return(
        <div className="w-[100%] mb-[80px] flex relative   flex-col items-center justify-center ">
            <div className="h-[100px] w-[100%] sm:h-[78px]">
            <div className="w-[80%] flex-col  p-[20px] rounded-lg box-border relative bottom-[80px] mb-0 h-[170px] bg-auto bg-center bg-no-repeat flex my-0 mx-[auto] justify-center gap-[10px] bg-[#232127] bg-[url('/bg-shorten-desktop.svg')]  sm:w-[90%] sm:h-[138px] sm:bg-[url('/bg-shorten-mobile.svg') ">
                <div className="flex gap-[20px] items-center justify-center sm:flex-col sm:gap-[5px] "> 
                    <div className="w-[70%] sm:w-[100%]"> 

                        <input className={`w-[100%] h-[70px] rounded-[12px] ${isEMpty?"border-[1px], border-[#f46262], border-solid": ""} outline-[0] p-[20px] box-border sm:h-[30px] sm:rounded-[6px]`}   
                        type= "url"
                        placeholder="Shorten a link here..." 
                        onChange={handleChange}
                        value={link}
                        id="link"
                        />

                    {isEMpty && <p className="text-[#f46262] text-[18px] font-[400] my-0 mx-[auto] italic sm:text-[12px] ">please add a link here</p>  }
                    </div>
                    <button onClick={shotenLinkBtn} className={`w-[16%] ${isEMpty? "mb-6": ""} flex items-center justify-center h-[60px] bg-[#2acfcf] rounded-[10px] text-[white] text-[18px] font-[700] sm:w-[100%] sm:mb-0 sm:mt-2 sm:h-[40px] sm:rounded-[6px]`}>
                        {loading? <Loading /> : "Shorten it!"}
                    </button>
                </div> 

            </div>
</div>
            <Links link={shortUrl}  shortenedLinks={shortenedLinks}
             />
        </div>
    )
}