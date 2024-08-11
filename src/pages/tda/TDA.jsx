import React, {useEffect} from "react";
import Header from "../../components/header/Header";
import styles from "./TDA.module.css";
import Calmigo from "../../assets/calmigo.png";
import Footer from "../../components/footer/Footer";
import QuebraCabecaIcon from '../../assets/quebra_cabeca.png'
import Slide10 from '../../assets/slide10.png'
import Slide13 from '../../assets/slide13.png'
import ScrollReveal from "scrollreveal";

export default function TDA() {
  // useEffect(() => {
  //   const sr = ScrollReveal();

  //   sr.reveal('.reveal', {
  //     duration: 1000,
  //     distance: '50px',
  //     easing: 'ease-out',
  //     origin: 'bottom',
  //     reset: true
  //   });
  // }, []);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>O Calmigo tem um desafio para você</h1>
        <div className={styles.container_tda}>
          {/* Início do game */}
          <div className={styles.iconGame}>
            <a href="https://www.jspuzzles.com/en/person/1015859?key=433c672645&size=&cut=&scale=" target="_blank">
              <img src={QuebraCabecaIcon} alt="Quebra Cabeça Icon" />
              <div className={styles.button_jogar2}>
                <p>Jogar</p>
              </div>
            </a>
          </div>

          {/* Fim do game */}
          <div className={styles.mascote_tda}>
            <img src={Calmigo} alt="mascote" />
          </div>
        </div>

        <div className={`${styles.title_subtitle} reveal`}>
          <h2>TDA</h2>
          <h3>CAUSA E SINTOMAS</h3>
        </div>
      </div>

      {/* <!--Slide 1--> */}
      <div className={styles.baloes}>
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={`${styles.quadrado} reveal`}>
        <p>
          OLÁ COLABORADOR OU COLABORADORA, COMO VAI ESSA VIDA? E ESSA CABECINHA?
        </p>
      </div>
      {/* <!--Fim do Slide 1--> */}

      {/* <!--Slide 2--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={`${styles.quadrado} reveal`}>
        <p>
          BOM, PRA VOCÊ ESTAR AQUI LENDO ISSO, SIGINIFICA QUE ALGUMA COISA ESTÁ
          FORA DO LUGAR, CERTO?
        </p>
      </div>
      {/* <!--Fim do Slide 2--> */}

      {/* <!--Slide 9--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={`${styles.quadrado14} reveal`}>
        <p>
            O TDA É UMA SÍNDROME,
             ONDE A CARACTERÍSTICA PRINCIPAL É A DESATENÇÃO E A DIFICULDADE EM SE CONCENTRAR. ESSA CONDIÇÃO COSTUMA APARECER AINDA NA INFÂNCIA, 
             DIFICULTANDO A VIDA SOCIAL DA CRIANÇA.
        </p>
      </div>
      {/* <!--Fim do Slide 9--> */}

      {/* <!--Slide 10--> */}
      <div className={styles.img_slide15}>
        <img src={Slide10} alt="img_slide15" />
      </div>

      <div className={`${styles.quadrado} reveal`}>
        <p>
            EM ADULTOS, O TRABALHO E O CONVÍVIO SOCIAL SÃO AS ÁREAS MAIS AFETADAS, 
            ONDE O TDA ACABA TRAZENDO CONSEQUÊNCIAS E 
            PREJUÍZOS QUE CAUSAM UM SOFRIMENTO SIGNIFICATIVO.
        </p>
      </div>
      {/* <!--Fim do Slide 10--> */}

        {/* <!--Slide 11--> */}
        <div className={`${styles.diferenca} reveal`}>
        <h1>TDA X TDAH</h1>
        </div>

        <div className={styles.floating}>
            <img src={Calmigo} alt="mascote"  />
        </div>

        <div className={`${styles.quadrado2} reveal`}>
        <p>
            ENQUANTO O TRANSTORNO DE DÉFICIT DE ATENÇÃO (TDA) SE CARACTERIZA PELA DESATENÇÃO, 
            FALTA DE FOCO E DIFICULDADE DE CONCENTRAÇÃO,
            O TDAH OCORRE QUANDO A SÍNDROME VEM ACOMPANHADA DA HIPERATIVIDADE
        </p>
      </div>
      {/* <!--Fim do Slide 11--> */}

      {/* <!--Slide 12--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={`${styles.quadrado17} reveal`}>
        <p>
        O DIAGNÓSTICO PRECOCE DO TDA É NECESSÁRIO PARA QUE O TRATAMENTO TAMBÉM SEJA REALIZADO O QUANTO ANTES. 
        ISSO É FUNDAMENTAL PARA QUE A PESSOA PORTADORA DA SÍNDROME OBTENHA QUALIDADE DE VIDA, COM UMA ROTINA MAIS PRODUTIVA E SAUDÁVEL.
        </p>
      </div>
      {/* <!--Fim do Slide 12--> */}


    {/* <!--Slide 13--> */}
    <div className={styles.img_slide16}>
    <img src={Slide13} alt="img_slide16"  />
      </div>

      <div className={`${styles.quadrado} reveal`}>
        <p>
        CONVIVER COM UMA PESSOA COM TDA PODE APRESENTAR DESAFIOS ÚNICOS, MAS TAMBÉM PODE SER UMA EXPERIÊNCIA ENRIQUECEDORA. 
        SEMPRE MANTENHA O RESPEITO E INCENTIVO POSITIVO 😉
        </p>
      </div>
      {/* <!--Fim do Slide 13--> */}
      </div>

      <Footer />
    </div>
  );
}
