import Image from 'next/image'  
export default function AdvStat(){
    return(
        <div className="mt-[200px] w-[100%] items-center relative justify-center flex flex-col ">
            <div  className="flex w-[100%] flex-col items-center justify-center gap-[20px] sm:mb-[90px] ">
                <h2 className="text-[28px] font-[800] text-center text-[#232127] "> Advanced Statistics</h2>
                <p className='text-[18px] font-[700] text-[#bfbfbf] w-[40%] text-center  sm:w-[90%] '>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>


            <div className='mt-[10px] w-[80%] flex items-center justify-between sm:flex-col sm:justify-center sm:gap-0  '>
                <div className='relative p-[20px] bg-white  flex flex-col h-[280px] gap-[10px] rounded-[12px] xl:h-[330px] lg:h-[400px] sm:h-[270px] sm:items-center   ' >
                    <div className=" w-[70px] h-[70px] rounded-[50%] bg-[#35323e] flex items-center justify-center absolute  top-[-30px] ">
                        <Image src="/icon-brand-recognition.svg" alt="brand-recognition" width={40} height={40}/>
                    </div>
                    <h2 className="relative mt-[40px] text-[#35323e] text-[18px] font-[700] ">Brand Recognition</h2>
                    <p className=" text-[#bfbfbf] text-[18px] font-[500] sm:text-center">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </div>

                <hr className="border-[3px] w-[122px] border-solid border-[#2acfcf] sm:w-[0px] sm:h-[90px]" />

                <div className="relative mt-[90px] p-[20px] bg-white flex flex-col h-[280px] gap-[10px] rounded-[12px] xl:h-[330px] lg:h-[400px] sm:h-[270px] sm:mt-0 sm:items-center  " >
                    <div className=" w-[70px] h-[70px] rounded-[50%] bg-[#35323e] flex items-center justify-center absolute  top-[-30px] ">
                        <Image src="/icon-detailed-records.svg" alt="detailed-records" width={40} height={40}/>
                    </div>
                    <h2 className="relative mt-[40px] text-[#35323e] text-[18px] font-[700] ">Detailed Records</h2>
                    <p className=" text-[#bfbfbf] text-[18px] font-[500] sm:text-center">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>

                <hr className="border-[3px] w-[122px] border-solid border-[#2acfcf] sm:w-[0px] sm:h-[90px]" />

                <div className="relative mt-[180px] p-[20px] bg-white  flex flex-col h-[280px] gap-[10px] rounded-[12px] xl:h-[330px] lg:h-[400px] sm:h-[270px] sm:mt-0 sm:items-center  " >
                    <div className=" w-[70px] h-[70px] rounded-[50%] bg-[#35323e] flex items-center justify-center absolute  top-[-30px] ">
                        <Image src="/icon-fully-customizable.svg" alt="fully-customizable" width={40} height={40}/>
                    </div>
                    <h2 className="relative mt-[40px] text-[#35323e] text-[18px] font-[700] ">Fully Customizable</h2>
                    <p className=" text-[#bfbfbf] text-[18px] font-[500] sm:text-center">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>

        </div>
    )
}