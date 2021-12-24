import { useContext } from 'react'
import {
    PlanetsContext,
    PlanetsIndexContext,
    TopicContext
  } from '../../../../contexts'

export const PlanetsImages = () => {
    const { currentPlanetIndex } = useContext(PlanetsIndexContext)
    const { planets } = useContext(PlanetsContext)
    const { topic } = useContext(TopicContext)
    
    return (
        <section className='relative xl:col-span-2'>
            <img
                src={
                    topic === 'internal' ?
                    planets[currentPlanetIndex].images?.internal!
                    : planets[currentPlanetIndex].images?.overview!
                }
                className='object-scale-down w-full h-72 md:h-[500px]'
            />
                {
                    topic === 'geology' &&
                    <img
                        src={planets[currentPlanetIndex].images?.geology!}
                        className='
                        absolute left-10 md:left-32 lg:left-56 xl:left-52
                        bottom-5 w-1/6 md:bottom-14 lg:bottom-5 xl:bottom-10
                        transform rotate-45
                    '/>
                }
        </section>
    )
}
