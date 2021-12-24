import { createContext, useState, Dispatch, SetStateAction, useEffect } from "react"

import { querySnapshot } from '../utils/firebase-config'
import { PlanetsInterface } from "../interfaces/PlanetsInterface"

interface Props {
    planets: PlanetsInterface[],
    setPlanets: Dispatch<SetStateAction<PlanetsInterface[]>>
}

export const PlanetsContext = createContext<Props>({
    planets: [
        {
            id: 0,
        }
    ],
    setPlanets: () => {}
})

export const PlanetsContextProvider = ( props:any ) => {
    const [planets, setPlanets] = useState<PlanetsInterface[]>([])

    useEffect(() => {
        querySnapshot.then( ({ docs }) => {
          const planetsInfo:any = []
          docs.map( ( doc, index ) => {
            planetsInfo.push({ ...doc.data(), id: index })
          })
          setPlanets( planetsInfo )
        })
    }, [])

    return (
        <PlanetsContext.Provider value={{ planets, setPlanets }}>
            { props.children }
        </PlanetsContext.Provider>
    )
}