import { useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
    PlanetsContext,
    PlanetsIndexContext,
    TopicContext
} from '../../contexts/'

import { MobileTopicTabs } from '../ui'
import {
    PlanetsImages,
    MainContent,
    LastNumbers
} from '../ui/sections/'

export const Main = () => {
    const { currentPlanetIndex } = useContext(PlanetsIndexContext)
    const { planets } = useContext(PlanetsContext)
    const { topic } = useContext(TopicContext)
    return (
        <motion.main
            key={ planets[currentPlanetIndex].name }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <MobileTopicTabs />
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={ topic }
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='
                        w-full h-72
                        flex-row justify-center items-center
                        md:h-[500px] container m-auto p-4 md:p-10
                    '>
                        <div className='
                            xl:grid xl:grid-cols-3 xl:items-center
                        '>
                            <PlanetsImages />
                            <MainContent />
                        </div>
                            <LastNumbers />
                    </motion.div>
                </AnimatePresence>
        </motion.main>
    )
}
