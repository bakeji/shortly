"use client"
import AdvStat from "@/components/advStat";
import Boost from "@/components/boost";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import NavModal from "@/components/navModal";
import Shorten from "@/components/shorten";
import { PageContext } from "@/context/pageContext";
import { useState } from "react";

export default function Home(){
  const [showMobileNav, setShowMobileNav] = useState(false)

  // show mobile nav button
  const showMobileNavButton = () => {
    setShowMobileNav(prev=>!prev)
  }




  return(
    <PageContext.Provider value={{showMobileNavButton, showMobileNav}}>
   <div className="home">
    <Header />
    <NavModal />
    <HeroSection />
    <div className="bg-[#eff1f7] mt-[140px] pb-[180px] box-border">
      <Shorten />
      <AdvStat/>
    </div>
    <Boost />
    <Footer/>
   </div>
   </PageContext.Provider>
  )
}