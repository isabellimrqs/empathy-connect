import React from "react";
import Header from "../../components/header/Header";
import styles from "./TranstornoAlimentar.module.css";
import Calmigo from "../../assets/calmigo.png";
import Footer from "../../components/footer/Footer";
import QuizIcon from '../../assets/quiz.png'
import Slide23 from '../../assets/slide23.png'
import Slide24 from '../../assets/slide24.png'
import Slide26 from '../../assets/slide26.png'
import VLibras from "@djpfs/react-vlibras";

export default function TranstornoAlimentar() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>O Calmigo tem um desafio para você</h1>
        <div className={styles.container_tda}>
          {/* Início do game */}
          <div className={styles.iconGame}>
            <a href="#">
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

        <div className="libras">
        <VLibras/>
        </div>
        <div className={styles.title_subtitle}>
          <h2>TRANSTORNO ALIMENTAR</h2>
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

      {/* <!--Slide 22--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={styles.quadrado17}>
        <p>
        O TRANSTORNO ALIMENTAR RETRATA O TOTAL DESCOMPASSO AO INGERIR ALIMENTOS OU, ENTÃO, A PERTURBAÇÃO PSICOLÓGICA DE NÃO COMER. 
        TRATA-SE DE UMA CONDIÇÃO QUE É CONSIDERAVELMENTE GRAVE E QUE CAUSA IMPACTO GRAVE NA SAÚDE DE QUEM SOFRE DA DOENÇA.
        </p>
      </div>
      {/* <!--Fim do Slide 22--> */}

      {/* <!--Slide 23--> */}
      <div className={styles.img_slide15}>
        <img src={Slide23} alt="img_slide15" />
      </div>

      <div className={styles.quadrado14}>
        <p>
        OU A PESSOA DEIXA DE COMER, POR ESTAR COMPLEXADA EM RELAÇÃO AO SEU PESO, OU ACABA INGERINDO MUITOS ALIMENTOS POR CONTA DE UM DESCONTROLE EMOCIONAL.
        SENDO ASSIM, A QUESTÃO EMOCIONAL É MUITO PRESENTE NO DISTÚRBIO.
        </p>
      </div>
      {/* <!--Fim do Slide 23--> */}

        {/* <!--Slide 24--> */}

        <div className={styles.img_slide15}>
        <img src={Slide24} alt="img_slide24" />
      </div>

      <div className={styles.quadrado17}>
        <p>
            OU A PESSOA DEIXA DE COMER, POR ESTAR COMPLEXADA EM RELAÇÃO AO NA ANOREXIA NERVOSA (PRIVAÇÃO DE ALIMENTOS), OS SINTOMAS SÃO BASTANTE GRAVES. 
            CABE CITAR ANEMIA, HIPOTERMIA, ETC.
            O MAIS MARCANTE É A QUESTÃO PSICOLÓGICA ENVOLVIDA: PREOCUPAÇÃO EM NÃO ENGORDAR E, CONSEQUENTEMENTE, A DISTORÇÃO DA PRÓPRIA IMAGEM.
        </p>
      </div>
      {/* <!--Fim do Slide 24--> */}

      {/* <!--Slide 25--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={styles.quadrado17}>
        <p>
            NO TRATAMENTO, A PARTE PSICOLÓGICA TEM QUE SER TRABALHADA PARA QUE OS HÁBITOS ALIMENTARES SEJAM REEDUCADOS. 
            OS PROFISSIONAIS DA SAÚDE MENTAL AJUDAM O PACIENTE A RESSIGNIFICAR A SUA RELAÇÃO COM O PRÓPRIO CORPO E COLOCAR A MENTE EM ORDEM. 
        </p>
      </div>
      {/* <!--Fim do Slide 25--> */}


    {/* <!--Slide 26--> */}
    <div className={styles.img_slide16}>
        <img src={Slide26} alt="img_slide16"  />
      </div>

      <div className={styles.quadrado}>
        <p>
        É, DE FATO, UMA DOENÇA QUE PRECISA SER TRATADA COM ATENÇÃO. CUIDE DE SUA VIDA E PRESERVE SUA VITALIDADE.
        </p>
      </div>
      {/* <!--Fim do Slide 26--> */}
      </div>

      <Footer />
    </div>
  );
}
