import { useContext } from 'react'
import { AnimatePresence } from 'framer-motion'

import {
  PlanetsContext,
} from '../contexts/'

import { Navbar } from '../components/ui/Navbar/Navbar'
import { LoadingComponent } from '../components/ui'
import { Main } from '../components/Main/Main'

const Home = () => {
  const { planets } = useContext(PlanetsContext)
  return (
    <>
      {
        planets.length > 0 ? (
          <div className='min-h-screen'>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Main />
            </AnimatePresence>
          </div>
        ) : (
          <LoadingComponent />
        )
      }
    </>
  )
}

export default Home
