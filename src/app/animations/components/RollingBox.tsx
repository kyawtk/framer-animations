import { motion, useAnimationControls } from 'framer-motion'
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
      variants={{
        off: { backgroundColor: "red" , rotate: 0, translateX: 0, translateY: 0},
        on: { backgroundColor: "blue"  , rotate: 180 , translateX: 500, },
      }}
      initial='off'
      animate={control}
      className="bg-white size-32"
    ></motion.div></div>
  )
}

export default RollingBox