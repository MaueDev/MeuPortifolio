import './App.css';
import TagManager from 'react-gtm-module'

import * as React from "react";
import { motion } from "framer-motion";
/* IMG*/
import ProfileImg from  '../../img/profile.jpg'; 

import LinkedinImg from  '../../img/socialmidia/LinkedIn.jpg';
import GithubImg from  '../../img/socialmidia/GitHub.png';
import TwitterImg from  '../../img/socialmidia/twitter.jpg';
import InstagramImg from  '../../img/socialmidia/instagram.png';
import FacebookImg from  '../../img/socialmidia/facebook.jpg';
import WhatsappImg from  '../../img/socialmidia/whatsapp.jpg';
/* IMG*/
/* Componente*/
import LiTradu from "../../componentes/LiTradu"
import MidiaSocial from '../../componentes/SocialMidia';
/* Componente*/
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
var Tradu = PortuguesBr;


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

const tagManagerArgs = {
  gtmId: 'GTM-KQ3KXMT'
};

function App() {
  TagManager.initialize(tagManagerArgs)
  return (
    <div className="App">
      <header className='Menu'>
        <div className='MenuDivider'></div>
        <div className='MenuContent'>
          <motion.div className='MenuLogo' initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{type: "spring",stiffness: 260,damping: 20}}>
            <img src={ProfileImg} alt='Foto de Perfil'/>
          </motion.div>
          <motion.div className='MenuDescription' variants={container} initial="hidden" animate="visible">
            <motion.h1 variants={item}>Mauricio Rodrigues</motion.h1>
          </motion.div>
        </div>
        <div className='Main'>
          <div className='Flags'>
           <LiTradu>
           </LiTradu >
           <button onClick={() => window.open('/CurricMauricioRodrigues.pdf', '_blank')} download id="BtnDownload">Baixar Currículo</button>
          </div>
          <motion.div className='topicContent' variants={container} initial="hidden" animate="visible">
            <motion.div className='topicItem' variants={item}>
              <p id='Bio'>
                {Tradu.Bio}
              </p>
            </motion.div>

            <motion.div className='topicItem' variants={item}>
              <h4 id="Local">Localização:</h4>
              <p id='LocalContant' >Brazil, Votuporanga - SP.</p>
            </motion.div>
            <motion.div className='topicItem' variants={item}>
              <h4 id='FormacaoTitle'>Formação:</h4>
              <p id='FormacaoContent'>Cursando Analise e Desenvonvimento de Sistema.</p>
              <small id='FormacaoSmall'>Universidade Estácio de Sá</small>
            </motion.div>
            <motion.div className='topicItem' variants={item}>
              <h4 id="TrabalhoTile">Trabalho:</h4>
              <p id="TrabalhoContent">Desenvolvedor Web Jr</p>
              <small id="TrabalhoSmall">UPPER Softwares</small>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className='MidiaSocial' variants={container} initial="hidden" animate="visible">
          <motion.h2 variants={item}>Midias Sociais:</motion.h2>
          <motion.div className='MidiaContent'>
            <MidiaSocial URLBLANK='https://www.linkedin.com/in/mauricio-rodrigues-mauedev/' IMGSRC={LinkedinImg} IMGALT="Linkedin"/>
            <MidiaSocial URLBLANK='https://github.com/MaueDev' IMGSRC={GithubImg} IMGALT="GitHub"/>
            <MidiaSocial URLBLANK='https://twitter.com/MaueDev' IMGSRC={TwitterImg} IMGALT="Twitter"/>
            <MidiaSocial URLBLANK='https://www.instagram.com/mauricio_rodrigues_21/' IMGSRC={InstagramImg} IMGALT="Instagram"/>
            <MidiaSocial URLBLANK='https://www.facebook.com/maue.mauriciorodrigues/' IMGSRC={FacebookImg} IMGALT="Facebook"/>
            <MidiaSocial URLBLANK='https://api.whatsapp.com/send?phone=5534999914803&text=Oe%20vim%20atrav%C3%A9s%20do%20seu%20portifolio' IMGSRC={WhatsappImg} IMGALT="Whatsapp"/>
          </motion.div>
        </motion.div>
        
      </header>
    </div>
  );
}

export default App;
