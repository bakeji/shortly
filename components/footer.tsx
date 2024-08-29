import Image from 'next/image';
export default function Footer(){
    return(
            <footer className='w-[100%] p-20 box-border bg-[#232127] lg:p-10 md:p-2 sm:pb-3  '>
                    <div className=' w-[80%] flex my-0 mx-[auto]  gap-[140px] lg:gap-[90px] md:gap-[50px] md:mt-[40px] md:w-[95%] sm:flex-col sm:items-center '>
                    <div>
                        <Image src="/logo copy.svg" alt="logo" width={121} height={33}/>
                    </div> 

                    <div className="flex w-[100%] items-start justify-between gap-[30px] text-[18px] font-[500 ] sm:flex-col sm:items-center ">
                        <div className=" flex flex-col gap-[10px]  sm:items-center" >
                            <h2 className="text-white mb-[10px] ">Features</h2>
                            <p className="text-[#bfbfbf] hover:text-[#2acfcf] cursor-pointer">Link Shortening</p>
                            <p className="text-[#bfbfbf] hover:text-[#2acfcf] cursor-pointer">Branded Links</p>
                            <p className="text-[#bfbfbf] hover:text-[#2acfcf] cursor-pointer">Analytics</p>
                        </div>
                        <div className=" flex flex-col gap-[10px]  sm:items-center " >
                            <h2 className="text-white  mb-[10px]">Resources</h2>
                            <p className="text-[#bfbfbf] hover:text-[#2acfcf] cursor-pointer">Blog</p>
                            <p className="text-[#bfbfbf] hover:text-[#2acfcf] cursor-pointer">Developers</p>
                            <p className="text-[#bfbfbf] hover:text-[#2acfcf] cursor-pointer">Support</p>
                        </div>
                        <div className=" flex flex-col gap-[10px]  sm:items-center " >
                            <h2 className="text-white mb-[10px] ">Company</h2>
                            <p className="text-[#bfbfbf] hover:text-[#2acfcf] cursor-pointer">About</p>
                            <p className="text-[#bfbfbf] hover:text-[#2acfcf] cursor-pointer">Our Team</p>
                            <p className="text-[#bfbfbf] hover:text-[#2acfcf] cursor-pointer">Careers</p>
                            <p className="text-[#bfbfbf] hover:text-[#2acfcf] cursor-pointer">Contact</p>
                        </div>

                        <div className=" flex gap-[20px] items-center cursor-pointer sm:justify-center" >
                            <Image src="/icon-facebook.svg" alt="facebook" width={24} height={24} />
                            <Image src="/icon-twitter.svg" alt="twitter" width={24} height={20}/>
                            <Image src="/icon-pinterest.svg" alt="pinterest" width={24} height={24} />
                            <Image src="/icon-instagram.svg" alt="instagram" width={24} height={24} />
                        </div>
                    </div>
                </div>
            </footer>
    )
}