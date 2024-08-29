export default function Boost(){
    return(
        <div className="w-[100%] flex items-center justify-center bg-[url('/bg-boost-desktop.svg')] bg-auto bg-center bg-no-repeat bg-[#3b3054] h-[250px]  ">
            <div className="flex gap-4 flex-col items-center justify-center" >
                <h2 className="text-white text-[28px] font-[700]  ">Boost your links today</h2>
                <button className="w-[160px] h-[50px] text-[18px] font-[500] bg-[#2acfcf] rounded-full text-[white]  " >Get Started</button>
            </div>
        </div>
    )
}