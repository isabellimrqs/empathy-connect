import Header from "../../components/header/Header";
import styles from "./TranstornoPersonalidade.module.css";
import Calmigo from "../../assets/calmigo.png";
import Footer from "../../components/footer/Footer";
import QuizIcon from '../../assets/quiz.png'
import Slide33 from '../../assets/slide33.png'
import Slide36 from '../../assets/slide36.png'
import Artistas from '../../assets/artistas.png'

export default function TranstornoPersonalidade() {
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

        <div className="libras">

        </div>
        <div className={styles.title_subtitle}>
          <h2>TRANSTORNO DE PERSONALIDADE</h2>
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

      {/* <!--Slide 32--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={styles.quadrado14}>
        <p>
        TRANSTORNO DE PERSONALIDADE É UM CONJUNTO DE DOENÇAS PSIQUIÁTRICAS CARACTERIZADAS POR DESVIOS DE COMPORTAMENTO BEM RÍGIDOS 
        E MAL AJUSTADOS QUE PREJUDICAM A FORMA QUE O PACIENTE LIDA COM SEUS IMPULSOS E COM AS PESSOAS AO REDOR.
        </p>
      </div>
      {/* <!--Fim do Slide 32--> */}

      {/* <!--Slide 33--> */}
      <div className={styles.img_slide15}>
        <img src={Slide33} alt="img_slide15" />
      </div>

      <div className={styles.quadrado17}>
        <p>
        AS CAUSAS DO TRANSTORNO DE PERSONALIDADE VARIAM DE ACORDO COM A DOENÇA, 
            MAS GERALMENTE SÃO OCASIONADOS PELA INTERAÇÃO DOS GENES COM O AMBIENTE. OU SEJA, 
            O PACIENTE NASCE COM A PREDISPOSIÇÃO GENÉTICA DA DOENÇA E OS FATORES AMBIENTAIS AUMENTAM A SUA INCIDÊNCIA.
        </p>
      </div>
      {/* <!--Fim do Slide 33--> */}

        {/* <!--Slide 34--> */}

        <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={styles.quadrado14}>
        <p>
        OS SINTOMAS DEPENDEM DO TIPO DE DOENÇA, GERALMENTE APARECEM EM FORMA DE: FALTA DE IDENTIDADE,  
        DIFICULDADE DE SE RELACIONAR COM OUTRAS PESSOAS, FALTA DE RESPEITO COM OUTRAS PESSOAS,  FALTA DE EMPATIA COM OS OUTROS;
        </p>
      </div>
      {/* <!--Fim do Slide 34--> */}

      {/* <!--Slide 35--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>

      <div className={styles.quadrado14}>
        <p>
          TRANSTORNO DE PERSONALIDADE TEM CURA, 
            DEPENDENDO DA DOENÇA. GRANDE PARTE DOS CASOS SE RESOLVE COM ACOMPANHAMENTO MÉDICO MULTIDISCIPLINAR, 
            NORMALMENTE FORMADO POR PSIQUIATRAS E PSICÓLOGOS.
        </p>
      </div>
      {/* <!--Fim do Slide 35--> */}



    {/* <!--Slide 36--> */}
    <div className={styles.img_slide16}>
        <img src={Slide36} alt="img_slide36"  />
      </div>

      <div className={styles.quadrado}>
        <p>
        CONVIVER COM UMA PESSOA COM TRANSTORNO DE BORDERLINE REQUER UMA DOSE EXTRA DE PACIÊNCIA, AFETO E SABEDORIA. 
            SEMPRE DEMONSTRE IMPORTÂNCIA E CLAREZA NA COMUNICAÇÃO...
        </p>
      </div>
      {/* <!--Fim do Slide 36--> */}

      {/* <!--Slide 37--> */}
      <div className={styles.floating}>
        <img src={Calmigo} alt="mascote"  />
      </div>
      <div className={styles.quadrado}>
        <p>
        CURIOSIDADE: VEJA ALGUMAS CELEBRIDADES QUE POSSUÍAM ESSE TRANSTORNO!
        </p>
      </div>


      <div className={styles.artistas}>
        <img src={Artistas} alt="artistas"  />
      </div>
      {/* <!--Fim do Slide 37--> */}
      </div>

      <Footer />
    </div>
  );
}
