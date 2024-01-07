import { createContext, useContext } from "react";


export const spaceContext = createContext({
    destinations: [],
    crew: [],
    technology: [],
    navigationDisplay: false,
    hamburgerDisplay: true,
    showNavigation: () => {},
    hideNavigation: () => {},
}
)

export const useSpaceContext = () => {
    return useContext(spaceContext)
}

export const ContextProvider = spaceContext.Provider