import { motion } from 'framer-motion'

export const LoadingComponent = () => {
    return (
        <div className='flex justify-center items-center mt-[50vh] text-white space-x-2'>
            <motion.div initial={{ y: -5 }} animate={{ y: [-5,0,0,0,-5] }} transition={{ duration: 1, repeat: Infinity }} className='h-5 w-5 rounded-full bg-white'/>
            <motion.div initial={{ y: 0 }} animate={{ y: [0,-5,0,-5,0] }} transition={{ duration: 1, repeat: Infinity }} className='h-5 w-5 rounded-full bg-white'/>
            <motion.div initial={{ y: 0 }} animate={{ y: [0,0,-5,0,0] }} transition={{ duration: 1, repeat: Infinity }} className='h-5 w-5 rounded-full bg-white'/>
        </div>
    )
}
