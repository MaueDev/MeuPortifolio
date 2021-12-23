import './App.css';
import * as React from "react";
import { motion } from "framer-motion";
/* IMG*/
import ProfileImg from  '../../img/profile.jpg'; 
import BrazilLing from  '../../img/flags/brasil.jpg';
import InglishLing from  '../../img/flags/espanhol.png';
import SpanishLing from  '../../img/flags/inglish.jpg';
import LinkedinImg from  '../../img/socialmidia/LinkedIn.jpg';
import GithubImg from  '../../img/socialmidia/GitHub.png';
/* IMG*/

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
          <div className='topicContent'>
            <div className='topicItem'>
              <p>
                Oi! Eu sou Mauricio Rodrigues conhecido como MAUE. Brasileiro apaixonado por Desenvolvimento WEB.
              </p>
            </div>

            <div className='topicItem'>
              <h4>Localização:</h4>
              <p>Brazil, Minas Gerais.</p>
            </div>
            <div className='topicItem'>
              <h4>Formação:</h4>
              <p>Cursando Analise e desenvonvimento de Sistema.<br></br><small>Universidade Estácio de Sá</small></p>
            </div>
            <div className='topicItem'>
              <h4>Trabalho:</h4>
              <p>Analista de Suporte ERP || Desenvolvedor Web.<br></br><small>Expert Sistemas</small></p>
            </div>
          </div>
        </div>
        <div className='MidiaSocial'>
          <h2>Midias Sociais:</h2>
          <div className='MidiaContent'>
            <div className='MidiaItem'>
              <img src={LinkedinImg}/>
            </div>
            <div className='MidiaItem'>
              <img src={GithubImg}/>
            </div>
            <div className='MidiaItem'></div>
            <div className='MidiaItem'></div>
            <div className='MidiaItem'></div>
            <div className='MidiaItem'></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
