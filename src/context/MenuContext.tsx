import React, { createContext, useState } from "react";


type ContextProps = {
    isMenuOpen: boolean,
    menuToggle: () => void
}

type MenuProviderProps = {
    children: React.ReactNode
}

export const MenuContext = createContext({} as ContextProps)


export function MenuProvider({children}:MenuProviderProps ){

    const [isMenuOpen, setMenuOpen] = useState(true)

    function menuToggle(){
        setMenuOpen(!isMenuOpen)
    }

    return (
        <MenuContext.Provider value={{isMenuOpen, menuToggle}}>
            {children}
        </MenuContext.Provider>
    )

}

