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
import TwitterImg from  '../../img/socialmidia/twitter.jpg';
import InstagramImg from  '../../img/socialmidia/instagram.png';
import FacebookImg from  '../../img/socialmidia/facebook.jpg';
import WhatsappImg from  '../../img/socialmidia/whatsapp.jpg';
/* IMG*/
const PortuguesBr =
{
  Bio: "Oi! Eu sou Mauricio Rodrigues conhecido como MAUE. Brasileiro apaixonado por Desenvolvimento WEB.",
  Local : {
    Title: "Localização:",
    Body: "Brazil, Minas Gerais."
  },
  studies:
  {
    Title: "Formação:",
    Body: "Cursando Analise e Desenvonvimento de Sistema.",
    Small:"Universidade Estácio de Sá"
  },
  work:
  {
    Title: "Trabalho:",
    Body: "Analista de Suporte ERP || Desenvolvedor Web.",
    Small: "Expert Sistemas"
  }
}

const Ingles =
{
  Bio: "Hi! i am Mauricio Rodrigues known as Maue, Brazilian in love with Web Development and information Technology",
  Local : {
    Title: "Location:",
    Body: "Brazil, Minas Gerais."
  },
  studies:
  {
    Title: "Education:",
    Body: "Studying systems analysis and development.",
    Small:"University Estácio de Sá"
  },
  work:
  {
    Title: "Work:",
    Body: "Support Analyst ERP || Web Development.",
    Small: "Expert Sistemas"
  }
}

const Espanhol =
{
  Bio: "¡Hola! Soy Mauricio Rodrigues conocido como MAUE. Brasileño enamorado de la programación WEB ",
  Local : {
    Title: "localización:",
    Body: "Brazil, Minas Gerais."
  },
  studies:
  {
    Title: "Educación:",
    Body: "Estudiando tecnología en Análisis y Desarrollo de Sistemas de Información.",
    Small:"Universidad Estácio de Sá"
  },
  work:
  {
    Title: "Trabajo:",
    Body: "Analista de soporte ERP  || Desarrollo web.",
    Small: "Expert Sistemas"
  }
}
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
          <motion.div className='MenuDescription' variants={container} initial="hidden" animate="visible">
            <motion.h1 variants={item}>Mauricio Rodrigues</motion.h1>
          </motion.div>
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
          <motion.div className='topicContent' variants={container} initial="hidden" animate="visible">
            <motion.div className='topicItem' variants={item}>
              <p>
                Oi! Eu sou Mauricio Rodrigues conhecido como MAUE. Brasileiro apaixonado por Desenvolvimento WEB.
              </p>
            </motion.div>

            <motion.div className='topicItem' variants={item}>
              <h4>Localização:</h4>
              <p>Brazil, Minas Gerais.</p>
            </motion.div>
            <motion.div className='topicItem' variants={item}>
              <h4>Formação:</h4>
              <p>Cursando Analise e Desenvonvimento de Sistema.<br></br><small>Universidade Estácio de Sá</small></p>
            </motion.div>
            <motion.div className='topicItem' variants={item}>
              <h4>Trabalho:</h4>
              <p>Analista de Suporte ERP || Desenvolvedor Web.<br></br><small>Expert Sistemas</small></p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className='MidiaSocial' variants={container} initial="hidden" animate="visible">
          <motion.h2 variants={item}>Midias Sociais:</motion.h2>
          <motion.div className='MidiaContent'>
            <motion.div className='MidiaItem' initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{type: "spring",stiffness: 300,damping: 50}}>
              <img src={LinkedinImg}/>
            </motion.div>
            <motion.div className='MidiaItem' initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{type: "spring",stiffness: 300,damping: 50}}>
              <img src={GithubImg}/>
            </motion.div>
            <motion.div className='MidiaItem' initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{type: "spring",stiffness: 300,damping: 50}}>
              <img src={TwitterImg}/>
            </motion.div>
            <motion.div className='MidiaItem' initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{type: "spring",stiffness: 300,damping: 50}}>
              <img src={InstagramImg}/>
            </motion.div>
            <motion.div className='MidiaItem' initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{type: "spring",stiffness: 300,damping: 50}}>
              <img src={FacebookImg}/>
            </motion.div>
            <motion.div className='MidiaItem' initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{type: "spring",stiffness: 300,damping: 50}}>
              <img src={WhatsappImg}/>
            </motion.div>
          </motion.div>
        </motion.div>
        
      </header>
    </div>
  );
}

export default App;
