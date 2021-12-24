import { createContext, useState, Dispatch, SetStateAction } from "react"

interface Props {
    currentPlanetIndex: number,
    setCurrentPlanetIndex: Dispatch<SetStateAction<number>>
}

export const PlanetsIndexContext = createContext<Props>({
    currentPlanetIndex: 0,
    setCurrentPlanetIndex: () => {}
})

export const PlanetsIndexContextProvider = ( props:any ) => {
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0)
    return (
        <PlanetsIndexContext.Provider value={{ currentPlanetIndex, setCurrentPlanetIndex }}>
            { props.children }
        </PlanetsIndexContext.Provider>
    )
}
