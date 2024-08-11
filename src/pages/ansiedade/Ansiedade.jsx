import React from "react";
import Header from "../../components/header/Header";
import styles from "./Ansiedade.module.css";
import Calmigo from "../../assets/calmigo.png";
import Footer from "../../components/footer/Footer";
import Slide4 from "../../assets/slide4.png";
import Slide5 from "../../assets/slide5.png";
import Books from "../../assets/books.png";

export default function Ansiedade() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>O Calmigo tem um desafio para você</h1>
        <div className={styles.container_tda}>
          {/* Início do game */}
        

          {/* Fim do game */}
          <div className={styles.mascote_tda}>
            <img src={Calmigo} alt="mascote" />
          </div>
        </div>

        <div className="libras"></div>
        <div className={styles.title_subtitle}>
          <h2>ANSIEDADE</h2>
          <h3>CAUSA E SINTOMAS</h3>
        </div>
      </div>

      {/* <!--Slide 1--> */}
      <div className={styles.baloes}>
        <div className={styles.floating}>
          <img src={Calmigo} alt="mascote" />
        </div>

        <div className={styles.quadrado}>
          <p>
            OLÁ COLABORADOR OU COLABORADORA, COMO VAI ESSA VIDA? E ESSA
            CABECINHA?
          </p>
        </div>
        {/* <!--Fim do Slide 1--> */}

        {/* <!--Slide 2--> */}
        <div className={styles.floating}>
          <img src={Calmigo} alt="mascote" />
        </div>

        <div className={styles.quadrado}>
          <p>
            BOM, PRA VOCÊ ESTAR AQUI LENDO ISSO, SIGINIFICA QUE ALGUMA COISA
            ESTÁ FORA DO LUGAR, CERTO?
          </p>
        </div>
        {/* <!--Fim do Slide 2--> */}

        {/* <!--Slide 3--> */}
        <div className={styles.floating}>
          <img src={Calmigo} alt="mascote" />
        </div>

        <div className={styles.quadrado2}>
          <p>
            A ANSIEDADE PODE SER CAUSADA POR UMA COMBINAÇÃO DE FATORES,
            ENVOLVENDO ASPECTOS BIOLÓGICOS, PSICOLÓGICOS E AMBIENTAIS. AS
            PESSOAS COM HISTÓRICO FAMILIAR DE ANSIEDADE TÊM MAIOR PROBABILIDADE
            DE DESENVOLVER A CONDIÇÃO.
          </p>
        </div>
        {/* <!--Fim do Slide 3--> */}

        {/* <!--Slide 4--> */}
        <div className={styles.img_slide15}>
          <img src={Slide4} alt="img_slide4" />
        </div>

        <div className={styles.quadrado17}>
          <p>
            OS EVENTOS TRAUMÁTICOS, COMO ABUSO, VIOLÊNCIA, ACIDENTES OU
            EXPERIÊNCIAS DE VIDA ESTRESSANTES, PODEM DESENCADEAR A ANSIEDADE. OS
            TRAUMAS PASSADOS PODEM DEIXAR MARCAS EMOCIONAIS E AUMENTAR A
            SENSIBILIDADE A SITUAÇÕES DE ESTRESSE. O CONSUMO EXCESSIVO DE
            SUBSTÂNCIAS COMO ÁLCOOL, DROGAS, CAFEÍNA OU TABACO PODE DESENCADEAR
            OU AGRAVAR OS SINTOMAS.
          </p>
        </div>
        {/* <!--Fim do Slide 4--> */}

        {/* <!--Slide 5--> */}

        <div className={styles.img_slide15}>
          <img src={Slide5} alt="img_slide5" />
        </div>

        <div className={styles.quadrado}>
          <p>
            É SEMPRE IMPORTANTE LEMBRAR QUE, EM CASOS GRAVES DA DOENÇA, É
            PRECISO REALIZAR ACOMPANHAMENTO MÉDICO. PORÉM, VOCÊ PODE REALIZAR
            ALGUMAS AÇÕES PARA MITIGAR OS DANOS...
          </p>
        </div>
        {/* <!--Fim do Slide 5--> */}

        {/* <!--Slide 6--> */}
        <div className={styles.floating}>
          <img src={Calmigo} alt="mascote" />
        </div>

        <div className={styles.quadrado14}>
          <p>
            ALGUMAS FORMAS DE AJUDAR SÃO: EVITAR REAÇÕES RAIVOSAS, INCENTIVAR A
            EXERCÍCIOS FÍSICOS, AJUDAR NA RESPIRAÇÃO E ENTENDER O ENTORNO PODE
            SER DE MUITA UTILIDADE TAMBÉM, POIS PODE ACONTECER DE ESTAR
            RELACIONADO COM O AMBIENTE E ENTRE OUTRAS QUESTÕES
          </p>
        </div>
        {/* <!--Fim do Slide 6--> */}

        {/* <!--Slide 7--> */}
        <div className={styles.quadrado}>
          <p>AQUI ESTÃO ALGUNS LIVROS ÚTEIS PARA AUTOCONHECIMENTO:</p>
        </div>
        <div className={styles.books}>
          <img src={Books} alt="livros" />
        </div>

        {/* <!--Fim do Slide 7--> */}

        {/* <!--Slide 8--> */}
        <div className={styles.floating}>
          <img src={Calmigo} alt="mascote" />
        </div>

        <div className={styles.quadrado}>
          <p>
            SUA SUPERAÇÃO É UM LEMBRETE DE QUÃO INCRÍVEL A FORÇA HUMANA PODE
            SER, NÃO HESITE EM PEDIR AJUDA :D
          </p>
        </div>
        {/* <!--Fim do Slide 8--> */}
      </div>
      <Footer />
    </div>
  );
}
