import React from "react";
import Header from "../../components/header/Header";
import styles from "./Depressao.module.css";
import Calmigo from "../../assets/calmigo.png";
import Footer from "../../components/footer/Footer";
import QuebraCabecaIcon from "../../assets/quebra_cabeca.png";
import Podcast from "../../assets/podcast.png";
import Slide28 from "../../assets/slide28.png";
import Slide29 from "../../assets/slide29.png";

export default function Depressao() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>O Calmigo tem um desafio para você</h1>
        <div className={styles.container_tda}>
          {/* Início do game */}
          <div className={styles.iconGame}>
            <a href="https://calendario-calmigo.vercel.app/">
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

        <div className={styles.title_subtitle}>
          <h2>DEPRESSÃO</h2>
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

        {/* <!--Slide 27--> */}
        <div className={styles.floating}>
          <img src={Calmigo} alt="mascote" />
        </div>

        <div className={styles.quadrado17}>
          <p>
            A DEPRESSÃO É UM TRANSTORNO MENTAL QUE AFETA QUASE 10% DA POPULAÇÃO
            MUNDIAL E CARACTERIZA-SE POR SENTIMENTOS CONSTANTES DE TRISTEZA
            PROFUNDA, APATIA, PERDA DE INTERESSE EM ATIVIDADES ANTES PRAZEROSAS
            POR UM PERÍODO CONSIDERÁVEL DE TEMPO.
          </p>
        </div>
        {/* <!--Fim do Slide 27--> */}

        {/* <!--Slide 28--> */}
        <div className={styles.img_slide15}>
          <img src={Slide28} alt="img_slide15" />
        </div>

        <div className={styles.quadrado2}>
          <p>
            A DEPRESSÃO PODE AJUDAR A DESENCADEAR OU POTENCIALIZAR OUTROS
            PROBLEMAS DE SAÚDE DE ORDEM FÍSICA, AGRAVANDO AINDA MAIS O QUADRO
            GERAL. OS PROBLEMAS DE SONO ESTÃO DIRETAMENTE LIGADOS À DEPRESSÃO,
            SEJA PELO SEU EXCESSO OU A FALTA DELE E ESSA ATIVIDADE É ESSENCIAL
            PARA A MANUTENÇÃO DAS ATIVIDADES DO ORGANISMO.
          </p>
        </div>
        {/* <!--Fim do Slide 28--> */}

        {/* <!--Slide 29--> */}
        <div className={styles.img_slide15}>
          <img src={Slide29} alt="img_slide29" />
        </div>

        <div className={styles.quadrado2}>
          <p>
            PARA TRATAMENTO, EXISTE A UNIÃO DO USO DE ANTIDEPRESSIVOS JUNTAMENTE
            COM A PSICOTERAPIA, A FIM DE ACELERAR O PROCESSO E PROMOVER MELHOR
            QUALIDADE DE VIDA AO PACIENTE. A MUDANÇA NO ESTILO DE VIDA TAMBÉM
            PODE SER PRERROGATIVA NO TRATAMENTO, TENDO EM VISTA QUE ESSE É UM
            FATOR CAUSADOR DO TRANSTORNO.
          </p>
        </div>
        {/* <!--Fim do Slide 29--> */}

        {/* <!--Slide 30--> */}
        <div className={styles.quadrado}>
          <p>AQUI ESTÁ UM PODCAST PARA AUTOCONHECIMENTO:</p>
        </div>

        <div className={styles.podcast}>
          <img src={Calmigo} alt="mascote" />
        <div className={styles.podcast}>
          <a href="https://open.spotify.com/episode/2mSrFs0cbSPlMi3mXFfaD1?si=53f410abcf9d4c80" target="_blank">
            <img className={styles.spotify} src={Podcast} alt="mascote" />
          </a>
        </div>
        </div>

        {/* <!--Fim do Slide 30--> */}

        {/* <!--Slide 31--> */}
        <div className={styles.floating}>
          <img src={Calmigo} alt="mascote" />
        </div>
        <div className={styles.quadrado}>
          <p>
            LEMBRE-SE QUE O IMPORTANTE NÃO É VENCER TODOS OS DIAS E SIM, LUTAR
            SEMPRE. NÃO HESITE EM PEDIR AJUDA 🙂
          </p>
        </div>
        {/* <!--Fim do Slide 31--> */}
      </div>
      <Footer />
    </div>
  );
}
