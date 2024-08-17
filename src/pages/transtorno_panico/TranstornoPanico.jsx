import React from "react";
import Header from "../../components/header/Header";
import styles from "./TranstornoPanico.module.css";
import Calmigo from "../../assets/calmigo.png";
import Footer from "../../components/footer/Footer";
import QuizIcon from '../../assets/quiz.png'
import Slide19 from '../../assets/slide19.png'
import Slide20 from '../../assets/slide20.png'

export default function TranstornoPanico() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <h1>O Calmigo tem um desafio para você</h1>
        <div className={styles.container_tda}>
          {/* Início do game */}
          <div className={styles.iconGame}>
            <a href="https://quiz-calmigo.vercel.app/">
              <img src={QuizIcon} alt="Quiz Icon" />
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

        <div className={styles.title_subtitle}>
          <h2>TRANSTORNO DO PÂNICO</h2>
          <h3>CAUSA E SINTOMAS</h3>
        </div>
      </div>

      {/* <!--Slide 1--> */}
      <div className={styles.baloes}>
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={styles.quadrado}>
        <p>
          OLÁ COLABORADOR OU COLABORADORA, COMO VAI ESSA VIDA? E ESSA CABECINHA?
        </p>
      </div>
      {/* <!--Fim do Slide 1--> */}

      {/* <!--Slide 2--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={styles.quadrado}>
        <p>
          BOM, PRA VOCÊ ESTAR AQUI LENDO ISSO, SIGINIFICA QUE ALGUMA COISA ESTÁ
          FORA DO LUGAR, CERTO?
        </p>
      </div>
      {/* <!--Fim do Slide 2--> */}


      {/* <!--Slide 18--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={styles.quadrado17}>
        <p>
        O TRANSTORNO DO PÂNICO PODE TER COMO ORIGEM SITUAÇÕES EXTREMAS DE ESTRESSE, COMO CRISES FINANCEIRAS, BRIGAS, SEPARAÇÕES OU MORTES NA FAMÍLIA, EXPERIÊNCIAS TRAUMÁTICAS NA INFÂNCIA OU DEPOIS DE ASSALTOS E SEQUESTROS. 
        PESSOAS CUJOS PAIS TÊM TRANSTORNOS DE ANSIEDADE SÃO MAIS SUSCETÍVEIS DE DESENVOLVER TP.
        </p>
      </div>
      {/* <!--Fim do Slide 18--> */}

        {/* <!--Slide 19--> */}

        <div className={styles.img_slide15}>
        <img src={Slide19} alt="img_slide24" />
      </div>

      <div className={styles.quadrado17}>
        <p>
        ALGUMAS RECOMEDAÇÕES SÃO: PRATIQUE EXERCÍCIOS FÍSICOS. ELES PROVOCAM ALGUMAS SENSAÇÕES SEMELHANTES ÀS DA SÍNDROME DO PÂNICO, COMO TAQUICARDIA E SUDORESE, 
        PROCURE ASSISTÊNCIA MÉDICA!!! O TRANSTORNO DO PÂNICO É UMA DOENÇA COMO TANTAS OUTRAS E QUANTO ANTES FOR FEITO O DIAGNÓSTICO, MELHOR SERÁ A RESPOSTA AO TRATAMENTO.
        </p>
      </div>
      {/* <!--Fim do Slide 19--> */}

      {/* <!--Slide 20--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={styles.quadrado}>
        <p>
        LEMBRE-SE QUE NOSSA SAÚDE É O QUE FAZEMOS DELA, DÊ ATENÇÃO E ELA MELHORA, NÃO DÊ ATENÇÃO E ELA DIMINUI....
        NÃO HESITE EM PEDIR AJUDA 😊 
        </p>
      </div>
      {/* <!--Fim do Slide 20--> */}


    {/* <!--Slide 21--> */}
    <div className={styles.img_slide16}>
        <img src={Slide20} alt="img_slide16"  />
      </div>

      <div className={styles.quadrado}>
        <p>
        É, DE FATO, UMA DOENÇA QUE PRECISA SER TRATADA COM ATENÇÃO. CUIDE DE SUA VIDA E PRESERVE SUA VITALIDADE.
        </p>
      </div>
      {/* <!--Fim do Slide 21--> */}
      </div>

      <Footer />
    </div>
  );
}
