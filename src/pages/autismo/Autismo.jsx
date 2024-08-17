import React from "react";
import Header from "../../components/header/Header";
import styles from "./Autismo.module.css";
import Calmigo from "../../assets/calmigo.png";
import Footer from "../../components/footer/Footer";
import JogoMemoriaIcon from '../../assets/jogo_memoria.png'
import Slide39 from '../../assets/slide39.png'
import Serie1 from '../../assets/serie1.webp'
import Serie2 from '../../assets/serie2.jpg'

export default function Autismo() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>O Calmigo tem um desafio para você</h1>
        <div className={styles.container_tda}>
          {/* Início do game */}
          <div className={styles.iconGame}>
            <a href="/autismo/loginJogo">
              <img src={JogoMemoriaIcon} alt="Quiz Icon" />
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

        <div className="libras">
        </div>
        <div className={styles.title_subtitle}>
          <h2>AUTISMO</h2>
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

      {/* <!--Slide 38--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={styles.quadrado2}>
        <p>
        O TRANSTORNO DO ESPECTRO AUTISTA (TEA) É UM DISTÚRBIO DO 
        NEURODESENVOLVIMENTO CARACTERIZADO POR DESENVOLVIMENTO ATÍPICO, DÉFICITS NA COMUNICAÇÃO E NA 
        INTERAÇÃO SOCIAL, PADRÕES DE COMPORTAMENTOS REPETITIVOS E ESTEREOTIPADOS.
        </p>
      </div>
      {/* <!--Fim do Slide 38--> */}

      {/* <!--Slide 39--> */}
      <div className={styles.img_slide15}>
        <img src={Slide39} alt="img_slide39" />
      </div>

      <div className={styles.quadrado17}>
        <p>
        EMBORA AINDA NÃO TENHA CURA, O TEA PODE SER TRATADO DE INÚMERAS FORMAS.
        COM O APOIO DE UMA EQUIPE MULTIDISCIPLINAR (DIFERENTES PROFISSIONAIS), 
        A CRIANÇA PODE DESENVOLVER FORMAS DE SE COMUNICAR SOCIALMENTE E DE TER MAIOR ESTABILIDADE EMOCIONAL. 
        </p>
      </div>
      {/* <!--Fim do Slide 39--> */}

        {/* <!--Slide 40--> */}
        <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={styles.quadrado}>
        <p>
        É IMPORTANTE LEMBRAR QUE NENHUMA PESSOA COM TEA PODE SER DISCRIMINADA 
        EM FUNÇÃO DE SUAS DIFICULDADES OU IMPEDIDA DE FREQUENTAR QUALQUER LUGAR PÚBLICO!
        </p>
      </div>
      {/* <!--Fim do Slide 40--> */}

      {/* <!--Slide 41--> */}
      <div className={styles.quadrado2}>
        <p>
        NA SÉRIE “THE GOOD DOCTOR” É CONTADA A HISTÓRIA UM BRILHANTE JOVEM CIRURGIÃO 
        COM SÍNDROME DE SAVANT E AUTISMO, QUE NASCEU EM UMA PEQUENA CIDADE, ONDE TEVE UMA INFÂNCIA PROBLEMÁTICA.
        </p>
      </div>

      <div className={styles.img_serie}>
        <img src={Serie1} alt="Série The Good Doctor"  />
      </div>

      {/* <!--Fim do Slide 41--> */}


    {/* <!--Slide 42--> */}
      <div className={styles.quadrado2}>
        <p>
        TAMBÉM A SÉRIE “ATYPICAL”, QUANDO UM ADOLESCENTE COM TRAÇOS DE AUTISMO RESOLVE ARRUMAR UMA NAMORADA, SUA BUSCA POR INDEPENDÊNCIA COLOCA A FAMÍLIA TODA EM UMA AVENTURA DE AUTODESCOBERTA.
        </p>
      </div>

      <div className={styles.img_serie}>
        <img src={Serie2} alt="Série Atypical"  />
      </div>
      {/* <!--Fim do Slide 42--> */}
      </div>

      <Footer />
    </div>
  );
}
