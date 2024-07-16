import { cubicBezier, motion, useAnimationControls } from 'framer-motion'
import React, { useState } from 'react'

const RollingBox = () => {
    const control = useAnimationControls()
    const [done, setDone] = useState(false)
    const rollit = ()=>{

      control.start(done?"off":"on")
      setDone(prev=> !prev)

    }
  return (
    <div><button onClick={rollit}>Roll it</button>
    <motion.div
    transition={{
        type: "spring",
        damping: 10,
        mass: 0.2,
        stiffness: 150,

    }}
      variants={{
        off: { backgroundColor: "red" , rotate: 0, translateX: 0, translateY: 0},
        on: { backgroundColor: "blue"  , rotate: 90 , translateX: '100%',
         },
      }}
      initial='off'
      animate={control}
      className="bg-white size-32 rounded-3xl"
    ></motion.div></div>
  )
}

export default RollingBox
