import { useContext } from 'react'
import {
    PlanetsContext,
    PlanetsIndexContext,
    TopicContext
} from '../../../../../contexts'

export const TopicDesktopTabs = () => {
    const { currentPlanetIndex } = useContext(PlanetsIndexContext)
    const { planets } = useContext(PlanetsContext)
    const { topic, setTopic } = useContext(TopicContext)

    const setOverview = () => {
        setTopic({ topic: 'overview' })
    }
    const setInternal = () => {
        setTopic({ topic: 'internal' })
    }
    const setGeology = () => {
        setTopic({ topic: 'geology' })
    }

    return (
        <ul className='md:flex w-full md:flex-col
            justify-center items-end space-y-4
        '>
            <li
                onClick={ setOverview }
                className={`uppercase w-[270px] text-left
                    py-3 px-5 text-xs font-semibold tracking-widest border-[1px]
                    border-gray-700 cursor-pointer xl:w-full xl:text-sm
                    transition-all ease-in-out duration-300
                    transform hover:scale-95
                    ${ topic === 'overview' ?
                    `bg-${planets[currentPlanetIndex].name} border-transparent`
                    : 'hover:bg-slate-600'}`}
            >
                <strong className='text-neutral-400 mr-5'>01</strong>Overview
            </li>
            <li
                onClick={ setInternal }
                className={`uppercase w-[270px] text-left
                    py-3 px-5 text-xs font-semibold tracking-widest border-[1px]
                    border-gray-700 cursor-pointer xl:w-full xl:text-sm
                    transition-all ease-in-out duration-300
                    transform hover:scale-95
                    ${ topic === 'internal' ?
                    `bg-${planets[currentPlanetIndex].name} border-transparent`
                    : 'hover:bg-slate-600'}`}
            >
                <strong className='text-neutral-400 mr-5'>02</strong>Internal Structure
            </li>
            <li
                onClick={ setGeology }
                className={`uppercase w-[270px] text-left
                    py-3 px-5 text-xs font-semibold tracking-widest border-[1px]
                    border-gray-700 cursor-pointer xl:w-full xl:text-sm
                    transition-all ease-in-out duration-300
                    transform hover:scale-95
                    ${ topic === 'geology' ?
                    `bg-${planets[currentPlanetIndex].name} border-transparent`
                    : 'hover:bg-slate-600'}`}
            >
                <strong className='text-neutral-400 mr-5'>03</strong>Surface Geology
            </li>
        </ul>
    )
}
