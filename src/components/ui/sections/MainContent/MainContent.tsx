import { useContext } from 'react'
import {
    PlanetsContext,
    PlanetsIndexContext,
    TopicContext
  } from '../../../../contexts'

import {
    Paragraph,
    Source,
    TopicDesktopTabs,
} from './components'

export const MainContent = () => {
    const { currentPlanetIndex } = useContext(PlanetsIndexContext)
    const { planets } = useContext(PlanetsContext)
    const { topic, setTopic } = useContext(TopicContext)
    return (
        <section className='
            md:grid md:grid-cols-2 items-center mt-10
            xl:flex xl:flex-col xl:mt-0
        '>
            <div className='md:flex-col'>
                <Paragraph />
                <Source />
            </div>
            <nav className='hidden md:flex text-white xl:w-full xl:mt-10'>
                <TopicDesktopTabs />
            </nav>
        </section>
    )
}
