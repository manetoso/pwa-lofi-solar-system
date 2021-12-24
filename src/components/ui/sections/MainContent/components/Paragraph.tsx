import { useContext } from 'react'
import {
    PlanetsContext,
    PlanetsIndexContext,
    TopicContext
} from '../../../../../contexts'

export const Paragraph = () => {
    const { currentPlanetIndex } = useContext(PlanetsIndexContext)
    const { planets } = useContext(PlanetsContext)
    const { topic } = useContext(TopicContext)
    
    return (
        <>
            <p
                className='
                text-gray-300 text-center text-sm xl:text-base
                leading-relaxed md:text-left
            '>
                {
                    topic === 'overview' ?
                    planets[currentPlanetIndex].overview?.content
                    : topic === 'internal' ?
                    planets[currentPlanetIndex].internal?.content
                    : planets[currentPlanetIndex].geology?.content
                }.
            </p>
        </>
    )
}
