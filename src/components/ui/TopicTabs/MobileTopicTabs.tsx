import { motion } from 'framer-motion'
import { useContext } from 'react'
import {
    PlanetsContext,
    PlanetsIndexContext,
    TopicContext
} from '../../../contexts'

export const MobileTopicTabs = () => {
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
        <ul className='
            grid grid-cols-3 justify-items-center items-center
            text-gray-500 font-extrabold uppercase text-center
            text-xs tracking-wider leading-3
            md:hidden
        '>
            <li
                onClick={ setOverview }
                className={`m-0 p-6 mt-3 w-full border-b-2 relative
                ${topic === 'overview' && 'text-white'}`}>
                Overview
                {
                    topic === 'overview' &&
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`
                        w-full h-1.5 absolute bottom-0 left-0
                        bg-${planets[currentPlanetIndex].name}
                    `}></motion.span>
                }
            </li>
            <li
                onClick={ setInternal }
                className={`m-0 p-6 border-b-2 relative
                ${topic === 'internal' && 'text-white'}
                `}>
                Internal Structure
                {
                    topic === 'internal' &&
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`
                        w-full h-1.5 absolute bottom-0 left-0
                        bg-${planets[currentPlanetIndex].name}
                    `}></motion.span>
                }
            </li>
            <li
                onClick={ setGeology }
                className={`m-0 p-6 border-b-2 relative
                ${topic === 'geology' && 'text-white'}
                `}>
                Surface Geology
                {
                    topic === 'geology' &&
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`
                        w-full h-1.5 absolute bottom-0 left-0
                        bg-${planets[currentPlanetIndex].name}
                    `}></motion.span>
                }
            </li>
        </ul>
    )
}
