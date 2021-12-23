import './App.css';
import * as React from "react";
import { motion } from "framer-motion";
import ProfileImg from  '../../img/profile.jpg'; 
import BrazilLing from  '../../img/flags/brasil.jpg';
import InglishLing from  '../../img/flags/espanhol.png';
import SpanishLing from  '../../img/flags/inglish.jpg';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};


const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function App() {
  return (
    <div className="App">
      <header className='Menu'>
        <div className='MenuDivider'></div>
        <div className='MenuContent'>
          <motion.div className='MenuLogo' initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{type: "spring",stiffness: 260,damping: 20}}>
            <img src={ProfileImg}/>
          </motion.div>
          <div className='MenuDescription'>
            <h1>Mauricio Rodrigues</h1>
          </div>
        </div>
        <div className='Main'>
          <div className='Flags'>
            <motion.ul className='FlagContent'
              variants={container}
              initial="hidden"
              animate="visible"
            >
                <motion.li className="itemFlag" variants={item} >
                  <img src={BrazilLing} alt='Traduzir Para portugues brasil' />
                </motion.li>
                <motion.li className="itemFlag" variants={item} >
                  <img src={InglishLing} alt='Traduzir Para Ingles' />
                </motion.li>
                <motion.li className="itemFlag" variants={item} >
                  <img src={SpanishLing} alt='Traduzir Para Espanhol' />
                </motion.li>
            </motion.ul>
          </div>
          <div>
          <div className='topicItem'>
            <p>
              Oe sou o Maue Oe sou o Maue Oe sou o Maue Oe sou o Maue
              Oe sou o Maue
              Oe sou o Maue
              Oe sou o Maue
              Oe sou o Maue
            </p>
          </div>

            <div className='topicItem'>
              <h4>Location:</h4>
              <p>lore</p>
            </div>
            <div className='topicItem'></div>
            <div className='topicItem'></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
