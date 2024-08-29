export default function Links(){
    return(
        <div className="w-[80%] relative top-20 flex flex-col justify-center items-center mx-[auto] my-0 gap-[20px] sm:w-[90%] sm:top-[150px] ">
            <div className="w-[100%] flex justify-between items-center h-[30px] bg-[#ffffff] p-[35px] rounded-[8px] shadow-md sm:flex-col sm:h-[140px] sm:p-0 sm:items-start sm:justify-center">
                <div >
                    <p className="text-[black] text-[18px] font-[500] sm:p-[10px] box-border" >http://www.google.com</p>
                </div>
                <hr className="hidden sm:flex sm:w-[100%] sm:border-[1px] sm:border-solid sm:border-[#bfbfbf] " />

                <div className="flex items-center justify-center gap-[12px] sm:flex-col sm:gap-[8px]  sm:p-[10px] sm:w-[100%] sm:items-start">
                    <a className="text-[#2acfcf] text-[18px] font-[500]  " href="">nnnnnnnnnnnnn</a>
                    <button className="w-[90px] h-[40px] bg-[#2acfcf] rounded-[10px] text-[white] text-[18px] font-[700] sm:w-[100%] ">Copy</button>
                </div>
               

            </div>

        </div>
    )
}