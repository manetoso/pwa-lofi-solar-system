import { motion } from "framer-motion"
import { useContext, useState } from "react"

import { PlanetsContext , PlanetsIndexContext } from "../../../contexts/"

import { navItemVariants, navListVariants, buttonVariants } from "./variants"

export const Navbar = () => {
    const { currentPlanetIndex, setCurrentPlanetIndex } = useContext(PlanetsIndexContext)
    const { planets } = useContext(PlanetsContext)
    const [isOpen, setIsOpen] = useState(false)

    const handleFindPlanet = ( index:number ) => {
        setCurrentPlanetIndex(index)
        setIsOpen( false )
    }

    const handleMenu = () => {
        setIsOpen( !isOpen )
    }

    return (
        <>
            <div className='flex justify-between items-center p-5 text-white border-b-2 border-white md:hidden'>
                <h1 className='font-bold text-2xl tracking-tighter uppercase'>The Planets</h1>
                <button
                    onClick={ handleMenu }
                    className='z-50'
                >
                    <motion.svg animate={ isOpen ? 'open' : 'closed' } variants={ buttonVariants } className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {
                            !isOpen ?
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path>
                            :
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                        }
                    </motion.svg>
                </button>
            </div>
            <motion.nav
                initial={false}
                animate={ isOpen ? 'open' : 'closed' }
                variants={ navListVariants }
                id='nav'
                className='
                fixed top-0 right-0 z-30 w-2/3
                h-screen pt-20
                bg-slate-800 md:hidden
            '>
                <ul className='
                    p-5
                    text-white text-lg font-bold uppercase tracking-tighter
                '>
                {
                    planets?.map( (planet) => (
                    <motion.li
                        variants={ navItemVariants }
                        key={planet.name}
                        onClick={ () => handleFindPlanet( planet.id )}
                        className={`
                        ${currentPlanetIndex === planet.id && 'bg-slate-700'}
                        border-t-2 last:border-b-2 border-gray-700
                        flex justify-between items-center
                    `}>
                        <div className="flex items-center">
                            <div className={`h-5 w-5 rounded-full bg-${planet.name}`}/>
                            <h3 className="my-4 ml-5">
                                {planet.name}
                            </h3>
                        </div>
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </motion.li>
                    ))
                }
                </ul>
            </motion.nav>
            <nav
                className='
                hidden
                md:flex flex-col items-center
                xl:flex-row xl:justify-between
                xl:px-5
                border-b-2 border-gray-700
                container m-auto
            '>
                <h1
                    className="
                    text-white font-bold uppercase text-2xl tracking-tighter
                    p-5
                ">
                    The Planets
                </h1>
                <ul className='
                    flex flex-row
                    text-white text-base font-bold uppercase tracking-tighter -mb-1
                '>
                {
                    planets?.map( (planet) => (
                    <motion.li
                        variants={ navItemVariants }
                        key={planet.name}
                        onClick={ () => handleFindPlanet( planet.id )}
                        className={`
                        border-b-4 border-transparent
                        transition-all ease-in-out duration-300
                    `}>
                        <div className="flex flex-col xl:flex-col-reverse">
                            <h3 className="px-4 py-7 cursor-pointer">
                                {planet.name}
                            </h3>
                            {
                                currentPlanetIndex === planet.id &&
                                <motion.div
                                    key={ planet.name }
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className={`
                                    bg-${planet.name}
                                    h-1 w-full
                                `}/>
                            }
                        </div>
                    </motion.li>
                    ))
                }
                </ul>
            </nav>
        </>
    )
}
