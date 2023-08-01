import { createContext, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';


export const MediaContext = createContext({
    isMobile: false
})

export const MediaProvider = ({ children }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const [currentMedia, setCurrentMedia] = useState({
        isMobile: isMobile
    })
    const value = { currentMedia, setCurrentMedia}
    
    return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
}