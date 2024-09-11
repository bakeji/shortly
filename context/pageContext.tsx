"use client"
import { createContext } from "react";

export type PageContextType = {
    showMobileNavButton : ()=>void,
    showMobileNav: boolean
}

export const PageContext = createContext<PageContextType>({
    showMobileNavButton: ()=>{},
    showMobileNav: false,
})
