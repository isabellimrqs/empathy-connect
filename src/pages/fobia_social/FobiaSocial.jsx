import React from "react";
import Header from "../../components/header/Header";
import styles from "./FobiaSocial.module.css";
import Calmigo from "../../assets/calmigo.png";
import LabirintoIcon from "../../assets/labirinto_icon.png";
import Footer from "../../components/footer/Footer";
import Slide15 from '../../assets/slide15.png'
import Slide16 from '../../assets/slide16.png'

export default function FobiaSocial() {
  
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>O Calmigo tem um desafio para você</h1>
        <div className={styles.container_tda}>
          {/* Início do game */}
          <div className={styles.iconGame}>
            <a href="https://labirinto-calmigo.vercel.app/">
              <img src={LabirintoIcon} alt="Labirinto Icon" />
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
          <h2>FOBIA SOCIAL</h2>
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

      {/* <!--Slide 14--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={styles.quadrado14}>
        <p>
          A FOBIA SOCIAL É O MEDO OU A ANSIEDADE RELACIONADA A DETERMINADAS
          SITUAÇÕES SOCIAIS OU DE DESEMPENHO. ESSAS SITUAÇÕES SÃO COM FREQUÊNCIA
          EVITADAS OU SUPORTADAS COM MUITA ANGÚSTIA POR QUEM SOFRE DA DOENÇA.{" "}
        </p>
      </div>
      {/* <!--Fim do Slide 14--> */}

      {/* <!--Slide 15--> */}
      <div className={styles.img_slide15}>
        <img src={Slide15} alt="img_slide15" />
      </div>

      <div className={styles.quadrado}>
        <p>
          A PESSOA COM FOBIA SOCIAL SE PREOCUPA COM O FATO DE QUE SUAS AÇÕES
          SEJAM CONSIDERADAS INADEQUADAS. EM GERAL, ELA TEME QUE SUA ANSIEDADE
          SE TORNE ÓBVIA.
        </p>
      </div>
      {/* <!--Fim do Slide 15--> */}

      {/* <!--Slide 16--> */}
      <div className={styles.img_slide16}>
        <img src={Slide16} alt="img_slide16"  />
      </div>

      <div className={styles.quadrado}>
        <p>
          O TRATAMENTO SE BASEIA EM: TERAPIA DE EXPOSIÇÃO, TERAPIA
          COGNITIVO-COMPORTAMENTAL, ANTIDEPRESSIVOS E PODE PERSISTIR SE NÃO FOR
          TRATADA...
        </p>
      </div>
      {/* <!--Fim do Slide 16--> */}

      {/* <!--Slide 17--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={styles.quadrado17}>
        <p>
          DICA DO CALMIGO: QUANDO SENTIR QUE VAI PASSAR OU PASSOU VERGONHA EM
          UMA SITUAÇÃO, PARE E PENSE, VOCÊ LEMBRA DE TODAS AS PESSOAS QUE JÁ
          PAGARAM MICO NA SUA FRENTE? ACHO QUE NÃO NÉ... :D
        </p>
      </div>
      {/* <!--Fim do Slide 17--> */}
      </div>

      <Footer />
    </div>
  );
}
