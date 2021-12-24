import { useContext } from 'react'
import {
    PlanetsContext,
    PlanetsIndexContext,
    TopicContext
} from '../../../../../contexts'

export const Source = () => {
    const { currentPlanetIndex } = useContext(PlanetsIndexContext)
    const { planets } = useContext(PlanetsContext)
    const { topic } = useContext(TopicContext)
    return (
        <span
            className='
            text-gray-500 text-sm mt-5 xl:text-base
            flex flex-row justify-center md:justify-start items-center
        '>
            Source: <a
                target='_blank'
                className='
                underline font-bold text-white
                flex flex-row ml-1 items-center
                hover:decoration-sky-500
                transition-all ease-in-out duration-300'
                href={ 
                    topic === 'overview' ?
                    planets[currentPlanetIndex].overview?.source
                    : topic === 'internal' ?
                    planets[currentPlanetIndex].internal?.source
                    : planets[currentPlanetIndex].geology?.source
                }
                rel="noreferrer"
            >
                Wikipedia
                <svg 
                    className="w-5 h-5 hover:text-sky-500
                    transition-all ease-in-out duration-300"
                    fill="none"stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                    </path>
                </svg>
            </a>
        </span>
    )
}
