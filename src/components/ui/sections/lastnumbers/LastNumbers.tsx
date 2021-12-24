import { useContext } from 'react'
import {
    PlanetsContext,
    PlanetsIndexContext
  } from '../../../../contexts/'

export const LastNumbers = () => {
    const { currentPlanetIndex } = useContext(PlanetsIndexContext)
    const { planets } = useContext(PlanetsContext)

    return (
        <section className='
            mt-10 flex flex-col space-y-2 pb-10
            md:grid md:grid-cols-4 md:gap-2 md:space-y-0
            xl:gap-10'
        >
            <div className='
                flex flex-row justify-between items-center
                border-[1px] border-gray-700
                p-6 md:flex-col md:items-start
                transition-all ease-in-out duration-300
                transform hover:cursor-default hover:scale-95
                hover:bg-slate-600
            '>
                <p
                    className='
                    uppercase text-zinc-500
                    font-extrabold tracking-widest
                    text-xs xl:text-sm md:pb-4'
                >
                    Rotation Time
                </p>
                <h1
                    className='
                    uppercase text-white
                    font-semibold tracking-tighter
                    text-lg xl:text-3xl'
                >
                    {planets[currentPlanetIndex].rotation} hours
                </h1>
            </div>
            <div className='
                flex flex-row justify-between items-center
                border-[1px] border-gray-700
                p-6 md:flex-col md:items-start
                transition-all ease-in-out duration-300
                transform hover:cursor-default hover:scale-95
                hover:bg-slate-600
            '>
                <p
                className='
                    uppercase text-zinc-500
                    font-extrabold tracking-widest
                    text-xs xl:text-sm md:pb-4'
                >
                    Revolution Time
                </p>
                <h1
                className='
                    uppercase text-white
                    font-semibold tracking-tighter
                    text-lg xl:text-3xl'
                >
                    {planets[currentPlanetIndex].revolution} years
                </h1>
            </div>
            <div className='
                flex flex-row justify-between items-center
                border-[1px] border-gray-700
                p-6 md:flex-col md:items-start
                transition-all ease-in-out duration-300
                transform hover:cursor-default hover:scale-95
                hover:bg-slate-600
            '>
                <p
                className='
                    uppercase text-zinc-500
                    font-extrabold tracking-widest
                    text-xs xl:text-sm md:pb-4'
                >
                    Radius
                </p>
                <h1
                className='
                    uppercase text-white
                    font-semibold tracking-tighter
                    text-lg xl:text-3xl'
                >
                    {planets[currentPlanetIndex].radius} km
                </h1>
            </div>
            <div className='
                flex flex-row justify-between items-center
                border-[1px] border-gray-700
                p-6 md:flex-col md:items-start
                transition-all ease-in-out duration-300
                transform hover:cursor-default hover:scale-95
                hover:bg-slate-600
            '>
                <p
                className='
                    uppercase text-zinc-500
                    font-extrabold tracking-widest
                    text-xs xl:text-sm md:pb-4'
                >
                    Average temp.
                </p>
                <h1
                className='
                    uppercase text-white
                    font-semibold tracking-tighter
                    text-lg xl:text-3xl'
                >
                    {planets[currentPlanetIndex].temperature} °C
                </h1>
            </div>
        </section>
    )
}
