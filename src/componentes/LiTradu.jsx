import React, { Component } from "react";
import { motion } from "framer-motion";
import BrazilLing from  '../img/flags/brasil.jpg';
import InglishLing from  '../img/flags/espanhol.png';
import SpanishLing from  '../img/flags/inglish.jpg';

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
var Tradu;
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
  
class LiTradu extends Component {
  AlterarBio(event)
  {
      
    let Bio             = document.querySelector("#Bio");
    let LocalTitle      = document.querySelector("#Local");
    let LocalContent    = document.querySelector("#LocalContant");
    let FormacaoTitle   = document.querySelector("#FormacaoTitle");
    let FormacaoContent = document.querySelector("#FormacaoContent");
    let FormacaoSmall   = document.querySelector("#FormacaoSmall");
    let TrabalhoTitle   = document.querySelector("#TrabalhoTile");
    let TrabalhoContent = document.querySelector("#TrabalhoContent");
    let TrabalhoSmall   = document.querySelector("#TrabalhoSmall");

    Bio.textContent             = event.Bio;
    LocalTitle.textContent      = event.Local.Title;
    LocalContent.textContent    = event.Local.Body;
    FormacaoTitle.textContent   = event.studies.Title;
    FormacaoContent.textContent = event.studies.Body;
    FormacaoSmall.textContent   = event.studies.Small
    TrabalhoTitle.textContent   = event.work.Title;
    TrabalhoContent.textContent = event.work.Body;
    TrabalhoSmall.textContent   = event.work.Small;
  }
  Traducao(event)
   {
        switch(event)
        {
            case 'Portugues':
                console.log("Traduzindo para o Portugues")
                this.AlterarBio(PortuguesBr);
            break;
            case 'Ingles':
                console.log("Traduzindo para o Ingles")
                this.AlterarBio(Ingles);
            break;
            case 'Espanhol':
                this.AlterarBio(Espanhol);
            break;
            default:
                this.AlterarBio(PortuguesBr);
            break;
        }
    }

  render() {
    return  (<motion.ul className='FlagContent' variants={container} initial="hidden" animate="visible">
      <motion.li className="itemFlag" variants={item} onClick={() => this.Traducao("Portugues")}  >
        <img src={BrazilLing} alt='Traduzir Para portugues brasil' />
      </motion.li>
      <motion.li className="itemFlag" variants={item} onClick={() => this.Traducao("Ingles")} >
        <img src={InglishLing} alt='Traduzir Para Ingles' />
      </motion.li>
      <motion.li className="itemFlag" variants={item} onClick={() => this.Traducao("Espanhol")} >
        <img src={SpanishLing} alt='Traduzir Para Espanhol' />
      </motion.li>
  </motion.ul>);
  }
}


export {LiTradu as default}

