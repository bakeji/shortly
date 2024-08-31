export default function HeroSection(){
    return(
        <div className="flex w-[90%] items-start mt-[120px] ml-[auto] justify-between md:items-center md:flex-col-reverse md:gap-7 md:justify-center " >
            <div className="md:flex w-[100%] flex-col gap-2 justify-center items-center">
                <h1 className="text-[68px] w-[90%] font-[800] md:w-[80%] md:text-[40px] sm:w-[100%] sm:font-[700] sm:text-[38px] sm:text-center "  >More than just shorter links</h1>
                <p className="text-[18px] font-[500] mb-[20px] w-[70%] text-[#bfbfbf] md:w-[100%] sm:text-center sm:w-[90%] ">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button className="w-[160px] text-[18px] font-[500] h-[55px] bg-[#2acfcf] rounded-full text-[white]">Get Started</button>
            </div>
            <div className="hero-img">
                <img src="/illustration-working.svg" alt="illustration" />
            </div>
        </div>
    )

}