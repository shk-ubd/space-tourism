import { createContext, useContext } from "react";


export const spaceContext = createContext({
    destinations: [],
    crew: [],
    technology: [],
}
)

export const useSpaceContext = () => {
    return useContext(spaceContext)
}

export const ContextProvider = spaceContext.Provider