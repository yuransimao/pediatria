import React,{useState} from 'react'

import { ContainerSignup} from './components/containerSignup'
import { ContainerLogin } from './components/containerLogin'
import { motion } from "framer-motion";

function ScrenSign() {
  const [AnimationSign, setAnimationSign] = useState(true)
 
  const variants = {
    initial: { opacity: 0, x: AnimationSign ? 100 : -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: AnimationSign ? -100 : 100 },
  };

  return (
    <React.Fragment>
      <div className='h-svh w-full overflow-hidden'>
      <motion.div
        key={AnimationSign ? "ContainerLogin-1" : "ContainerSignup-2"} 
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }} // Duração da animação
        className='w-full h-full'
      >
        {AnimationSign ? (
          <ContainerLogin setAnimationSign={setAnimationSign} />
        ) : (
          <ContainerSignup setAnimationSign={setAnimationSign} />
        )}
      </motion.div>
      </div>
      
    </React.Fragment>
  );
}

export {ScrenSign }