import * as React from "react";
import { motion } from "framer-motion";

    function MidiaSocial(props)
    {
        return ( <motion.div onClick={() => window.open(props.URLBLANK, '_blank')} className='MidiaItem' initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{type: "spring",stiffness: 300,damping: 50}}>
                     <img src={props.IMGSRC} alt={props.IMGALT}/>
                </motion.div>)
    }


export default MidiaSocial